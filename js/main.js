// === Navbar（白色常驻顶栏，无需滚动变色） ===
var navbar = document.getElementById('navbar');

// === Mobile menu ===
var mobileBtn = document.getElementById('mobileBtn');
var navLinks = document.getElementById('navLinks');
if (mobileBtn && navLinks) {
  mobileBtn.addEventListener('click', function () { navLinks.classList.toggle('open'); });
  navLinks.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () { navLinks.classList.remove('open'); });
  });
}

// === Fade-up animation on scroll ===
var observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });
document.querySelectorAll('.fade-up').forEach(function (el) { observer.observe(el); });

// === Language toggle (中 / EN) ===
var currentLang = localStorage.getItem('jinhui_lang') || 'zh';
var langToggle = document.getElementById('langToggle');

function applyLanguage() {
  document.documentElement.lang = currentLang === 'zh' ? 'zh-Hant' : 'en';
  document.querySelectorAll('[data-zh]').forEach(function (el) {
    var text = el.getAttribute('data-' + currentLang);
    if (text !== null) el.innerHTML = text;
  });
  document.querySelectorAll('[data-zh-placeholder]').forEach(function (el) {
    var placeholder = el.getAttribute('data-' + currentLang + '-placeholder');
    if (placeholder !== null) el.setAttribute('placeholder', placeholder);
  });
  if (langToggle) langToggle.textContent = currentLang === 'zh' ? 'EN' : '中文';
}

if (langToggle) {
  langToggle.addEventListener('click', function () {
    currentLang = currentLang === 'zh' ? 'en' : 'zh';
    localStorage.setItem('jinhui_lang', currentLang);
    applyLanguage();
  });
}
applyLanguage();

// === Form submission ===
var form = document.getElementById('inquiryForm');
var formSuccess = document.getElementById('formSuccess');
if (form && formSuccess) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    form.style.display = 'none';
    formSuccess.style.display = 'block';
  });
}
