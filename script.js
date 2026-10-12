// ========================================================
// 1. إعدادات تتبع إعلانات قوقل وحماية الميزانية
// ========================================================
var G_ID = 'AW-XXXXXXXXXXX';
var C_L  = 'XXXXXXXXXXXXXXXXXX';
var W_L  = 'XXXXXXXXXXXXXXXXXX';
var F_L  = 'XXXXXXXXXXXXXXXXXX';
var DEV_NUMS = ['0578539687', '966578539687'];

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

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.getRegistrations().then(function(regs) {
    regs.forEach(function(r) { r.unregister(); });
  });
}

// رصد النقرات للاتصال والواتساب مع استثناء المطور
document.addEventListener('click', function(e) {
  var target = e.target.closest('a');
  if (!target) return;
  var href = target.getAttribute('href') || '';

  var isDev = DEV_NUMS.some(function(num) { return href.includes(num); });
  if (isDev) return;

  if (href.startsWith('tel:')) {
    gtag('event', 'conversion', { 'send_to': G_ID + '/' + C_L });
  } else if (href.includes('wa.me') || href.includes('whatsapp.com')) {
    gtag('event', 'conversion', { 'send_to': G_ID + '/' + W_L });
  }
}, true);

// ========================================================
// 2. حقن التنسيقات الفاخرة إجبارياً لمنع تكسر القائمة (Forced CSS)
// ========================================================
(function injectLuxuryStyles() {
  var style = document.createElement('style');
  style.id = 'luxury-injected-css';
  style.innerHTML = `
    /* الهيدر الفاخر */
    #site-header, header {
      position: sticky !important;
      top: 0 !important;
      background: #ffffff !important;
      box-shadow: 0 2px 12px rgba(11,19,41,0.08) !important;
      z-index: 1000 !important;
      width: 100% !important;
      border-bottom: 1px solid #e2e8f0 !important;
    }
    .custom-navbar {
      display: flex !important;
      justify-content: space-between !important;
      align-items: center !important;
      height: 65px !important;
      padding: 0 1.25rem !important;
      max-width: 1200px !important;
      margin: 0 auto !important;
      box-sizing: border-box !important;
    }
    .custom-brand {
      display: flex !important;
      align-items: center !important;
      gap: 0.6rem !important;
      text-decoration: none !important;
    }
    .custom-brand img {
      width: 40px !important;
      height: 40px !important;
      object-fit: contain !important;
      border-radius: 8px !important;
    }
    .custom-brand span {
      font-size: 1.1rem !important;
      font-weight: 800 !important;
      color: #0b1329 !important;
    }

    /* زر الـ 3 خطوط الفاخر */
    .custom-burger-btn {
      display: flex !important;
      flex-direction: column !important;
      justify-content: center !important;
      align-items: center !important;
      gap: 5px !important;
      width: 44px !important;
      height: 44px !important;
      background: #f1f5f9 !important;
      border: 1px solid #cbd5e1 !important;
      border-radius: 8px !important;
      cursor: pointer !important;
      padding: 0 !important;
    }
    .custom-burger-btn span {
      display: block !important;
      width: 22px !important;
      height: 2.8px !important;
      background-color: #0b1329 !important;
      border-radius: 2px !important;
    }

    /* إخفاء القوائم القديمة المكسورة نهائياً */
    .nav-menu, .nav-container, .mobile-services-scroll, .mobile-drawer, .mobile-overlay {
      display: none !important;
    }

    /* خلفية التعتيم للقائمة الجانبية */
    #luxuryDrawerBackdrop {
      display: none;
      position: fixed !important;
      inset: 0 !important;
      background: rgba(11, 19, 41, 0.75) !important;
      backdrop-filter: blur(4px) !important;
      z-index: 99998 !important;
    }
    #luxuryDrawerBackdrop.active {
      display: block !important;
    }

    /* القائمة الجانبية (Drawer) */
    #luxurySideDrawer {
      position: fixed !important;
      top: 0 !important;
      right: -340px !important;
      width: 85% !important;
      max-width: 310px !important;
      height: 100vh !important;
      background: #ffffff !important;
      z-index: 99999 !important;
      box-shadow: -8px 0 25px rgba(0,0,0,0.3) !important;
      padding: 1.25rem !important;
      transition: right 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
      overflow-y: auto !important;
      display: flex !important;
      flex-direction: column !important;
      justify-content: space-between !important;
      box-sizing: border-box !important;
      direction: rtl !important;
      text-align: right !important;
    }
    #luxurySideDrawer.active {
      right: 0 !important;
    }

    .drawer-top-bar {
      display: flex !important;
      justify-content: space-between !important;
      align-items: center !important;
      border-bottom: 2px solid #f1f5f9 !important;
      padding-bottom: 0.8rem !important;
      margin-bottom: 1rem !important;
    }
    .drawer-brand-text {
      font-size: 1.1rem !important;
      font-weight: 800 !important;
      color: #0b1329 !important;
    }
    .drawer-close-x {
      background: #f1f5f9 !important;
      border: 1px solid #cbd5e1 !important;
      font-size: 1.4rem !important;
      width: 36px !important;
      height: 36px !important;
      border-radius: 50% !important;
      cursor: pointer !important;
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
      color: #0b1329 !important;
      line-height: 1 !important;
    }

    .drawer-nav-items {
      list-style: none !important;
      padding: 0 !important;
      margin: 0 !important;
      display: flex !important;
      flex-direction: column !important;
      gap: 0.35rem !important;
    }
    .drawer-nav-items a, .services-accordion-trigger {
      font-size: 1rem !important;
      font-weight: 700 !important;
      color: #0f172a !important;
      display: flex !important;
      align-items: center !important;
      justify-content: space-between !important;
      padding: 0.75rem 0.8rem !important;
      border-radius: 8px !important;
      text-decoration: none !important;
      background: transparent !important;
      border: none !important;
      width: 100% !important;
      cursor: pointer !important;
      box-sizing: border-box !important;
    }
    .drawer-nav-items a:hover, .services-accordion-trigger:hover {
      background: #f1f5f9 !important;
      color: #1d4ed8 !important;
    }

    /* القائمة المنسدلة للخدمات */
    #servicesNestedMenu {
      display: none;
      flex-direction: column !important;
      gap: 0.25rem !important;
      padding-right: 1.25rem !important;
      margin: 0.3rem 0 !important;
      border-right: 3px solid #1d4ed8 !important;
    }
    #servicesNestedMenu.open {
      display: flex !important;
    }
    #servicesNestedMenu a {
      font-size: 0.92rem !important;
      font-weight: 600 !important;
      color: #475569 !important;
      padding: 0.5rem 0.6rem !important;
    }
    #servicesNestedMenu a:hover {
      color: #1d4ed8 !important;
      background: #f8fafc !important;
    }
    .accordion-arrow {
      font-size: 0.8rem !important;
      transition: transform 0.25s ease !important;
    }
    .accordion-arrow.open {
      transform: rotate(180deg) !important;
    }

    .drawer-action-btns {
      margin-top: 1.5rem !important;
      padding-top: 1rem !important;
      border-top: 1px solid #e2e8f0 !important;
      display: flex !important;
      flex-direction: column !important;
      gap: 0.6rem !important;
    }
    .drawer-btn {
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
      gap: 0.5rem !important;
      padding: 0.75rem !important;
      border-radius: 8px !important;
      color: #ffffff !important;
      font-weight: 700 !important;
      font-size: 0.95rem !important;
      text-decoration: none !important;
    }
    .drawer-btn-call { background: #0284c7 !important; }
    .drawer-btn-wa { background: #25d366 !important; }

    /* تمييز أرقام الفوتر وحقوق المطور */
    .footer-gold-phone {
      color: #fbbf24 !important;
      font-size: 1.15rem !important;
      font-weight: 800 !important;
      letter-spacing: 0.5px !important;
      direction: ltr !important;
      display: inline-block !important;
      padding: 0.2rem 0.6rem !important;
      background: rgba(251, 191, 36, 0.12) !important;
      border: 1px solid rgba(251, 191, 36, 0.35) !important;
      border-radius: 6px !important;
      text-decoration: none !important;
    }
    .mix-signature-tag {
      display: inline-flex !important;
      align-items: center !important;
      gap: 0.4rem !important;
      margin-top: 0.8rem !important;
      padding: 0.5rem 1.4rem !important;
      background: #111827 !important;
      border: 2px solid #ec4899 !important;
      border-radius: 30px !important;
      box-shadow: 0 0 15px rgba(236, 72, 153, 0.35) !important;
      text-decoration: none !important;
    }
    .mix-signature-tag span {
      background: linear-gradient(135deg, #ec4899, #8b5cf6, #3b82f6) !important;
      -webkit-background-clip: text !important;
      -webkit-text-fill-color: transparent !important;
      font-weight: 900 !important;
      font-size: 0.95rem !important;
    }
  `;
  document.head.appendChild(style);
})();

