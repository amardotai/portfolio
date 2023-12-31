gsap.registerPlugin(ScrollTrigger);
const canvas = document.getElementById("cyber-intro"),
  context = canvas.getContext("2d");
(canvas.width = 1920), (canvas.height = 1080);
const frameCount = 300,
  currentFrame = (e) =>
    `./frames/male${(e + 1).toString().padStart(4, "0")}.webp`,
  images = [],
  cyberfiction = { frame: 0 };
for (let i = 0; i < 300; i++) {
  let e = new Image();
  (e.src = currentFrame(i)), images.push(e);
}
function render() {
  context.clearRect(0, 0, canvas.width, canvas.height),
    context.drawImage(images[cyberfiction.frame], 0, 0);
}
gsap.to(cyberfiction, {
  frame: 299,
  snap: "frame",
  scrollTrigger: { scrub: 1 },
  onUpdate: render,
}),
  (images[0].onload = render),
  gsap.timeline({
    scrollTrigger: {
      trigger: ".section-2",
      pin: !0,
      start: "top top",
      end: "+=" + 1.3 * window.innerHeight,
      scrub: 1,
    },
  }),
  gsap.timeline({
    scrollTrigger: {
      trigger: ".section-3",
      pin: !0,
      start: "top top",
      end: "+=" + 1.3 * window.innerHeight,
      scrub: 1,
    },
  }),
  gsap.timeline({
    scrollTrigger: {
      trigger: ".section-4",
      pin: !0,
      start: "top top",
      end: "+=" + 1.3 * window.innerHeight,
      scrub: 1,
    },
  }),
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".c-avatar",
        start: "top top",
        end: "bottom top",
        scrub: 0,
      },
    })
    .to("#cyber-intro", { opacity: 0 }),
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".c-roadmap",
        pin: !1,
        start: "top bottom",
        end: "bottom bottom ",
        scrub: 1,
      },
    })
    .to(".c-roadmap", { color: "#fff", backgroundColor: "#171010" })
    .to("header", { color: "#fff" })
    .to(".button-round", {
      color: "#171010",
      backgroundColor: "#fff",
      border: "1px solid #fff",
    }),
  window.addEventListener("load", () => {
    document.body.classList.remove("before-load");
  }),
  document.querySelector(".loading").addEventListener("transitionend", (e) => {
    document.body.removeChild(e.currentTarget);
  });
