//gsap
gsap.registerPlugin(ScrollTrigger);
const splitTypes = document.querySelectorAll(".reveal-type");

splitTypes.forEach((char, i) => {
  const bg = char.dataset.bgColor;
  const fg = char.dataset.fgColor;

  const text = new SplitType(char, { types: "chars" });

  gsap.fromTo(
    text.chars,
    { color: bg },
    {
      color: fg,
      stagger: 0.02,
      duration: 0.3,
      ScrollTrigger: {
        trigger: char,
        start: "top 80%",
        end: "top 20%",
        scrub: false,
        markers: false,
        toggleActions: "play play reverse reverse",
      },
    }
  );

  // animation A type
  // gsap.from(text.chars, {
  //   ScrollTrigger: {
  //     trigger: char,
  //     start: "top 80%",
  //     end: "top 20%",
  //     scrub: true,
  //     markers: false,
  //   },
  //   opacity: 0.2,
  //   stagger: 0.1,
  // });

  // animation B type
  // gsap.from(text.chars, {
  //   ScrollTrigger: {
  //     trigger: char,
  //     start: "top 80%",
  //     end: "top 20%",
  //     scrub: true,
  //     markers: false,
  //   },
  //   scaleY: 0,
  //   y: -20,
  //   transformOrigin: "top",
  //   opacity: 0,
  //   stagger: 0.1,
  // });
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
