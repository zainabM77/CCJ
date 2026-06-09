/* ============================================================
   CCJ — script.js
   Mobile nav, scroll reveals, form enhancements
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ---- Mobile nav toggle ---- */
  const toggle = document.getElementById('mobile-menu');
  const menu   = document.querySelector('.navbar__menu');

  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      const open = menu.classList.toggle('active');
      toggle.classList.toggle('is-active', open);
      toggle.setAttribute('aria-expanded', open);
    });

    // Close on link click
    menu.querySelectorAll('.navbar__links').forEach(link => {
      link.addEventListener('click', () => {
        menu.classList.remove('active');
        toggle.classList.remove('is-active');
      });
    });
  }

  /* ---- Scroll reveal ---- */
  const revealEls = document.querySelectorAll(
    '.section, .service__card, .value__card, .core__item, .program__item, .about__block, .contact__section'
  );

  revealEls.forEach(el => el.classList.add('reveal'));

  const observer = new IntersectionObserver(
    entries => entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    }),
    { threshold: 0.08 }
  );

  revealEls.forEach(el => observer.observe(el));

  /* ---- Staggered card reveals ---- */
  const grids = document.querySelectorAll('.services__grid, .values__grid, .core__values, .programs__list');
  grids.forEach(grid => {
    grid.querySelectorAll('.service__card, .value__card, .core__item, .program__item').forEach((card, i) => {
      card.style.transitionDelay = `${i * 0.07}s`;
    });
  });

  /* ---- Membership fee notice (joinform) ---- */
  const posSelect = document.getElementById('positionSelect');
  const notice    = document.getElementById('membershipFeeNotice');

  if (posSelect && notice) {
    posSelect.addEventListener('change', () => {
      notice.style.display = posSelect.value === 'Community Member' ? 'block' : 'none';
    });
  }

  /* ---- Copy email button ---- */
  const copyBtn = document.getElementById('copyEmailBtn');
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      navigator.clipboard.writeText('donation.ccj@gmail.com').then(() => {
        copyBtn.textContent = 'Copied!';
        setTimeout(() => copyBtn.textContent = 'Copy Email', 2000);
      });
    });
  }

  /* ---- Donation custom amount ---- */
  const amountSelect   = document.getElementById('amountSelect');
  const customGroup    = document.getElementById('customAmountGroup');
  const customInput    = document.getElementById('customAmountInput');

  if (amountSelect && customGroup) {
    amountSelect.addEventListener('change', () => {
      const show = amountSelect.value === 'Other';
      customGroup.style.display = show ? 'block' : 'none';
      if (customInput) customInput.required = show;
    });
  }

  /* ---- Active nav link highlight ---- */
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.navbar__links').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.style.color = 'var(--red)';
    }
  });

});
