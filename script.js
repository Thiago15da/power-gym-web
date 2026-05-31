/* ============================================================
   POWER GYM — Shared JavaScript
   ============================================================ */

(function () {
  'use strict';

  /* ── Mobile menu toggle ── */
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  const bar1 = document.getElementById('bar1');
  const bar2 = document.getElementById('bar2');
  const bar3 = document.getElementById('bar3');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      const isOpen = !mobileMenu.classList.contains('hidden');
      mobileMenu.classList.toggle('hidden');
      hamburger.setAttribute('aria-expanded', String(!isOpen));
      if (!isOpen) {
        bar1.style.transform = 'translateY(8px) rotate(45deg)';
        bar2.style.opacity = '0';
        bar3.style.transform = 'translateY(-8px) rotate(-45deg)';
      } else {
        bar1.style.transform = '';
        bar2.style.opacity = '';
        bar3.style.transform = '';
      }
    });
  }

  /* ── Mobile "Sedes" sub-dropdown ── */
  const mobileSedesBtn  = document.getElementById('mobile-sedes-btn');
  const mobileSedesMenu = document.getElementById('mobile-sedes');
  const sedesIcon       = document.getElementById('sedes-icon');

  if (mobileSedesBtn && mobileSedesMenu) {
    mobileSedesBtn.addEventListener('click', () => {
      const isOpen = !mobileSedesMenu.classList.contains('hidden');
      mobileSedesMenu.classList.toggle('hidden');
      if (sedesIcon) sedesIcon.style.transform = isOpen ? '' : 'rotate(180deg)';
      mobileSedesBtn.setAttribute('aria-expanded', String(!isOpen));
    });
  }

  /* ── Contact form → WhatsApp ── */
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const nombre   = (document.getElementById('nombre')   || {}).value || '';
      const telefono = (document.getElementById('telefono') || {}).value || '';
      const interes  = (document.getElementById('interes')  || {}).value || '';
      const mensaje  = (document.getElementById('mensaje')  || {}).value || '';

      let msg = `*Power Gym — Nueva Consulta*\n\n`;
      msg += `*Nombre:* ${nombre}\n`;
      msg += `*Teléfono:* ${telefono}\n`;
      if (interes) msg += `*Interés:* ${interes}\n`;
      if (mensaje) msg += `*Mensaje:* ${mensaje}`;

      window.open(
        `https://wa.me/595974978876?text=${encodeURIComponent(msg)}`,
        '_blank',
        'noopener,noreferrer'
      );
    });
  }

  /* ── Smooth-scroll for in-page anchor links ── */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const id = this.getAttribute('href').slice(1);
      const target = document.getElementById(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        if (mobileMenu) mobileMenu.classList.add('hidden');
      }
    });
  });

  /* ── Highlight active nav link by current page ── */
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('header a[href]').forEach(link => {
    const href = link.getAttribute('href').split('#')[0];
    if (href === page || (page === '' && href === 'index.html')) {
      link.classList.add('!text-brand');
    }
  });

  /* ── Intersection Observer: fade-up on scroll ── */
  const observer = new IntersectionObserver(
    entries => entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('anim-fade-up');
        observer.unobserve(entry.target);
      }
    }),
    { threshold: 0.12 }
  );
  document.querySelectorAll('[data-observe]').forEach(el => observer.observe(el));

})();
