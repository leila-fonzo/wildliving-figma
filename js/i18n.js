/* ──────────────────────────────────────────────────────────
   WildLiving — shared i18n engine
   Single source of truth for language state, persistence and
   the translation-application logic used by every page.
   Site-wide strings (nav, footer, aria labels) live in
   WL_I18N_COMMON so they never drift between pages. Each page
   only defines its own page-specific `es`/`en` dictionaries and
   calls wlInitI18n(es, en, opts).
   ────────────────────────────────────────────────────────── */

window.WL_SUPPORTED_LANGS = ['es', 'en'];
window.WL_STORAGE_KEY = 'wl_lang';

window.WL_I18N_COMMON = {
  es: {
    nav_wildstays: "Wildstays",
    nav_wildhomes: "Wildhomes",
    nav_sobre: "Sobre",
    nav_contacto: "Contacto",
    aria_open_menu: "Abrir menú",
    aria_close_menu: "Cerrar menú",

    foot_tagline: "Find your next home in nature.",
    foot_destinos: "Argentina · España · Grecia",
    foot_sust: "WildLiving cree en el turismo como forma de vida, no como consumo.",
    foot_h_plataforma: "Plataforma",
    foot_h_propiet: "Propietarios",
    foot_h_news: "Newsletter",
    foot_sobre: "Sobre WildLiving",
    foot_contacto: "Contacto",
    foot_selected: "WildLiving Selected",
    foot_acuerdo: "Acuerdo de colaboración",
    foot_ver_coll: "Ver Collection",
    foot_news_ph: "tu@email.com",
    foot_copy: "© 2026 WildLiving · wildliving.life · Todos los derechos reservados",
    foot_keywords: "Turismo sustentable · Slow travel · Vivienda consciente",

    lang_es: "ES",
    lang_en: "EN"
  },
  en: {
    nav_wildstays: "Wildstays",
    nav_wildhomes: "Wildhomes",
    nav_sobre: "About",
    nav_contacto: "Contact",
    aria_open_menu: "Open menu",
    aria_close_menu: "Close menu",

    foot_tagline: "Find your next home in nature.",
    foot_destinos: "Argentina · Spain · Greece",
    foot_sust: "WildLiving believes in tourism as a way of life, not as consumption.",
    foot_h_plataforma: "Platform",
    foot_h_propiet: "Property owners",
    foot_h_news: "Newsletter",
    foot_sobre: "About WildLiving",
    foot_contacto: "Contact",
    foot_selected: "WildLiving Selected",
    foot_acuerdo: "Collaboration agreement",
    foot_ver_coll: "View Collection",
    foot_news_ph: "your@email.com",
    foot_copy: "© 2026 WildLiving · wildliving.life · All rights reserved",
    foot_keywords: "Sustainable tourism · Slow travel · Conscious living",

    lang_es: "ES",
    lang_en: "EN"
  }
};

function wlDetectLang() {
  var stored = localStorage.getItem(window.WL_STORAGE_KEY);
  if (stored && window.WL_SUPPORTED_LANGS.indexOf(stored) !== -1) return stored;
  var browser = (navigator.language || navigator.userLanguage || 'es').toLowerCase().slice(0, 2);
  return window.WL_SUPPORTED_LANGS.indexOf(browser) !== -1 ? browser : 'es';
}

function t(key) {
  var lang = window.__wl_lang || 'es';
  var T = window.TRANSLATIONS || {};
  return (T[lang] && T[lang][key] !== undefined ? T[lang][key] : null)
      || (T['es'] && T['es'][key] !== undefined ? T['es'][key] : null)
      || key;
}

function applyTranslations(lang) {
  var T = window.TRANSLATIONS || {};
  window.__wl_lang = lang;
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach(function (el) {
    var key = el.dataset.i18n;
    if (T[lang] && T[lang][key] !== undefined) el.textContent = T[lang][key];
  });
  document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
    var key = el.dataset.i18nHtml;
    if (T[lang] && T[lang][key] !== undefined) el.innerHTML = T[lang][key];
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(function (el) {
    var key = el.dataset.i18nPh;
    if (T[lang] && T[lang][key] !== undefined) el.placeholder = T[lang][key];
  });
  document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
    var key = el.dataset.i18nAria;
    if (T[lang] && T[lang][key] !== undefined) el.setAttribute('aria-label', T[lang][key]);
  });
  document.querySelectorAll('[data-i18n-alt]').forEach(function (el) {
    var key = el.dataset.i18nAlt;
    if (T[lang] && T[lang][key] !== undefined) el.setAttribute('alt', T[lang][key]);
  });
  document.querySelectorAll('[data-i18n-title]').forEach(function (el) {
    var key = el.dataset.i18nTitle;
    if (T[lang] && T[lang][key] !== undefined) el.setAttribute('title', T[lang][key]);
  });
  document.querySelectorAll('.lang-btn').forEach(function (btn) {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  if (T[lang] && T[lang]['meta_title']) document.title = T[lang]['meta_title'];
  var metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc && T[lang] && T[lang]['meta_description']) metaDesc.content = T[lang]['meta_description'];
  var ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle && T[lang] && T[lang]['meta_title']) ogTitle.content = T[lang]['meta_title'];
  var ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc && T[lang] && T[lang]['meta_description']) ogDesc.content = T[lang]['meta_description'];
  var twTitle = document.querySelector('meta[name="twitter:title"]');
  if (twTitle && T[lang] && T[lang]['meta_title']) twTitle.content = T[lang]['meta_title'];
  var twDesc = document.querySelector('meta[name="twitter:description"]');
  if (twDesc && T[lang] && T[lang]['meta_description']) twDesc.content = T[lang]['meta_description'];

  if (typeof window.onLangApply === 'function') window.onLangApply(lang);
}

function setLang(lang) {
  if (window.WL_SUPPORTED_LANGS.indexOf(lang) === -1) return;
  localStorage.setItem(window.WL_STORAGE_KEY, lang);
  applyTranslations(lang);
}

/**
 * Merge a page's own es/en dictionaries with the shared nav/footer
 * strings, expose the result as window.TRANSLATIONS, and apply the
 * detected language once the DOM is ready.
 */
function wlInitI18n(pageEs, pageEn, opts) {
  opts = opts || {};
  window.TRANSLATIONS = {
    es: Object.assign({}, window.WL_I18N_COMMON.es, pageEs || {}),
    en: Object.assign({}, window.WL_I18N_COMMON.en, pageEn || {})
  };
  var start = function () {
    applyTranslations(wlDetectLang());
    if (typeof opts.onReady === 'function') opts.onReady();
  };
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }
}
