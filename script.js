// Central Google Ads Tracking Architecture
var G_ID = 'AW-XXXXXXXXXXX';
var C_L  = 'XXXXXXXXXXXXXXXXXX';
var W_L  = 'XXXXXXXXXXXXXXXXXX';
var F_L  = 'XXXXXXXXXXXXXXXXXX';
var DEV_NUMS = ['0578539687', '966578539687'];

// 1. Initialise GTAG & DataLayer in Global Scope immediately
window.dataLayer = window.dataLayer || [];
function gtag(){ dataLayer.push(arguments); }
gtag('js', new Date());
gtag('config', G_ID);

(function() {
  var gScript = document.createElement('script');
  gScript.async = true;
  gScript.src = 'https://www.googletagmanager.com/gtag/js?id=' + G_ID;
  (document.head || document.documentElement).appendChild(gScript);
})();

// Unregister legacy Service Workers
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.getRegistrations().then(function(regs) {
    regs.forEach(function(r) { r.unregister(); });
  });
}

// 2. Click Sensor: Call & WhatsApp Conversions with Dev Exclusion
document.addEventListener('click', function(e) {
  var target = e.target.closest('a');
  if (!target) return;

  var href = target.getAttribute('href') || '';

  // Prevent counting Developer's clicks
  var isDev = DEV_NUMS.some(function(num) { return href.includes(num); });
  if (isDev) return;

  if (href.startsWith('tel:')) {
    gtag('event', 'conversion', { 'send_to': G_ID + '/' + C_L });
  } else if (href.includes('wa.me') || href.includes('whatsapp.com')) {
    gtag('event', 'conversion', { 'send_to': G_ID + '/' + W_L });
  }
}, true);

// 3. UI Interactions (Drawer, Accordion, Lightbox, Forms)
document.addEventListener('DOMContentLoaded', function() {
  // Fire conversion on thank-you page automatically
  if (window.location.pathname.includes('thank-you')) {
    gtag('event', 'conversion', { 'send_to': G_ID + '/' + F_L });
  }

  // Luxury Slide Drawer Logic
  var menuBtn = document.querySelector('.menu-toggle');
  var drawer = document.querySelector('.mobile-drawer');
  var overlay = document.querySelector('.mobile-overlay');
  var closeBtn = document.querySelector('.drawer-close');

  function openDrawer() {
    if (drawer && overlay) {
      overlay.classList.add('active');
      drawer.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeDrawer() {
    if (drawer && overlay) {
      overlay.classList.remove('active');
      drawer.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  if (menuBtn) menuBtn.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  if (overlay) overlay.addEventListener('click', closeDrawer);

  // Accordion for "خدماتنا" inside Drawer
  var dropdownBtn = document.querySelector('.drawer-dropdown-btn');
  var dropdownContent = document.querySelector('.drawer-dropdown-content');
  var dropdownArrow = document.querySelector('.drawer-arrow');

  if (dropdownBtn && dropdownContent) {
    dropdownBtn.addEventListener('click', function(e) {
      e.preventDefault();
      var isOpen = dropdownContent.classList.toggle('open');
      if (dropdownArrow) dropdownArrow.classList.toggle('open', isOpen);
    });
  }

  // Scroll to Top
  var scrollBtn = document.querySelector('.scroll-top');
  window.addEventListener('scroll', function() {
    if (scrollBtn) {
      scrollBtn.style.display = window.scrollY > 300 ? 'flex' : 'none';
    }
  });
  if (scrollBtn) {
    scrollBtn.addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Vanilla Lightbox Modal System
  var lightbox = document.createElement('div');
  lightbox.className = 'lightbox-modal';
  lightbox.innerHTML = '<div class="lightbox-content"><button class="lightbox-close">&times;</button><img class="lightbox-img" src="" alt=""><div class="lightbox-caption"></div></div>';
  document.body.appendChild(lightbox);

  var lbImg = lightbox.querySelector('.lightbox-img');
  var lbCap = lightbox.querySelector('.lightbox-caption');
  var lbClose = lightbox.querySelector('.lightbox-close');

  function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }

  lbClose.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', function(e) {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeLightbox();
  });

  document.querySelectorAll('img').forEach(function(img) {
    if (img.closest('.nav-brand') || img.closest('.footer-col')) return;
    img.style.cursor = 'pointer';
    img.addEventListener('click', function() {
      lbImg.src = this.src;
      lbCap.textContent = this.alt || 'معاينة المشروع';
      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  // Intercept Lead Forms (.ajax-lead-form)
  var forms = document.querySelectorAll('.ajax-lead-form');
  forms.forEach(function(form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      gtag('event', 'conversion', { 'send_to': G_ID + '/' + F_L });

      var name = form.querySelector('[name="name"]')?.value || 'عميل';
      var phone = form.querySelector('[name="phone"]')?.value || '';
      var service = form.querySelector('[name="service"]')?.value || 'استفسار عام';
      var notes = form.querySelector('[name="notes"]')?.value || 'طلب معاينة وتسعير';

      var msg = encodeURIComponent(
        'السلام عليكم ورحمة الله،\nطلب خدمة جديد عبر الموقع:\n' +
        'الاسم: ' + name + '\n' +
        'الجوال: ' + phone + '\n' +
        'الخدمة: ' + service + '\n' +
        'ملاحظات: ' + notes
      );

      setTimeout(function() {
        window.open('https://wa.me/966508292778?text=' + msg, '_blank');
        window.location.href = '/thank-you.html';
      }, 300);
    });
  });
});
