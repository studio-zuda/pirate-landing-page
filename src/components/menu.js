import { createIcon } from '@/components/icons.js';

export function initMenu() {
  const header = document.querySelector('.header');
  const menuItem = document.querySelector('.main-nav__item--has-submenu');
  const submenu = menuItem?.querySelector('.main-nav__submenu');
  const submenuLink = menuItem?.querySelector('.main-nav__link');
  const submenuArrow = menuItem?.querySelector('.main-nav__arrow'); // Aggiungo la freccia
  const burger = document.querySelector('.header__burger');
  const menu = document.querySelector('.main-nav__menu');
  const mainNav = document.querySelector('.main-nav'); // Contenitore principale
  const body = document.body;

  let isMenuOpen = false;
  let isSubmenuOpen = false;
  let isMobile = () => window.innerWidth <= 768;

  // ARIA setup
  if (burger) {
    burger.setAttribute('aria-expanded', 'false');
    burger.setAttribute('aria-controls', 'main-menu');
  }

  if (submenuLink) {
    submenuLink.setAttribute('aria-haspopup', 'true');
    submenuLink.setAttribute('aria-expanded', 'false');
  }

  // Le frecce del menu vengono create direttamente nel main.js con createContextIcon

  function updateAria() {
    burger?.setAttribute('aria-expanded', String(isMenuOpen));
    submenuLink?.setAttribute('aria-expanded', String(isSubmenuOpen));
  }

  function closeAll() {
    isMenuOpen = false;
    isSubmenuOpen = false;

    mainNav?.classList.remove('is-open');
    submenu?.classList.remove('is-open');
    submenuArrow?.classList.remove('is-rotated'); // Reset freccia
    burger?.classList.remove('is-active');
    header?.classList.remove('menu-open');
    body.classList.remove('no-scroll');

    updateAria();
  }

  function openMainMenu() {
    isMenuOpen = true;
    isSubmenuOpen = false;

    mainNav?.classList.add('is-open');
    submenu?.classList.remove('is-open');
    submenuArrow?.classList.remove('is-rotated'); // Reset freccia quando si apre il menu principale
    burger?.classList.add('is-active');
    header?.classList.add('menu-open');
    body.classList.add('no-scroll');

    updateAria();
  }

  function openSubmenu() {
    if (!isMobile()) {
      submenu?.classList.toggle('is-open');
      isSubmenuOpen = submenu?.classList.contains('is-open');
      
      // Gestisci rotazione freccia per desktop
      if (isSubmenuOpen) {
        submenuArrow?.classList.add('is-rotated');
      } else {
        submenuArrow?.classList.remove('is-rotated');
      }
      
      updateAria();
      return;
    }

    isSubmenuOpen = true;
    submenu?.classList.add('is-open');
    submenuArrow?.classList.add('is-rotated'); // Ruota freccia su mobile
    createBackButton();
    updateAria();

    // Sposta il focus sul primo elemento del submenu
    const firstLink = submenu?.querySelector('.main-nav__submenu-link');
    firstLink?.focus();
  }

  function closeSubmenu() {
    isSubmenuOpen = false;
    submenu?.classList.remove('is-open');
    submenuArrow?.classList.remove('is-rotated'); // Reset freccia
    updateAria();

    // Riporta il focus sul link di apertura
    submenuLink?.focus();
  }

  function createBackButton() {
    if (!submenu) return;

    const existingBackItem = submenu.querySelector('.submenu-back-item');
    if (existingBackItem) {
      existingBackItem.remove();
    }

    if (isMobile()) {
      const backItem = document.createElement('li');
      backItem.className = 'main-nav__submenu-item submenu-back-item';
      backItem.innerHTML = `
        <a href="#" class="main-nav__submenu-link submenu-back-link">
          ${createIcon('chevronLeft', { className: 'main-nav__arrow main-nav__arrow--back' })}
          Back
        </a>
      `;
      submenu.insertBefore(backItem, submenu.firstChild);

      const backLink = backItem.querySelector('.submenu-back-link');
      backLink?.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        closeSubmenu();
      });

      // Accessibilità tastiera
      backLink?.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          closeSubmenu();
        }
      });
    }
  }

  burger?.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (isSubmenuOpen && isMobile()) {
      closeAll();
    } else if (isMenuOpen) {
      closeAll();
    } else {
      openMainMenu();
    }
  });

  burger?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      burger.click();
    }
  });

  submenuLink?.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (isMobile()) {
      openSubmenu();
    } else {
      submenu?.classList.toggle('is-open');
      isSubmenuOpen = submenu?.classList.contains('is-open');
      
      // Gestisci rotazione freccia per desktop
      if (isSubmenuOpen) {
        submenuArrow?.classList.add('is-rotated');
      } else {
        submenuArrow?.classList.remove('is-rotated');
      }
      
      updateAria();
    }
  });

  submenuLink?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      submenuLink.click();
    }
  });

  // Click fuori (desktop)
  document.addEventListener('click', (e) => {
    if (!isMobile() && menuItem && !menuItem.contains(e.target)) {
      submenu?.classList.remove('is-open');
      submenuArrow?.classList.remove('is-rotated'); // Reset freccia
      isSubmenuOpen = false;
      updateAria();
    }
  });

  // ESC per chiudere tutto
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (isSubmenuOpen) {
        closeSubmenu();
      } else if (isMenuOpen) {
        closeAll();
      }
    }
  });

  // Debounced resize
  let resizeTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      createBackButton();
      if (!isMobile()) {
        closeAll();
      }
    }, 150);
  });

  window.addEventListener('scroll', () => {
    if (!isMobile()) {
      submenu?.classList.remove('is-open');
      submenuArrow?.classList.remove('is-rotated'); // Reset freccia
      isSubmenuOpen = false;
      updateAria();
    }

    if (window.scrollY > 10) {
      header?.classList.add('header--scrolled');
    } else {
      header?.classList.remove('header--scrolled');
    }
  });

  createBackButton();
  updateAria();
}
