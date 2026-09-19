/* ==========================================================================
    RAJESH GURUSAMY — OFFICIAL EXECUTIVE PORTFOLIO
   Client-Side Interactive Core (Vanilla JS & Bootstrap 5)
   ========================================================================== */

(function () {
  'use strict';

  // DOM Helpers
  const $ = (selector, context = document) => context.querySelector(selector);
  const $$ = (selector, context = document) => Array.from(context.querySelectorAll(selector));

  // Auto Update Copyright Year
  const yearEl = $('#year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* --------------------------------------------------------------------------
     1. NAVBAR SCROLL & BACK TO TOP
     -------------------------------------------------------------------------- */
  const nav = $('#mainNav');
  const backTop = $('#backTop');

  const handleScroll = () => {
    const scrollY = window.scrollY;
    if (nav) {
      nav.classList.toggle('scrolled', scrollY > 40);
    }
    if (backTop) {
      backTop.classList.toggle('show', scrollY > 500);
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  if (backTop) {
    backTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Mobile navigation auto-close
  $$('#navMenu .nav-link, #navMenu .dropdown-item').forEach(link => {
    link.addEventListener('click', () => {
      const menu = $('#navMenu');
      if (menu && menu.classList.contains('show') && typeof bootstrap !== 'undefined') {
        bootstrap.Collapse.getOrCreateInstance(menu).hide();
      }
    });
  });

  /* --------------------------------------------------------------------------
     2. SCROLL REVEAL ANIMATIONS
     -------------------------------------------------------------------------- */
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    $$('.reveal').forEach(el => revealObserver.observe(el));
  } else {
    $$('.reveal').forEach(el => el.classList.add('visible'));
  }

  /* --------------------------------------------------------------------------
     3. ANIMATED COUNTERS
     -------------------------------------------------------------------------- */
  if ('IntersectionObserver' in window) {
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = parseInt(el.dataset.count, 10) || 0;
        const suffix = el.dataset.suffix || '';
        const duration = 1600;
        const startTime = performance.now();

        const updateCounter = (currentTime) => {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          // Ease-out cubic
          const currentCount = Math.round(target * (1 - Math.pow(1 - progress, 3)));
          el.textContent = currentCount + suffix;
          if (progress < 1) {
            requestAnimationFrame(updateCounter);
          }
        };

        requestAnimationFrame(updateCounter);
        counterObserver.unobserve(el);
      });
    }, { threshold: 0.4 });

    $$('[data-count]').forEach(el => counterObserver.observe(el));
  }

  /* --------------------------------------------------------------------------
     4. DUAL-IDENTITY MODE SWITCHER (HERO & SPOTLIGHT)
     -------------------------------------------------------------------------- */
  const identityBtns = $$('[data-identity-mode]');
  const pillarPublic = $('#pillarPublic');
  const pillarBusiness = $('#pillarBusiness');

  identityBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const mode = btn.dataset.identityMode; // 'all' | 'public' | 'business'
      
      // Update active button state
      identityBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Adjust view spotlights if pillars exist on page
      if (pillarPublic && pillarBusiness) {
        if (mode === 'public') {
          pillarPublic.style.opacity = '1';
          pillarPublic.style.transform = 'scale(1.02)';
          pillarBusiness.style.opacity = '0.5';
          pillarBusiness.style.transform = 'scale(0.98)';
          pillarPublic.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        } else if (mode === 'business') {
          pillarBusiness.style.opacity = '1';
          pillarBusiness.style.transform = 'scale(1.02)';
          pillarPublic.style.opacity = '0.5';
          pillarPublic.style.transform = 'scale(0.98)';
          pillarBusiness.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        } else {
          pillarPublic.style.opacity = '1';
          pillarPublic.style.transform = 'scale(1)';
          pillarBusiness.style.opacity = '1';
          pillarBusiness.style.transform = 'scale(1)';
        }
      }
    });
  });

  /* --------------------------------------------------------------------------
     5. FILTERABLE PORTFOLIO / INITIATIVES GRID
     -------------------------------------------------------------------------- */
  const filterBtns = $$('[data-portfolio-filter]');
  const portfolioItems = $$('[data-portfolio-category]');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.portfolioFilter;

      // Toggle active filter button
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Filter portfolio cards
      portfolioItems.forEach(item => {
        const category = item.dataset.portfolioCategory;
        if (filter === 'all' || category === filter || (filter === 'public' && category.includes('public')) || (filter === 'business' && category.includes('business'))) {
          item.closest('.portfolio-col').style.display = '';
        } else {
          item.closest('.portfolio-col').style.display = 'none';
        }
      });
    });
  });

  /* --------------------------------------------------------------------------
     6. DUAL-DESK SMART CONTACT SELECTOR
     -------------------------------------------------------------------------- */
  const deskPublicRadio = $('#deskPublic');
  const deskBusinessRadio = $('#deskBusiness');
  const cardDeskPublic = $('#cardDeskPublic');
  const cardDeskBusiness = $('#cardDeskBusiness');
  const enquiryTypeSelect = $('#enquiryType');
  const deskInfoBadge = $('#deskInfoBadge');

  function updateDeskSelection(isPublic) {
    if (cardDeskPublic && cardDeskBusiness) {
      cardDeskPublic.classList.toggle('active', isPublic);
      cardDeskBusiness.classList.toggle('active', !isPublic);
    }

    if (deskInfoBadge) {
      if (isPublic) {
        deskInfoBadge.className = 'badge bg-warning text-dark p-2 mb-3';
        deskInfoBadge.innerHTML = '<i class="bi bi-flag-fill me-1"></i> Routing to: <strong>Public Office (Kisan Morcha / Constituency Service)</strong>';
      } else {
        deskInfoBadge.className = 'badge bg-primary p-2 mb-3';
        deskInfoBadge.innerHTML = '<i class="bi bi-building-fill me-1"></i> Routing to: <strong>Corporate HQ (Guru Integrated Services & Group)</strong>';
      }
    }

    // Auto-update enquiry type options if dropdown exists
    if (enquiryTypeSelect) {
      if (isPublic) {
        enquiryTypeSelect.value = 'Public / Farmer Grievance';
      } else {
        enquiryTypeSelect.value = 'Business Partnership / Solar EPC';
      }
    }
  }

  if (deskPublicRadio && deskBusinessRadio) {
    deskPublicRadio.addEventListener('change', () => updateDeskSelection(true));
    deskBusinessRadio.addEventListener('change', () => updateDeskSelection(false));
  }

  if (cardDeskPublic) {
    cardDeskPublic.addEventListener('click', () => {
      if (deskPublicRadio) deskPublicRadio.checked = true;
      updateDeskSelection(true);
    });
  }

  if (cardDeskBusiness) {
    cardDeskBusiness.addEventListener('click', () => {
      if (deskBusinessRadio) deskBusinessRadio.checked = true;
      updateDeskSelection(false);
    });
  }

  /* --------------------------------------------------------------------------
     7. CONTACT FORM SUBMISSION
     -------------------------------------------------------------------------- */
  const contactForm = $('#contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const alertBox = $('#formAlert');
      const submitBtn = $('#btnSend');
      const formData = new FormData(contactForm);
      const data = Object.fromEntries(formData.entries());

      if (!data.name || !data.phone || !data.message) {
        if (alertBox) {
          alertBox.className = 'alert alert-danger mt-3';
          alertBox.textContent = 'Please fill out your Name, Phone number, and Message.';
          alertBox.classList.remove('d-none');
        }
        return;
      }

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>Transmitting to Office…';
      }

      // Simulate office communication dispatch
      await new Promise(resolve => setTimeout(resolve, 800));

      if (alertBox) {
        alertBox.className = 'alert alert-success mt-3';
        alertBox.innerHTML = `<strong>Thank you, ${data.name}!</strong> Your message has been received and routed to the office desk. We will get back to you promptly.`;
        alertBox.classList.remove('d-none');
      }

      contactForm.reset();
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = '<i class="bi bi-send-fill me-2"></i>Send Message';
      }
    });
  }

  /* --------------------------------------------------------------------------
     8. NEWSLETTER SUBSCRIPTION
     -------------------------------------------------------------------------- */
  const newsletterForm = $('#newsletterForm');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const msg = $('#newsletterMsg');
      if (msg) {
        msg.textContent = 'Thank you for subscribing to  Rajesh’s official office bulletins.';
      }
      newsletterForm.reset();
    });
  }

  /* --------------------------------------------------------------------------
     9. PROFILE DOWNLOAD (MODAL / ACTION)
     -------------------------------------------------------------------------- */
  const btnBio = $('#btnBio');
  if (btnBio) {
    btnBio.addEventListener('click', () => {
      alert('Official Profile Document: Please contact the Public Office or Corporate Desk to receive the verified PDF credentials dossier.');
    });
  }

})();
