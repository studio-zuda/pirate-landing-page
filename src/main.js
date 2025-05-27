import '@/utils/splide-init.js';
import '@styles/index.scss';
import logo from '@images/logo.svg';
import parrot from '@images/parrot.webp';
import galleon from '@images/galleon.webp';
import galleonSwiper from '@images/swiper/galleon-swiper.webp';
import { iconSVG, iconFiles, createIcon, createIconImg, createContextIcon, createSocialIcon } from './components/icons.js';
import { initMenu } from '@/components/menu.js';

document.addEventListener('DOMContentLoaded', () => {
    initMenu();
});

document.querySelector('#app').innerHTML = `

    <div class="wrapper">
        <div class="container skip-container">
            <a class="link skip-container__skip-link" href="#main-content">Skip navigation and go to main content</a>
        </div>
        <header class="header" role="banner">
            <div class="container header__container">
                <a class="header__logo" href="#" aria-label="Pirate go to Homepage">
                    <img class="header__logo-image" src="${logo}" alt="" />
                </a>

                <button
                    class="header__burger"
                    aria-label="Open menu"
                    aria-controls="main-navigation" 
                    aria-expanded="false"
                >                    
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                    
               <nav id="main-navigation" class="main-nav" role="navigation" aria-label="Main navigation">
                    <div class="main-nav__header">
                        <div class="main-nav__logo">
                            <img src="${logo}" alt="" />
                        </div>
                    </div>
                    <ul class="main-nav__menu">
                        <li class="main-nav__item">
                            <a href="#" class="main-nav__link">Pirate</a>
                        </li>
                        <li class="main-nav__item main-nav__item--has-submenu">
                            <a href="#" class="main-nav__link" aria-haspopup="true" aria-expanded="false">
                                Parrots
                                ${createIcon('chevronDown', { className: 'main-nav__arrow nav-icon', size: 'large' })}
                            </a>
                        <ul class="main-nav__submenu">
                            <li class="main-nav__submenu-item">
                                <a href="#" class="main-nav__submenu-link">Red</a>
                            </li>
                            <li class="main-nav__submenu-item">
                                <a href="#" class="main-nav__submenu-link">Violet</a>
                            </li>
                            <li class="main-nav__submenu-item">
                                <a href="#" class="main-nav__submenu-link">Yellow</a>
                            </li>
                            <li class="main-nav__submenu-item">
                                <a href="#" class="main-nav__submenu-link">Green</a>
                            </li>
                        </ul>
                        </li>
                        <li class="main-nav__item">
                            <a href="#" class="main-nav__link main-nav__link--active" aria-current="page">Ships</a>
                        </li>
                        <li class="main-nav__item">
                            <a href="#" class="main-nav__link">Events</a>
                        </li>
                    </ul>
                    
                </nav>

                <a class="header__cta button button--primary" href="#">
                    Contacts
                </a>

            </div>
        </header>

        <main id="main-content">    

            <section class="hero">
                <h1 class="hero__title">
                    Pirate ipsum
                </h1>
            </section>

            <section class="section intro">
                <div class="container">
                    <h2 class="section__title">
                        Chantey Yard mutiny gar
                    </h2>
                    <p class="intro__desc">
                        Pirate ipsum arrgh bounty warp jack. Ballast sink nipperkin shot execution jones' fluke spyglass blimey mutiny. Boom spanish bow piracy boatswain jack locker keelhaul pirate lass. Main yellow tender chains rig jack gold the. Blossom down boatswain round across tea pink bounty shot. Main aft keelhaul cog sail bilge heave pounders. Hang pink tails bilged brace. Jolly reef chains spanker coxswain blow chain chain. O'nine ketch heave boat sloop tales cog league. Swab ballast down spot league hang clipper pounders to. Nest pink heave brethren shrouds rat nest spot.
                    </p>
                    <p class="intro__desc">
                        Corsair bilge tales belay starboard schooner weigh. Gaff on yer six seven or. Topsail brace maroon hearties landlubber aye gangplank topgallant. Coast black cat salmagundi schooner chain a tell sloop hogshead. Heave crimp jones' smartly heave hang gaff pounders. Gabion yarr tender main spanish topgallant. Splice chain mizzen piracy her. Quarterdeck sloop nest yellow yer bilged yellow belay hearties yawl. Yellow lee quarterdeck deck chase blimey. Bilge man corsair yawl boatswain hearties yellow main. Line roger execution arr topmast the. Grog warp line aft tails.
                    </p>
                </div>
            </section>

            <section class="showcase-section">
               
                <img class="showcase-section__img" src="${galleon}" alt="Galleon docked at the pier" />
                
                <div class="container-lg grid showcase-section__container">
                    <div class="showcase-section__content g-col-12 g-col-lg-7 g-start-lg-6">
                        <h3 class="h3 showcase-section__title">ships</h3>
                        <p class="text showcase-section__desc">
                            Pirate ipsum arrgh bounty warp jack. Tender smartly jack overhaul killick tender. Fleet driver to fluke bilge gangway. Chase nipperkin just mutiny spanish hang me quarterdeck heave. Coxswain jones' bow bilged clipper spyglass league chantey crack spyglass. Bilge six measured fleet on. Seven blossom blossom overhaul crow's chantey salmagundi chandler. 
                            <br> 
                            Corsair cat gunwalls jack seas. Arr hands aft prey rat. Boom maroon just locker chase. Pounders jack jib scurvy plate bilged. Chandler coxswain jolly ketch crack yer chains locker warp brig. Killick warp ensign heave or avast jack. Reef brethren round hail-shot topmast fleet roger topgallant men nipper. Seven yer driver sloop ensign shot.
                        </p>
                    </div>
                </div>
            </section>

            <section class="showcase-section">
                
                <img class="showcase-section__img" src="${parrot}" alt="Parrot perched on a branch in the jungle" />
                
                <div class="container-lg grid showcase-section__container">
                    <div class="showcase-section__content g-col-12 g-col-lg-7 g-start-lg-1">
                        <h3 class="h3 showcase-section__title">parrots</h3>
                        <p class="text showcase-section__desc">
                            Pirate ipsum arrgh bounty warp jack. Tender smartly jack overhaul killick tender. Fleet driver to fluke bilge gangway. Chase nipperkin just mutiny spanish hang me quarterdeck heave. Coxswain jones' bow bilged clipper spyglass league chantey crack spyglass. Bilge six measured fleet on. Seven blossom blossom overhaul crow's chantey salmagundi chandler. 
                            <br>
                            Corsair cat gunwalls jack seas. Arr hands aft prey rat. Boom maroon just locker chase. Pounders jack jib scurvy plate bilged. Chandler coxswain jolly ketch crack yer chains locker warp brig. Killick warp ensign heave or avast jack. Reef brethren round hail-shot topmast fleet roger topgallant men nipper. Seven yer driver sloop ensign shot.
                        </p>
                    </div>
                </div>
            </section>

            <section class="section events">
                <div class="container">
                    <h2 class="section__title">Events</h2>
                    <div class="events__slider splide">
                        <div class="splide__track">
                            <ul class="splide__list events__list">
                                <li class="splide__slide">
                                    <div class="event-card">
                                        <img class="event-card__img" src="${galleonSwiper}" alt="Galleon at the harbor during the Boom Belaying event" />
                                        <div class="event-card__body">
                                            <h3 class="event-card__title">Boom belaying</h3>
                                            <p class="event-card__desc">Pirate ipsum argh bounty warp jack.</p>
                                            <a class="button button--primary event-card__button" href="#">
                                                Read more
                                                ${createIcon('arrowRightShort', { className: 'button-icon button-icon--right icon-color-secondary', size: 'small' })}
                                            </a>
                                        </div>
                                    </div>
                                </li>
                                <li class="splide__slide">
                                    <div class="event-card">
                                        <img class="event-card__img" src="${galleonSwiper}" alt="Galleon at the harbor during the Cannon Firing event" />
                                        <div class="event-card__body">
                                            <h3 class="event-card__title">Cannon firing</h3>
                                            <p class="event-card__desc">Tender smartly jack overhaul killick tender.</p>
                                            <a class="button button--primary event-card__button" href="#">
                                                Read more
                                                ${createIcon('arrowRightShort', { className: 'button-icon button-icon--right icon-color-secondary', size: 'small' })}
                                            </a>
                                        </div>
                                    </div>
                                </li>
                                <li class="splide__slide">
                                    <div class="event-card">
                                        <img class="event-card__img" src="${galleonSwiper}" alt="Galleon at the harbor during the Treasure Hunt event" />
                                        <div class="event-card__body">
                                            <h3 class="event-card__title">Treasure hunt</h3>
                                            <p class="event-card__desc">Fleet driver to fluke bilge gangway.</p>
                                            <a class="button button--primary event-card__button" href="#">
                                                Read more
                                                ${createIcon('arrowRightShort', { className: 'button-icon button-icon--right icon-color-secondary', size: 'small' })}
                                            </a>
                                        </div>
                                    </div>
                                </li>
                                <li class="splide__slide">
                                    <div class="event-card">
                                        <img class="event-card__img" src="${galleonSwiper}" alt="Galleon at the harbor during the Pirate Feast event" />
                                        <div class="event-card__body">
                                            <h3 class="event-card__title">Pirate feast</h3>
                                            <p class="event-card__desc">Chase nipperkin just mutiny spanish hang.</p>
                                            <a class="button button--primary event-card__button" href="#">
                                                Read more
                                                ${createIcon('arrowRightShort', { className: 'button-icon button-icon--right icon-color-secondary', size: 'small' })}
                                            </a>
                                        </div>
                                    </div>
                                </li>
                                <li class="splide__slide">
                                    <div class="event-card">
                                        <img class="event-card__img" src="${galleonSwiper}" alt="Galleon at the harbor during the Sea Battle event" />
                                        <div class="event-card__body">
                                            <h3 class="event-card__title">Sea battle</h3>
                                            <p class="event-card__desc">Coxswain jones' bow bilged clipper spyglass.</p>
                                            <a class="button button--primary event-card__button" href="#">
                                                Read more
                                                ${createIcon('arrowRightShort', { className: 'button-icon button-icon--right icon-color-secondary', size: 'small' })}
                                            </a>
                                        </div>
                                    </div>
                                </li>
                                <li class="splide__slide">
                                    <div class="event-card">
                                        <img class="event-card__img" src="${galleonSwiper}" alt="Galleon at the harbor during the Parrot Show event" />
                                        <div class="event-card__body">
                                            <h3 class="event-card__title">Parrot show</h3>
                                            <p class="event-card__desc">Seven blossom blossom overhaul crow's chantey.</p>
                                            <a class="button button--primary event-card__button" href="#">
                                                Read more
                                                ${createIcon('arrowRightShort', { className: 'button-icon button-icon--right icon-color-secondary', size: 'small' })}
                                            </a>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="splide__arrows events__arrows">
                            <button class="splide__arrow splide__arrow--prev events__arrow events__arrow--prev" type="button">
                                <span class="sr-only">Previous slide</span>
                            </button>
                            <button class="splide__arrow splide__arrow--next events__arrow events__arrow--next" type="button">
                                <span class="sr-only">Next slide</span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>


            <section class="section timeline">
                <div class="container">
                    <h2 class="section__title">Timeline</h2>
                    <ul class="timeline__steps">
                        <li class="timeline__step">1</li>
                        <li class="timeline__step">2</li>
                        <li class="timeline__step">3</li>
                    </ul>
                </div>
            </section>

        </main>

        <footer class="footer">
            <div class="container footer__container">
                <div class="footer__logo">
                    <img class="footer__logo-image" src="${logo}" alt="" />
                </div>
                <nav class="footer__socials" aria-label="Social media">
                    <ul class="footer__socials-list">
                        <li class="footer__socials-item">
                            <a class="footer__socials-link" href="#" aria-label="Mastodon">
                                ${createIcon('mastodon', { className: 'social-icon icon-color-primary', size: 'large' })}
                            </a>
                        </li>
                        <li class="footer__socials-item">
                            <a class="footer__socials-link" href="#" aria-label="Instagram">
                                ${createIcon('instagram', { className: 'social-icon icon-color-primary', size: 'large' })}
                            </a>
                        </li>
                        <li class="footer__socials-item">
                            <a class="footer__socials-link" href="#" aria-label="Twitch">
                                ${createIcon('twitch', { className: 'social-icon icon-color-primary', size: 'large' })}
                            </a>
                        </li>
                    </ul>
                </nav>
                <a class="button button--primary footer__cta" href="#">
                    Contacts
                </a>
            </div>
        </footer>

    </div>
`
