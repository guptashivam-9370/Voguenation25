gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
    markers: false,
});

window.addEventListener("resize", () => {
    ScrollTrigger.refresh();
});

const tl = gsap.timeline({defaults: { duration: 3 }});
const t2 = gsap.timeline({defaults: {ease: 'power2.out', duration: 1}});

const compTitle = document.querySelector(".comp-title");
const sidebarbtn = document.querySelector('.navmenu');
const sidebar = document.querySelector('.sidebar');
const mediaQueryLargeScreens = window.matchMedia('(min-width: 0px)'); // support feature if larger animations fails on smaller screen sizes that size can be set here
let toggle = false;

const logo = document.querySelector('.logo-fixed').getBoundingClientRect();
const navLogo = document.querySelector('.navlogo').getBoundingClientRect();

window.addEventListener('load', () => {
    function handleTween1ForLargerScreens(evt) {
        if (evt.matches) {
            tl.to('.logo', {
                scale: 0.44875,
                position: 'fixed',
                y: () => {
                    return (navLogo.top + (navLogo.bottom - navLogo.top) / 2) - (logo.top + (logo.bottom - logo.top) / 2);
                },
                x: () => {
                    return (navLogo.left + (navLogo.right - navLogo.left) / 2) - (logo.left + (logo.right - logo.left) / 2);
                },
                ease: 'power2.out',
            }, 0)
            .fromTo('.navbar', {
                y: '-100%',
                ease: 'expoScale',
            }, {
                opacity: 1,
                y: '0%',
                duration: 3,
                ease: 'expoScale',
            }, 1)
            .to('.para', {
                opacity: 1,
                x: '0%',
                ease: 'expoScale',
            }, 1)
            .to('.hero-background', {
                filter: 'blur(0px)',
                ease: 'slow',
            }, 1);

            ScrollTrigger.create({
                trigger: '.hero-wrapper',
                start: '10px top',
                end: '+=20',
                scrub: 2,
                animation: tl,
                markers: false,
            });

            gsap.to('.para', {
                scrollTrigger: {
                    trigger: '.para',
                    start: 'bottom 400px',
                    end: '+=35%',
                    scrub: 4,
                    pin: '.para',
                }
            });
        }
    }
    handleTween1ForLargerScreens(mediaQueryLargeScreens);
    mediaQueryLargeScreens.addEventListener('change', handleTween1ForLargerScreens);

    gsap.from('.competitions-wrapper', {
        y: '-10%',
        duration: 3,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: '.hero-background',
            start: 'bottom bottom',
            end: '+=700',
            scrub: 1,
        }
    });
    t2.to('#section-1', {
        opacity: 0,
    }, 1)
    .to('.shape-container', {
        rotate: 90,
    }, 1)
    .to(compTitle, {
        opacity: 0,
        scale: 0.5,
    }, 1)
    .to(compTitle, {
        innerText: 'HAUTE COUTURE',
        opacity: 1,
        scale: 1,
    }, 1.2)
    .to('#section-4', {
        opacity: 0,
    }, 2.5)
    .to('.shape-container', {
        rotate: 180,
    }, '<0')
    .to(compTitle, {
        opacity: 0,
        scale: 0.5,
    }, '<0')
    .to(compTitle, {
        innerText: 'STATES OF DRESS',
        opacity: 1,
        scale: 1,
    }, '<0.2')
    .to('#section-3', {
        opacity: 1,
    });

    ScrollTrigger.create({
        trigger: '.competitions-wrapper',
        start: '10% top',
        end: '+=4000',
        scrub: 1,
        pin: '.competitions-wrapper',
        pinSpacing: false,
        animation: t2,
    });

    sidebarbtn.addEventListener('click', () => {
        if (toggle === false) {
            gsap.fromTo(sidebar, {
                x: '100%',
                opacity: 0.7,
            }, {
                x: '0%',
                opacity: 1,
                duration: 1,
                ease: 'power2.out',
                onComplete: () => { toggle = true; }
            });
            gsap.to('#navmenubar-1', {
                rotate: 45,
                y: '10%',
                duration: 0.5,
                ease: 'power2.out',
            });
            gsap.to('#navmenubar-2', {
                rotate: -45,
                y: '-20%',
                duration: 0.5,
                ease: 'power2.out',
            });
        } else {
            gsap.to(sidebar, {
                x: '100%',
                opacity: 0.7,
                duration: 1,
                ease: 'power2.out',
                onComplete: () => { toggle = false; }
            });
            gsap.to('#navmenubar-1', {
                rotate: 90,
                y: '0%',
                duration: 0.5,
                ease: 'power2.out',
            });
            gsap.to('#navmenubar-2', {
                rotate: 90,
                y: '0%',
                duration: 0.5,
                ease: 'power2.out',
            });
        }
    });

    //Gallery Slider Logic
    const carousal = document.querySelector(".slider")

    firstImage = carousal.querySelectorAll("img")[0];
    const prev = document.querySelector(".prev")
    const next = document.querySelector(".next")

    let firstImageWidth = firstImage.clientWidth + 4

    prev.addEventListener("click", ()=>{
    carousal.scrollLeft -= firstImageWidth;
    })

    next.addEventListener("click", ()=>{
    carousal.scrollLeft += firstImageWidth;
    })
});