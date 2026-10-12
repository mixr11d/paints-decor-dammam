// ========================================================
// 1. إعدادات تتبع إعلانات قوقل المركزية وحماية الميزانية
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

// رصد نقرات الاتصال والواتساب مع استثناء المطور
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
// 2. المكون المركزي الموحد: حقن الهيدر والفوتر والأزرار العائمة
// ========================================================
function injectGlobalLayout() {
  // كود الهيدر الموحد مع القائمة المنسدلة للخدمات
  var headerElem = document.getElementById('site-header');
  if (headerElem) {
    headerElem.innerHTML = `
      <div class="container navbar">
        <a href="/" class="nav-brand">
          <img src="/images/logo_result.webp" alt="أصباغ الدمام" onerror="this.onerror=null; this.src='/preview.jpeg';">
          <span>أصباغ وديكورات الدمام</span>
        </a>

        <nav class="nav-container">
          <ul class="nav-links">
            <li><a href="/" class="nav-item">الرئيسية</a></li>

            <!-- قائمة الخدمات المنسدلة في الأعلى -->
            <li class="dropdown-wrapper">
              <button type="button" class="dropdown-trigger" id="servicesToggleBtn" aria-expanded="false">
                <span>خدماتنا</span>
                <span class="dropdown-icon">▾</span>
              </button>
              <div class="dropdown-box" id="servicesDropdownMenu">
                <a href="/interior-painting.html">🎨 دهانات داخلية وديكورات</a>
                <a href="/exterior-painting.html">🏛️ دهانات واجهات وبروفايل</a>
                <a href="/door-paint.html">🚪 رش وتجديد الأبواب</a>
                <a href="/renovation-finishing.html">🔨 ترميم وتشطيب مباني</a>
                <a href="/roof-insulation.html">💧 عوازل أسطح مائية وحرارية</a>
              </div>
            </li>

            <li><a href="/prices.html" class="nav-item">الأسعار</a></li>
            <li><a href="/our-works.html" class="nav-item">معرض الأعمال</a></li>
            <li><a href="/city-landing.html" class="nav-item">أحياء الدمام</a></li>
            <li><a href="/warranty.html" class="nav-item">الضمان</a></li>
            <li><a href="/about-us.html" class="nav-item">من نحن</a></li>
            <li><a href="/contact-us.html" class="nav-item">اتصل بنا</a></li>
          </ul>
        </nav>
      </div>
    `;
  }

  // كود الفوتر الموحد مع الأرقام المميزة وشارة مؤسسة mix.tec
  var footerElem = document.getElementById('site-footer');
  if (footerElem) {
    footerElem.innerHTML = `
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
            <p>📞 اتصال: <a href="tel:0508292778" class="footer-phone-highlight">0508292778</a></p>
            <p>💬 واتساب: <a href="https://wa.me/966508292778" class="footer-phone-highlight">0508292778</a></p>
            <p>⏰ أوقات العمل: يومياً 7:00 ص - 11:00 م</p>
          </div>
        </div>
        <div class="footer-bottom">
          <p>جميع الحقوق محفوظة © 2026 أصباغ وديكورات وترميم الدمام | <a href="/privacy-policy.html">سياسة الخصوصية</a> | <a href="/terms-conditions.html">الشروط والأحكام</a></p>
          <div class="developer-signature-badge">
            <span class="badge-sparkle">✦</span>
            <a href="https://wa.me/966578539687" target="_blank" rel="noopener">تطوير مواقع وإعلانات مؤسسة mix.tec</a>
          </div>
        </div>
      </div>
    `;
  }

  // إضافة الأزرار العائمة وزر الصعود تلقائياً
  if (!document.querySelector('.floating-actions')) {
    var floatDiv = document.createElement('div');
    floatDiv.className = 'floating-actions';
    floatDiv.innerHTML = `
      <a href="https://wa.me/966508292778" class="float-btn float-whatsapp" aria-label="واتساب">💬</a>
      <a href="tel:0508292778" class="float-btn float-call" aria-label="اتصال مباشر">📞</a>
    `;
    document.body.appendChild(floatDiv);
  }

  if (!document.querySelector('.scroll-top')) {
    var topBtn = document.createElement('button');
    topBtn.className = 'scroll-top';
    topBtn.setAttribute('aria-label', 'أعلى الصفحة');
    topBtn.innerHTML = '▲';
    document.body.appendChild(topBtn);
  }
}

// ========================================================
// 3. التفاعلات (القائمة المنسدلة العلوية، Lightbox، والنماذج)
// ========================================================
document.addEventListener('DOMContentLoaded', function() {
  injectGlobalLayout();

  // تفعيل إحالة صفحة الشكر تلقائياً
  if (window.location.pathname.includes('thank-you')) {
    gtag('event', 'conversion', { 'send_to': G_ID + '/' + F_L });
  }

  // تفاعل القائمة المنسدلة العلوية للخدمات
  var dropBtn = document.getElementById('servicesToggleBtn');
  var dropMenu = document.getElementById('servicesDropdownMenu');

  if (dropBtn && dropMenu) {
    dropBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      var isExpanded = dropMenu.classList.toggle('active');
      dropBtn.classList.toggle('active', isExpanded);
      dropBtn.setAttribute('aria-expanded', isExpanded);
    });

    document.addEventListener('click', function(e) {
      if (!dropBtn.contains(e.target) && !dropMenu.contains(e.target)) {
        dropMenu.classList.remove('active');
        dropBtn.classList.remove('active');
        dropBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // زر الصعود للأعلى
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

  // محرك تكبير الصور المدمج (Vanilla Lightbox)
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

  // معالجة النماذج الفورية وتحويلها إلى واتساب مع إطلاق الإحالة
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
