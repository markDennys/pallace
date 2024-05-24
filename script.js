const mtObserve = new IntersectionObserver((entr) => {
  entr.forEach((ent) => {
    if (ent.isIntersecting) {
      ent.target.classList.add("show");
    }  
  });
});

const elems = document.querySelectorAll(".parag");

elems.forEach((element) => mtObserve.observe(element));
