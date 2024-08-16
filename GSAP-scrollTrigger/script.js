//gsap animation
let timeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".animated-element",
    start: "-50% center",
    end: "200% center",
    scrub: true,
    markers: false,
    //     toggleActions: "play onLeave onEnterBack onLeaveBack",
  },
});

timeline.to(".animated-element", {
  x: 800,
  //   duration: 5,
});

//smooth scroll
//https://www.npmjs.com/package/@studio-freight/lenis
const lenis = new Lenis();

lenis.on("scroll", (e) => {
  console.log(e);
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
