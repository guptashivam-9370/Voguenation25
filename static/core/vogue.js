document.getElementById('navbtn1').addEventListener('click', function() {
	window.location.href = '/register/Haute_Couture/';
});
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
const mediaQueryNonMobileScreens = window.matchMedia('(min-width: 480px)');
const mediaQueryMobileScreens = window.matchMedia('(max-width: 480px)');
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

    function handleTween2ForNonMobileScreens(evt){
        if (evt.matches){
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
            .to('.comp-text', {
                fontSize: '0.875rem',
                innerText: 'where the most glamorous people show off their skills as they walk the ramp and evoking all those creative people out there to put on their thinking caps and come out with the most innovative theme based fashion show.',
            }, '<0')
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
            .to('.comp-text', {
                fontSize: '1.01rem',
                innerText: 'where you let your creativity run wild as you design the best outfit for your friend using only paper. Put your origami and fashion skills to use and come up with the perfect dress.',
            }, '<0')
            .to('#section-3', {
                opacity: 1,
            });
        
            ScrollTrigger.create({
                trigger: '.competitions-wrapper',
                start: '10% top',
                end: '+=4000',
                scrub: 4,
                snap: {
                    snapTo: 1 / 4,
                    duration: 0.2,
                    ease: 'power2.out',
                },
                pin: '.competitions-wrapper',
                pinSpacing: false,
                animation: t2,
            });
        }
    }
    handleTween2ForNonMobileScreens(mediaQueryNonMobileScreens);
    mediaQueryNonMobileScreens.addEventListener('change', handleTween2ForNonMobileScreens);

    function handleScrollForMobileScreens(evt) {
        if (evt.matches) {
            const shapeContainer = document.querySelector('.shape-container');
            const section3 = document.querySelector('#section-3');
            const section4 = document.querySelector('#section-4');
    
            // Avoid duplicating elements
            if (!document.querySelector('.text-container[data-inserted="haute-couture"]')) {
                // Create new text-container for "HAUTE COUTURE"
                const newTextContainer1 = document.createElement('div');
                newTextContainer1.classList.add('text-container');
                newTextContainer1.setAttribute('data-inserted', 'haute-couture'); // Prevent duplicates
    
                const compTitle1 = document.createElement('div');
                compTitle1.classList.add('comp-title');
                compTitle1.innerText = 'HAUTE COUTURE';
    
                const compText1 = document.createElement('div');
                compText1.classList.add('comp-text');
                compText1.innerText = 'where the most glamorous people show off their skills as they walk the ramp and evoking all those creative people out there to put on their thinking caps and come out with the most innovative theme based fashion show.';
    
                const compRulebook1 = document.createElement('div');
                compRulebook1.classList.add('comp-rulebook');
                const compRulebookLink1 = document.createElement('a');
                compRulebookLink1.classList.add('comp-rulebook-link');
                compRulebookLink1.href = 'https://drive.google.com/file/d/1gPem4G8y2oAUFXmIq9-uqRHPON1fm35D/view?pli=1';
                compRulebookLink1.target = '_blank';
                compRulebookLink1.innerText = 'RULEBOOK';
                compRulebook1.appendChild(compRulebookLink1);
    
                newTextContainer1.appendChild(compTitle1);
                newTextContainer1.appendChild(compText1);
                newTextContainer1.appendChild(compRulebook1);
    
                // Insert before section-3
                shapeContainer.insertBefore(newTextContainer1, section4);
            }
    
            if (!document.querySelector('.text-container[data-inserted="state-of-dress"]')) {
                // Create new text-container for "STATE OF DRESS"
                const newTextContainer2 = document.createElement('div');
                newTextContainer2.classList.add('text-container');
                newTextContainer2.setAttribute('data-inserted', 'state-of-dress'); // Prevent duplicates
    
                const compTitle2 = document.createElement('div');
                compTitle2.classList.add('comp-title');
                compTitle2.innerText = 'STATE OF DRESS';
    
                const compText2 = document.createElement('div');
                compText2.classList.add('comp-text');
                compText2.innerText = 'where you let your creativity run wild as you design the best outfit for your friend using only paper. Put your origami and fashion skills to use and come up with the perfect dress.';
    
                const compRulebook2 = document.createElement('div');
                compRulebook2.classList.add('comp-rulebook');
                const compRulebookLink2 = document.createElement('a');
                compRulebookLink2.classList.add('comp-rulebook-link');
                compRulebookLink2.href = 'https://drive.google.com/file/d/1gPem4G8y2oAUFXmIq9-uqRHPON1fm35D/view?pli=1';
                compRulebookLink2.target = '_blank';
                compRulebookLink2.innerText = 'RULEBOOK';
                compRulebook2.appendChild(compRulebookLink2);
    
                newTextContainer2.appendChild(compTitle2);
                newTextContainer2.appendChild(compText2);
                newTextContainer2.appendChild(compRulebook2);
    
                // Insert before section-4
                shapeContainer.insertBefore(newTextContainer2, section3);
            }
    
            // Manually re-render section-4
            if (section4) {
                // Force reflow to ensure re-render
                section4.style.display = 'none'; // Temporarily hide
                section4.offsetHeight; // Trigger reflow
                section4.style.display = 'block'; // Show again
            }
        }
    }

    handleScrollForMobileScreens(mediaQueryMobileScreens);
    mediaQueryMobileScreens.addEventListener('change', handleScrollForMobileScreens);

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
                x:'2px',
                y: '17%',
                duration: 0.5,
                ease: 'power2.out',
            });
            gsap.to('#navmenubar-2', {
                rotate: -45,
                x:'-2px',
                y: '-17%',
                duration: 0.5,
                ease: 'power2.out',
            });
            gsap.to('body', {
                overflow: 'hidden',
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
                x: '0%',
                y: '0%',
                duration: 0.5,
                ease: 'power2.out',
            });
            gsap.to('#navmenubar-2', {
                rotate: 90,
                x: '0%',
                y: '0%',
                duration: 0.5,
                ease: 'power2.out',
            });
            gsap.to('body', {
                overflowY: 'visible',
            })
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

