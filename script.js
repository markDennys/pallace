const mtObserve = new IntersectionObserver((entr) => {
  entr.forEach((ent) => {
    if (ent.isIntersecting) {
      ent.target.classList.add("show");
    }
  });
});

const elems = document.querySelectorAll(".parag");

elems.forEach((element) => mtObserve.observe(element));

const mtObserve2 = new IntersectionObserver((entr) => {
  entr.forEach((ent) => {
    if (ent.isIntersecting) {
      ent.target.classList.add("show");
    } else {
      ent.target.classList.remove("show");
    }
  });
});

const elems2 = document.querySelectorAll(".ani");
const elems3 = document.querySelectorAll(".anit");
const elems4 = document.querySelectorAll(".anim");
const elems5 = document.querySelectorAll(".avec");

elems2.forEach((element) => mtObserve2.observe(element));

elems3.forEach((element) => mtObserve2.observe(element));

elems4.forEach((element) => mtObserve2.observe(element));

