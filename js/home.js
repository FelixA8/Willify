function leftScroll(scrollImages) {
  scrollImages.scrollBy({
    left: -200,
    behavior: "smooth",
  });
}

function rightScroll(scrollImages) {
  scrollImages.scrollBy({
    left: 200,
    behavior: "smooth",
  });
}

//Reccomendation Slider
document.addEventListener("DOMContentLoaded", function () {
  const scrollImages = document.querySelector(".reccomendation-scroll-images");
  const scrollLength = scrollImages.scrollWidth - scrollImages.clientWidth;
  const leftButton = document.querySelector(".reccomendation-left");
  const rightButton = document.querySelector(".reccomendation-right");
  const cover = document.querySelector(".reccomendation-cover");

  function checkScroll() {
    const currentScroll = scrollImages.scrollLeft;

    if (scrollLength === 0) {
      rightButton.remove();
      leftButton.remove();
      cover.style.padding = "0px";
    }

    if (currentScroll === 0) {
      leftButton.setAttribute("disabled", "true");
      rightButton.removeAttribute("disabled");
    } else if (currentScroll >= scrollLength) {
      rightButton.setAttribute("disabled", "true");
      // rightButton.removeAttribute("disabled");
      leftButton.removeAttribute("disabled");
    } else {
      leftButton.removeAttribute("disabled");
      rightButton.removeAttribute("disabled");
    }
  }

  scrollImages.addEventListener("scroll", checkScroll);
  window.addEventListener("resize", checkScroll);
  checkScroll();
  leftButton.addEventListener("click", function () {
    leftScroll(scrollImages);
  });
  rightButton.addEventListener("click", function () {
    rightScroll(scrollImages);
  });
});

//Best Indonesian Song Slider
document.addEventListener("DOMContentLoaded", function () {
  const scrollImages = document.querySelector(".best-indonesian-scroll-images");
  const scrollLength = scrollImages.scrollWidth - scrollImages.clientWidth;
  const leftButton = document.querySelector(".best-indonesian-left");
  const rightButton = document.querySelector(".best-indonesian-right");
  const cover = document.querySelector(".best-indonesian-cover");

  function checkScroll() {
    const currentScroll = scrollImages.scrollLeft;
    console.log(currentScroll);
    console.log(scrollLength);

    if (scrollLength === 0) {
      rightButton.remove();
      leftButton.remove();
      cover.style.padding = "0px";
    }

    if (currentScroll === 0) {
      leftButton.setAttribute("disabled", "true");
      rightButton.removeAttribute("disabled");
    } else if (currentScroll >= scrollLength) {
      rightButton.setAttribute("disabled", "true");
      // rightButton.removeAttribute("disabled");
      leftButton.removeAttribute("disabled");
    } else {
      leftButton.removeAttribute("disabled");
      rightButton.removeAttribute("disabled");
    }
  }

  scrollImages.addEventListener("scroll", checkScroll);
  window.addEventListener("resize", checkScroll);
  checkScroll();

  leftButton.addEventListener("click", function () {
    leftScroll(scrollImages);
  });
  rightButton.addEventListener("click", function () {
    rightScroll(scrollImages);
  });
});

///////////////////////////////////////////////////////////
// Sticky navigation

const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);
