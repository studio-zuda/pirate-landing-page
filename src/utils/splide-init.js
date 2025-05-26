import Splide from '@splidejs/splide';
import '@splidejs/splide/dist/css/splide.min.css';
import { iconSVG } from '@/components/icons.js';

document.addEventListener('DOMContentLoaded', () => {
    const eventsSlider = document.querySelector('.events__slider');
    let splideInstance = null;
    
    function initSplide() {
        if (window.innerWidth < 768 && !splideInstance && eventsSlider) {
            
            splideInstance = new Splide('.events__slider', {
                type: 'slide',
                perPage: 1,
                perMove: 1,
                gap: '1rem',
                peek: {
                    before: 0,
                    after: '20%'
                },
                pagination: false,
                arrows: true,
                accessibility: true,
                arrowPath: '', // Disabilita il path SVG di default di Splide
                classes: {
                    arrows: 'splide__arrows events__arrows',
                    arrow : 'splide__arrow events__arrow',
                    prev  : 'splide__arrow--prev events__arrow--prev',
                    next  : 'splide__arrow--next events__arrow--next',
                }
            });
            
            splideInstance.mount();
            
            // Personalizza le frecce generate da Splide
            setTimeout(() => {
                // Funzione per impostare le frecce personalizzate
                function setCustomArrows() {
                    const prevArrow = eventsSlider.querySelector('.splide__arrow--prev');
                    const nextArrow = eventsSlider.querySelector('.splide__arrow--next');
                    
                    if (prevArrow && nextArrow) {
                        // Usa arrowRightShort per entrambe - CSS ruoterà quella di sinistra
                        prevArrow.innerHTML = iconSVG.arrowRightShort;
                        nextArrow.innerHTML = iconSVG.arrowRightShort;
                        
                        // Aggiungi class per identificazione
                        prevArrow.classList.add('debug-left-arrow');
                        nextArrow.classList.add('debug-right-arrow');
                        
                        return true;
                    } else {
                        console.error('Frecce non trovate nel DOM!');
                        return false;
                    }
                }
                
                // Imposta frecce immediatamente
                setCustomArrows();
                
                // Observer per controllare se Splide sovrascrive le nostre frecce
                const observer = new MutationObserver((mutations) => {
                    mutations.forEach((mutation) => {
                        if (mutation.type === 'childList' || mutation.type === 'characterData') {
                            const target = mutation.target;
                            if (target.classList && (target.classList.contains('splide__arrow--prev') || target.classList.contains('splide__arrow--next'))) {
                                setTimeout(() => setCustomArrows(), 10);
                            }
                        }
                    });
                });
                
                // Osserva le frecce per modifiche
                const prevArrow = eventsSlider.querySelector('.splide__arrow--prev');
                const nextArrow = eventsSlider.querySelector('.splide__arrow--next');
                if (prevArrow && nextArrow) {
                    observer.observe(prevArrow, { childList: true, subtree: true, characterData: true });
                    observer.observe(nextArrow, { childList: true, subtree: true, characterData: true });
                }
            }, 100);
        }
    }
    
    function destroySplide() {
        if (splideInstance) {
            splideInstance.destroy();
            splideInstance = null;
            
            // Rimuovi manualmente le frecce se sono ancora presenti
            const arrows = eventsSlider.querySelectorAll('.splide__arrow, .events__arrow');
            arrows.forEach(arrow => arrow.remove());
        }
    }
    
    function setupDesktop() {
        // Assicurati che su desktop il layout sia corretto
        if (eventsSlider) {
            const track = eventsSlider.querySelector('.splide__track');
            const list = eventsSlider.querySelector('.splide__list');
            
            if (track && list) {
                // Rimuovi qualsiasi trasformazione Splide
                track.style.transform = 'none';
                list.style.transform = 'none';
                list.style.transition = 'none';
            }
        }
    }
    
    function handleResize() {
        if (window.innerWidth >= 768) {
            destroySplide();
            setupDesktop();
        } else {
            initSplide();
        }
    }
    
    if (eventsSlider) {
        // Setup iniziale basato sulla larghezza corrente
        handleResize();
        
        // Gestisce il resize della finestra
        window.addEventListener('resize', handleResize);
    } else {
        console.error('Elemento .events__slider non trovato nel DOM!');
    }
});