// ========================================================
// 3. بناء الهيكل الفاخر واستبدال الهيدر والفوتر تلقائياً
// ========================================================
function setupLuxuryLayout() {
  // 1. إعادة بناء الهيدر
  var header = document.querySelector('header');
  if (header) {
    header.innerHTML = `
      <div class="custom-navbar">
        <a href="/" class="custom-brand">
          <img src="/images/logo_result.webp" alt="أصباغ الدمام" onerror="this.onerror=null; this.src='/preview.jpeg';">
          <span>أصباغ وديكورات الدمام</span>
        </a>

        <!-- زر الخطوط الثلاثة فقط -->
        <button type="button" class="custom-burger-btn" id="luxuryOpenBtn" aria-label="فتح القائمة">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    `;
  }

  // 2. إزالة أي دراور سابق وحقن الدراور الفاخر في جسم الصفحة
  var oldDrawer = document.getElementById('luxurySideDrawer');
  if (oldDrawer) oldDrawer.remove();
  var oldBackdrop = document.getElementById('luxuryDrawerBackdrop');
  if (oldBackdrop) oldBackdrop.remove();

  var drawerWrapper = document.createElement('div');
  drawerWrapper.innerHTML = `
    <div id="luxuryDrawerBackdrop"></div>

    <aside id="luxurySideDrawer">
      <div>
        <div class="drawer-top-bar">
          <span class="drawer-brand-text">أصباغ وديكورات الدمام</span>
          <button type="button" class="drawer-close-x" id="luxuryCloseBtn" aria-label="إغلاق">&times;</button>
        </div>

        <ul class="drawer-nav-items">
          <li><a href="/">🏠 الرئيسية</a></li>

          <!-- قائمة خدماتنا المنسدلة -->
          <li>
            <button type="button" class="services-accordion-trigger" id="servicesTrigger">
              <span>🎨 خدماتنا</span>
              <span class="accordion-arrow" id="servicesArrow">▼</span>
            </button>
            <div id="servicesNestedMenu">
              <a href="/interior-painting.html">• دهانات داخلية وديكورات</a>
              <a href="/exterior-painting.html">• دهانات واجهات وبروفايل</a>
              <a href="/door-paint.html">• رش وترميم الأبواب</a>
              <a href="/renovation-finishing.html">• ترميم وتشطيب مباني</a>
              <a href="/roof-insulation.html">• عوازل أسطح مائية وحرارية</a>
            </div>
          </li>

          <li><a href="/prices.html">🏷️ قائمة الأسعار</a></li>
          <li><a href="/our-works.html">📷 معرض الأعمال (قبل وبعد)</a></li>
          <li><a href="/city-landing.html">📍 أحياء مدينة الدمام</a></li>
          <li><a href="/warranty.html">🛡️ شهادة الضمان الرسمي</a></li>
          <li><a href="/about-us.html">⭐ من نحن</a></li>
          <li><a href="/contact-us.html">📞 اتصل بنا</a></li>
        </ul>
      </div>

      <div class="drawer-action-btns">
        <a href="tel:0508292778" class="drawer-btn drawer-btn-call">📞 اتصال: 0508292778</a>
        <a href="https://wa.me/966508292778" class="drawer-btn drawer-btn-wa">💬 واتساب مباشر</a>
      </div>
    </aside>
  `;
  document.body.appendChild(drawerWrapper);

  // 3. إعادة بناء الفوتر
  var footer = document.querySelector('footer');
  if (footer) {
    footer.innerHTML = `
      <div class="container">
        <div class="footer-grid">
          <div class="footer-col">
            <h4>أصباغ وديكورات وترميم الدمام</h4>
            <p>مؤسستكم المعتمدة للدهانات الديكورية والواجهات الخارجية والترميم والعوازل بكافة أحياء مدينة الدمام والمنطقة الشرقية.</p>
          </div>
          <div class="footer-col">
            <h4>خدماتنا المميزة</h4>
            <ul>
              <li><a href="/interior-painting.html">دهانات داخلية وديكورات</a></li>
              <li><a href="/exterior-painting.html">دهانات واجهات بروفايل</a></li>
              <li><a href="/door-paint.html">رش وترميم الأبواب</a></li>
              <li><a href="/renovation-finishing.html">ترميم وتشطيب مباني</a></li>
              <li><a href="/roof-insulation.html">عوازل أسطح مائية وحرارية</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>روابط هامة</h4>
            <ul>
              <li><a href="/prices.html">قائمة الأسعار التقديرية</a></li>
              <li><a href="/our-works.html">معرض أعمالنا بالدمام</a></li>
              <li><a href="/city-landing.html">أحياء الدمام المغطاة</a></li>
              <li><a href="/warranty.html">شهادة الضمان المعتمد</a></li>
              <li><a href="/contact-us.html">اتصل بنا وحجز موعد</a></li>
            </ul>
          </div>
          <div class="footer-col footer-contact-info">
            <h4>تواصل مباشر</h4>
            <p>📍 التغطية: كافة أحياء مدينة الدمام</p>
            <p>📞 اتصال: <a href="tel:0508292778" class="footer-gold-phone">0508292778</a></p>
            <p>💬 واتساب: <a href="https://wa.me/966508292778" class="footer-gold-phone">0508292778</a></p>
            <p>⏰ أوقات العمل: يومياً 7:00 ص - 11:00 م</p>
          </div>
        </div>
        <div class="footer-bottom">
          <p>جميع الحقوق محفوظة © 2026 أصباغ وديكورات وترميم الدمام | <a href="/privacy-policy.html">سياسة الخصوصية</a> | <a href="/terms-conditions.html">الشروط والأحكام</a></p>
          
          <div>
            <a href="https://wa.me/966578539687" target="_blank" rel="noopener" class="mix-signature-tag">
              <span>🚀 تطوير مواقع وإعلانات مؤسسة mix.tec</span>
            </a>
          </div>
        </div>
      </div>
    `;
  }

  // تفعيل فتح وإغلاق القائمة
  var openBtn = document.getElementById('luxuryOpenBtn');
  var closeBtn = document.getElementById('luxuryCloseBtn');
  var backdrop = document.getElementById('luxuryDrawerBackdrop');
  var drawer = document.getElementById('luxurySideDrawer');

  function openDrawer() {
    drawer.classList.add('active');
    backdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    drawer.classList.remove('active');
    backdrop.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (openBtn) openBtn.onclick = openDrawer;
  if (closeBtn) closeBtn.onclick = closeDrawer;
  if (backdrop) backdrop.onclick = closeDrawer;

  // تفعيل انسدال "خدماتنا"
  var trigger = document.getElementById('servicesTrigger');
  var nested = document.getElementById('servicesNestedMenu');
  var arrow = document.getElementById('servicesArrow');

  if (trigger && nested) {
    trigger.onclick = function(e) {
      e.preventDefault();
      var isOpen = nested.classList.toggle('open');
      if (arrow) arrow.classList.toggle('open', isOpen);
    };
  }
}

// ========================================================
// 4. تشغيل المكونات فور اكتمال تحميل الصفحة
// ========================================================
document.addEventListener('DOMContentLoaded', function() {
  setupLuxuryLayout();

  if (window.location.pathname.includes('thank-you')) {
    gtag('event', 'conversion', { 'send_to': G_ID + '/' + F_L });
  }

  // زر الصعود
  var scrollBtn = document.querySelector('.scroll-top');
  window.addEventListener('scroll', function() {
    if (scrollBtn) {
      scrollBtn.style.display = window.scrollY > 300 ? 'flex' : 'none';
    }
  });
  if (scrollBtn) {
    scrollBtn.onclick = function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
  }

  // Lightbox لتكبير الصور
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

  lbClose.onclick = closeLightbox;
  lightbox.onclick = function(e) {
    if (e.target === lightbox) closeLightbox();
  };
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeLightbox();
  });

  document.querySelectorAll('img').forEach(function(img) {
    if (img.closest('.custom-brand') || img.closest('.footer-col')) return;
    img.style.cursor = 'pointer';
    img.addEventListener('click', function() {
      lbImg.src = this.src;
      lbCap.textContent = this.alt || 'معاينة المشروع';
      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  // معالجة النماذج الفورية
  document.querySelectorAll('.ajax-lead-form').forEach(function(form) {
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
