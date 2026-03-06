// ============================================================
// WILEY CUBIC — PORTFOLIO SCRIPTS
// ============================================================

(function () {
  'use strict';

  // ── Nav scroll behavior ──────────────────────────────────
  const navbar = document.getElementById('navbar');

  function handleNavScroll() {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', handleNavScroll, { passive: true });
  handleNavScroll(); // Run on init

  // ── Smooth scroll for nav links ──────────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (!target) return;
      e.preventDefault();
      const navHeight = navbar.offsetHeight;
      const targetTop = target.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({ top: targetTop, behavior: 'smooth' });
    });
  });

  // ── Scroll reveal (IntersectionObserver) ─────────────────
  const revealObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          // Stagger cards in the same parent grid
          const siblings = entry.target.parentElement.querySelectorAll('.reveal:not(.visible)');
          let delay = 0;
          siblings.forEach(function (sibling) {
            if (sibling === entry.target) {
              sibling.style.transitionDelay = delay + 'ms';
              sibling.classList.add('visible');
            }
          });
          entry.target.style.transitionDelay = delay + 'ms';
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.08,
      rootMargin: '0px 0px -40px 0px',
    }
  );

  document.querySelectorAll('.reveal').forEach(function (el) {
    revealObserver.observe(el);
  });

  // ── Project stagger reveal ────────────────────────────────
  // Override: stagger cards within each grid
  const cardObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          const parent = entry.target.closest('.projects-featured, .projects-grid');
          if (!parent) return;
          const allCards = Array.from(parent.querySelectorAll('.project-card'));
          const visibleCards = allCards.filter(function (c) {
            return !c.classList.contains('hidden') && !c.classList.contains('visible');
          });
          visibleCards.forEach(function (card, i) {
            setTimeout(function () {
              card.classList.add('visible');
            }, i * 90);
          });
          cardObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.05,
      rootMargin: '0px 0px -20px 0px',
    }
  );

  document.querySelectorAll('.projects-featured, .projects-grid').forEach(function (grid) {
    cardObserver.observe(grid);
  });

  // ── Project filter ────────────────────────────────────────
  const filterBtns = document.querySelectorAll('.filter-btn');
  const allCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      const filter = this.getAttribute('data-filter');

      // Update active button
      filterBtns.forEach(function (b) { b.classList.remove('active'); });
      this.classList.add('active');

      // Show/hide cards
      allCards.forEach(function (card) {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.classList.remove('hidden');
          // Re-trigger animation
          card.classList.remove('visible');
          setTimeout(function () { card.classList.add('visible'); }, 30);
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });

  // ── Active nav link highlight on scroll ──────────────────
  const sections = document.querySelectorAll('section[id]');
  const navAnchors = document.querySelectorAll('.nav-links a');

  const sectionObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navAnchors.forEach(function (a) {
            a.style.color = '';
            if (a.getAttribute('href') === '#' + id) {
              a.style.color = 'var(--color-tan)';
            }
          });
        }
      });
    },
    {
      threshold: 0.45,
    }
  );

  sections.forEach(function (s) { sectionObserver.observe(s); });

})();