//Footer Navigation
const footerNavList = document.querySelectorAll('.links');

const urlMap = {
    youtube: "https://www.youtube.com/@alcheringaIITG",
    twitter: "https://x.com/alcheringaiitg?lang=en",
    linkedin: "https://in.linkedin.com/company/alcheringaiitguwahati",
    facebook: "https://www.facebook.com/alcheringaiitg/",
    threads: "https://www.threads.net/@alcheringaiitg",
    instagram: "https://in.linkedin.com/company/alcheringaiitguwahati"
};

footerNavList.forEach((footerNav) => {
    footerNav.addEventListener('click', () => {
        const redirectUrl = urlMap[footerNav.id];
        if (redirectUrl) {
            console.log(`Redirecting to: ${redirectUrl}`);
            window.open(redirectUrl, '_blank');
        } else {
            console.log(`No URL mapped for ID: ${footerNav.id}`);
        }
    });
});

//Navbar Navigation
const homeBtn = document.querySelector("#home-button");
homeBtn.addEventListener('click', (event) => {
    event.preventDefault();
    var targetSection = document.getElementById('hero');
    targetSection.scrollIntoView({ behavior: 'smooth' });
})

const contactBtn = document.querySelector("#contact-button");
contactBtn.addEventListener('click', (event) => {
    event.preventDefault();
    var targetSection = document.getElementById('footer');
    targetSection.scrollIntoView({ behavior: 'smooth' });
})

//Sidebar Navigation
const sideBarBtns = document.querySelectorAll('.sidebarli');


// ...existing code...

const blurOverlay = document.querySelector('.blur-overlay');
function closeSidebar() {
    gsap.to(sidebar, {
        x: '100%',
        opacity: 0.7,
        duration: 1,
        ease: 'power2.out',
        onComplete: () => { toggle = false; }
    });
    gsap.to('#navmenubar-1', {
        rotate: 90,
        x: '0%',
        y: '0%',
        duration: 0.5,
        ease: 'power2.out',
    });
    gsap.to('#navmenubar-2', {
        rotate: 90,
        x: '0%',
        y: '0%',
        duration: 0.5,
        ease: 'power2.out',
    });
    gsap.to('body', {
        overflowY: 'visible',
    });
    blurOverlay.style.display = 'none'; // Hide blur overlay
}

function openSidebar() {
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
        x: '2px',
        y: '17%',
        duration: 0.5,
        ease: 'power2.out',
    });
    gsap.to('#navmenubar-2', {
        rotate: -45,
        x: '-2px',
        y: '-17%',
        duration: 0.5,
        ease: 'power2.out',
    });
    gsap.to('body', {
        overflow: 'hidden',
    });
    blurOverlay.style.display = 'block'; // Show blur overlay
}

blurOverlay.addEventListener('click', closeSidebar);

sidebarbtn.addEventListener('click', () => {
    toggle ? closeSidebar() : openSidebar();
});
const navMap = {
    home: "hero",
    glamourNova: "/register/Glamour_Nova/",
    stateOfDress: "/register/States_of_Dress/",
    hauteCouture: "/register/Haute_Couture/",
    gallery: "gallery-gallery",
    contact: "footer",
    competition: "/register/Haute_Couture/",
};
sideBarBtns.forEach((sidebarBtn) => {
    sidebarBtn.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = navMap[sidebarBtn.id];
        if (targetId.startsWith('/')) {
            closeSidebar();
            window.location.href = targetId;
        } else {
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
                closeSidebar();
            } else {
                console.error(`No section found with ID: ${targetId}`);
            }
        }
    });
});
