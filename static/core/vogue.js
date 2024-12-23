console.log('Connected!');
gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
	markers: false,
});

const logo = document.querySelector('.logo-fixed').getBoundingClientRect();
const navLogo = document.querySelector('.navlogo').getBoundingClientRect();

const translateY =
	(navLogo.bottom - navLogo.top) / 2 -
	(logo.top + (logo.bottom - logo.top) / 2);
console.log(translateY);

const tl = gsap.timeline({ defaults: { duration: 3 } });

tl.to(
	'.logo',
	{
		fontSize: '57.44px',
		position: 'fixed',
		y: translateY,
		ease: 'power2.out',
		// onComplete: () => {
		//     document.querySelector('.logo').classList.toggle('invisible');
		//     document.querySelector('.navlogotext').classList.toggle('invisible');
		// },
	},
	0
)

	.fromTo(
		'.navbar',
		{
			y: '-100%',
			ease: 'expoScale',
		},
		{
			opacity: 1,
			y: '0%',
			duration: 3,
			ease: 'expoScale',
		},
		1
	)
	.to(
		'.para',
		{
			opacity: 1,
			x: '0%',
			ease: 'expoScale',
		},
		1
	)

	.to(
		'.hero-background',
		{
			filter: 'blur(0px)',
			ease: 'slow',
		},
		1
	);

ScrollTrigger.create({
	trigger: '.hero-container',
	start: '40px top',
	end: '+=20',
	scrub: 2,
	animation: tl,
});

gsap.to('.para', {
	scrollTrigger: {
		trigger: '.para',
		start: 'bottom 400px',
		end: '+=200',
		scrub: 4,
		pin: '.para',
	},
});

gsap.from('.competitions', {
	y: '-10%',
	duration: 3,
	ease: 'power2.out',
	scrollTrigger: {
		trigger: '.hero',
		start: 'bottom bottom',
		end: '+=500',
		scrub: 1,
	},
});

// gsap.fromTo('.navbar', {
//     opacity: 0.8,
// }, {
//     opacity: 1,
//     duration: 1,
//     scrollTrigger: {
//         trigger: '.para',
//         start: 'bottom center',
//         end: '+=100',
//         scrub: 1,
//     }
// })

const compTitle = document.querySelector('.comp-title');
const compText = document.querySelector('.comp-text');
const rulebookLink = document
	.querySelector('.comp-rulebook-link')
	.getAttribute('href');
console.log(rulebookLink);

const t2 = gsap.timeline({ defaults: { ease: 'power2.out', duration: 1 } });
t2.to(
	'#section-1',
	{
		opacity: 0,
	},
	1
)
	.to(
		'.shape-container',
		{
			rotate: 90,
		},
		1
	)
	.to(
		compTitle,
		{
			opacity: 0,
			scale: 0.5,
		},
		1
	)
	.to(
		compTitle,
		{
			innerText: 'HAUTE COUTURE',
			opacity: 1,
			scale: 1,
		},
		1.2
	)
	.to(
		'#section-4',
		{
			opacity: 0,
		},
		2.5
	)
	.to(
		'.shape-container',
		{
			rotate: 180,
		},
		'<0'
	)
	.to(
		compTitle,
		{
			opacity: 0,
			scale: 0.5,
		},
		'<0'
	)
	.to(
		compTitle,
		{
			innerText: 'STATES OF DRESS',
			opacity: 1,
			scale: 1,
		},
		'<0.2'
	)
	.to('#section-3', {
		opacity: 1,
	});

ScrollTrigger.create({
	trigger: '#section-1',
	start: '15% top',
	end: '+=4000',
	scrub: 1,
	pin: '.competitions-wrapper',
	pinSpacing: false,
	animation: t2,
});

const sidebarbtn = document.querySelector('.navmenu');
const sidebar = document.querySelector('.sidebar');
const backgroundBody = document.querySelectorAll('body > *:not(.header)');
let toggle = false;

sidebarbtn.addEventListener('click', () => {
	if (toggle === false) {
		gsap.fromTo(
			sidebar,
			{
				x: '100%',
				opacity: 0.7,
			},
			{
				x: '0%',
				opacity: 1,
				duration: 1,
				ease: 'power2.out',
				onComplete: () => {
					toggle = true;
				},
			}
		);
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
			onComplete: () => {
				toggle = false;
			},
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
