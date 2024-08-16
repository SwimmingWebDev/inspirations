const slider = document.querySelector(".slider");
const sections = gsap.utils.toArray(".slider section");
const icons = gsap.utils.toArray(".icon-container img");

let timeline = gsap.timeline({
  defaults: {
    ease: "none",
  },
  scrollTrigger: {
    trigger: slider,
    pin: true,
    scrub: 2,
    end: () => "+=" + slider.offsetWidth,
  },
});

timeline.to(slider, {
  xPercent: -66,
});

sections.forEach((stop, index) => {
  timeline.from(stop.querySelector(".content"), {
    yPercent: -50,
    opacity: 0,
    scrollTrigger: {
      trigger: stop.querySelector(".content"),
      start: "left center",
      end: "center center",
      containerAnimation: timeline,
      scrub: true,
      marker: false,
    },
  });
  // .from(stop.querySelector("img"), {
  //   xPercent: 40,
  //   yPercent: -100,
  //   ease: "elastic.out(1,1)",
  //   scrollTrigger: {
  //     trigger: stop.querySelector("img"),
  //     containerAnimation: timeline,
  //     scrub: 2,
  //     marker: false,
  //   },
  // });
});

icons.forEach((icon, i) => {
  gsap.from(icon, {
    xPercent: icon.dataset.distance,
    scrollTrigger: {
      scrub: 0.3,
    },
  });
});

//smooth scrolling
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
