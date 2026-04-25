/* ============================================
   PRODUCT TRAIL — main.js
   Particles, scroll-reveal, navbar, toast
   ============================================ */

// Generic Track Function
window.trackEvent = (name, props = {}) => {
  if (window.mixpanel) {
    mixpanel.track(name, {
      ...props,
      path: window.location.pathname,
      page: document.title
    });
  }
};

// Initialization and Page Timing
document.addEventListener('DOMContentLoaded', () => {
  if (window.mixpanel) {
    mixpanel.track_pageview();
    // Start timer for time spent
    mixpanel.time_event('Time Spent');
  }
});

// Track time spent on exit
window.addEventListener('beforeunload', () => {
  if (window.mixpanel) {
    mixpanel.track('Time Spent', {
      page: document.title,
      path: window.location.pathname
    });
  }
});

/* ── Particle Canvas ─────────────────────────── */
(function initParticles() {
  const canvas = document.getElementById('particle-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let W, H, particles = [], animFrame;

  const COLORS = ['rgba(124,58,237,', 'rgba(6,182,212,', 'rgba(167,139,250,'];
  const N = Math.min(80, Math.floor(window.innerWidth / 16));

  function resize() {
    W = canvas.width = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
  }

  function Particle() {
    this.reset();
  }

  Particle.prototype.reset = function () {
    this.x = Math.random() * W;
    this.y = Math.random() * H;
    this.r = Math.random() * 1.5 + 0.5;
    this.vx = (Math.random() - 0.5) * 0.4;
    this.vy = (Math.random() - 0.5) * 0.4;
    this.c = COLORS[Math.floor(Math.random() * COLORS.length)];
    this.a = Math.random() * 0.6 + 0.2;
  };

  Particle.prototype.update = function () {
    this.x += this.vx;
    this.y += this.vy;
    if (this.x < 0 || this.x > W) this.vx *= -1;
    if (this.y < 0 || this.y > H) this.vy *= -1;
  };

  Particle.prototype.draw = function () {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    ctx.fillStyle = this.c + this.a + ')';
    ctx.fill();
  };

  function drawLines() {
    const MAX_DIST = 140;
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const a = particles[i], b = particles[j];
        const dx = a.x - b.x, dy = a.y - b.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < MAX_DIST) {
          const alpha = (1 - dist / MAX_DIST) * 0.18;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = `rgba(124,58,237,${alpha})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }
  }

  function loop() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => { p.update(); p.draw(); });
    drawLines();
    animFrame = requestAnimationFrame(loop);
  }

  function init() {
    resize();
    particles = Array.from({ length: N }, () => new Particle());
    cancelAnimationFrame(animFrame);
    loop();
  }

  window.addEventListener('resize', () => { resize(); });
  init();
}());

/* ── Scroll Reveal ───────────────────────────── */
(function initScrollReveal() {
  const elements = document.querySelectorAll('.reveal');
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  elements.forEach(el => observer.observe(el));
}());

/* ── Sticky Navbar ───────────────────────────── */
(function initNavbar() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  const onScroll = () => {
    navbar.classList.toggle('scrolled', window.scrollY > 30);
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}());

/* ── Hamburger Menu ──────────────────────────── */
(function initMobileMenu() {
  const ham = document.getElementById('hamburger');
  const nav = document.getElementById('nav-links');
  if (!ham || !nav) return;

  ham.addEventListener('click', () => {
    nav.classList.toggle('mobile-open');
    ham.classList.toggle('open');
  });

  // Close on link click
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('mobile-open');
      ham.classList.remove('open');
    });
  });
}());

/* ── Toast Notification ──────────────────────── */
window.showToast = function (message, iconName = 'check-circle') {
  let toast = document.getElementById('global-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'global-toast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.innerHTML = `<i data-lucide="${iconName}" style="width:20px;height:20px"></i> ${message}`;
  if (window.lucide) window.lucide.createIcons();

  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3500);
};

/* ── Counter Animation ───────────────────────── */
(function initCounters() {
  const counters = document.querySelectorAll('[data-count]');
  if (!counters.length) return;

  const animate = (el) => {
    const target = parseInt(el.dataset.count);
    const suffix = el.dataset.suffix || '';
    const duration = 1800;
    const startTime = performance.now();
    const easeOut = t => 1 - Math.pow(1 - t, 3);

    const tick = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const value = Math.round(easeOut(progress) * target);
      el.textContent = value.toLocaleString() + suffix;
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animate(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(el => observer.observe(el));
}());

/* ── Smooth Scroll ───────────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

/* ── Lucide Icon Initialization ──────────────── */
(function initLucide() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}());
