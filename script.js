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
// 2. المحرك المركزي السحري: استبدال الهيدر والفوتر في كل الصفحات تلقائياً
// ========================================================
function overrideHeaderAndFooter() {
  // 1. كود الهيدر الفخم الموحد (الشعار + 3 خطوط فقط)
  var newHeaderHTML = `
    <div class="container navbar">
      <a href="/" class="nav-brand">
        <img src="/images/logo_result.webp" alt="أصباغ الدمام" onerror="this.onerror=null; this.src='/preview.jpeg';">
        <span>أصباغ وديكورات الدمام</span>
      </a>

      <!-- زر الـ 3 خطوط فقط -->
      <button type="button" class="hamburger-btn" id="drawerOpenBtn" aria-label="فتح القائمة">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>

    <!-- خلفية التعتيم -->
    <div class="drawer-backdrop" id="drawerBackdrop"></div>

    <!-- القائمة الجانبية الفاخرة المنسدلة -->
    <aside class="side-drawer" id="sideDrawer">
      <div>
        <div class="drawer-head">
          <span class="drawer-logo">أصباغ وديكورات الدمام</span>
          <button type="button" class="drawer-close-btn" id="drawerCloseBtn" aria-label="إغلاق">&times;</button>
        </div>

        <ul class="drawer-links">
          <li><a href="/">🏠 الرئيسية</a></li>

          <!-- قائمة خدماتنا المنسدلة بضغطة زر -->
          <li>
            <button type="button" class="drawer-dropdown-btn" id="servicesToggleBtn">
              <span>🎨 خدماتنا</span>
              <span class="arrow-icon" id="servicesArrow">▼</span>
            </button>
            <div class="services-sub-menu" id="servicesSubMenu">
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

      <div class="drawer-footer-actions">
        <a href="tel:0508292778" class="btn btn-call" style="padding:0.7rem;">📞 اتصال: 0508292778</a>
        <a href="https://wa.me/966508292778" class="btn btn-whatsapp" style="padding:0.7rem;">💬 واتساب مباشر</a>
      </div>
    </aside>
  `;

  // 2. كود الفوتر الفخم الموحد (أرقام ذهبية + شارة مؤسسة mix.tec المميزة)
  var newFooterHTML = `
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
        <div class="footer-col">
          <h4>تواصل مباشر</h4>
          <p>📍 التغطية: كافة أحياء مدينة الدمام</p>
          <p>📞 اتصال: <a href="tel:0508292778" class="phone-highlight">0508292778</a></p>
          <p>💬 واتساب: <a href="https://wa.me/966508292778" class="phone-highlight">0508292778</a></p>
          <p>⏰ أوقات العمل: يومياً 7:00 ص - 11:00 م</p>
        </div>
      </div>
      <div class="footer-bottom">
        <p>جميع الحقوق محفوظة © 2026 أصباغ وديكورات وترميم الدمام | <a href="/privacy-policy.html">سياسة الخصوصية</a> | <a href="/terms-conditions.html">الشروط والأحكام</a></p>
        
        <!-- تمييز مؤسسة mix.tec بلون مختلف وشارة فخمة جداً -->
        <div>
          <div class="mix-developer-badge">
            <span>🚀</span>
            <a href="https://wa.me/966578539687" target="_blank" rel="noopener">تطوير مواقع وإعلانات مؤسسة mix.tec</a>
          </div>
        </div>
      </div>
    </div>
  `;

  // استبدال أي هيدر موجود في الصفحة حالياً
  var existingHeader = document.querySelector('header');
  if (existingHeader) {
    existingHeader.innerHTML = newHeaderHTML;
  }

  // استبدال أي فوتر موجود في الصفحة حالياً
  var existingFooter = document.querySelector('footer');
  if (existingFooter) {
    existingFooter.innerHTML = newFooterHTML;
  }

  // إخفاء أي دراور أو أشرطة قديمة إن وجدت في الـ HTML الأصلي
  document.querySelectorAll('.mobile-drawer, .mobile-overlay, .mobile-services-scroll').forEach(function(el) {
    if (!el.closest('header')) {
      el.style.display = 'none';
    }
  });

  // الأزرار العائمة
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

  // تشغيل أحداث القائمة الجانبية فور حقنها
  initDrawerEvents();
}

// ========================================================
// 3. أحداث القائمة الجانبية والـ Lightbox والنماذج
// ========================================================
function initDrawerEvents() {
  var openBtn = document.getElementById('drawerOpenBtn');
  var closeBtn = document.getElementById('drawerCloseBtn');
  var backdrop = document.getElementById('drawerBackdrop');
  var drawer = document.getElementById('sideDrawer');

  function openDrawer() {
    if (drawer && backdrop) {
      drawer.classList.add('active');
      backdrop.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeDrawer() {
    if (drawer && backdrop) {
      drawer.classList.remove('active');
      backdrop.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  if (openBtn) openBtn.onclick = openDrawer;
  if (closeBtn) closeBtn.onclick = closeDrawer;
  if (backdrop) backdrop.onclick = closeDrawer;

  // القائمة المنسدلة للخدمات
  var servicesBtn = document.getElementById('servicesToggleBtn');
  var servicesMenu = document.getElementById('servicesSubMenu');
  var servicesArrow = document.getElementById('servicesArrow');

  if (servicesBtn && servicesMenu) {
    servicesBtn.onclick = function(e) {
      e.preventDefault();
      var isOpen = servicesMenu.classList.toggle('open');
      if (servicesArrow) servicesArrow.classList.toggle('open', isOpen);
    };
  }
}

document.addEventListener('DOMContentLoaded', function() {
  // تفعيل الاستبدال الشامل فوراً
  overrideHeaderAndFooter();

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
    if (img.closest('.nav-brand') || img.closest('.footer-col')) return;
    img.style.cursor = 'pointer';
    img.addEventListener('click', function() {
      lbImg.src = this.src;
      lbCap.textContent = this.alt || 'معاينة المشروع';
      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  // معالجة النماذج
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
