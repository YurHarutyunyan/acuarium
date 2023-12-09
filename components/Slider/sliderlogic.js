export function Sliderlogic() {
  const window = window;
  const body = document.body;

  class Slideshow {
    constructor(userOptions = {}) {
      const defaultOptions = {
        el: document.querySelector(".slideshow"),
        showArrows: false,
        showPagination: true,
        duration: 80000,
        autoplay: true,
      };

      let options = Object.assign({}, defaultOptions, userOptions);

      this.el = options.el;
      this.maxSlide = this.el.querySelectorAll(".js-slider-home-slide").length;
      this.showArrows = this.maxSlide > 1 ? options.showArrows : false;
      this.showPagination = options.showPagination;
      this.currentSlide = 1;
      this.isAnimating = false;
      this.animationDuration = 1200;
      this.autoplaySpeed = options.duration;
      this.interval;
      this.controls = this.el.querySelectorAll(".js-slider-home-button");
      this.autoplay = this.maxSlide > 1 ? options.autoplay : false;

      this.el.addEventListener("click", (event) => {
        if (event.target.classList.contains("js-slider-home-next")) {
          this.nextSlide();
        } else if (event.target.classList.contains("js-slider-home-prev")) {
          this.prevSlide();
        } else if (event.target.classList.contains("js-pagination-item")) {
          if (!this.isAnimating) {
            this.preventClick();
            this.goToSlide(event.target.dataset.slide);
          }
        }
      });

      this.init();
    }

    init() {
      this.goToSlide(1);
      if (this.autoplay) {
        this.startAutoplay();
      }

      if (this.showPagination) {
        let paginationNumber = this.maxSlide;
        let pagination =
          '<div class="pagination-slider"><div class="container">';

        for (let i = 0; i < this.maxSlide; i++) {
          let item = `<span class="pagination__item js-pagination-item ${
            i === 0 ? "is-current" : ""
          }" data-slide=${i + 1}>${i + 1}</span>`;
          pagination = pagination + item;
        }

        pagination = pagination + "</div></div>";

        this.el.insertAdjacentHTML("beforeend", pagination);
      }
    }

    preventClick() {
      this.isAnimating = true;
      this.controls.forEach((control) => {
        control.disabled = true;
      });
      clearInterval(this.interval);

      setTimeout(() => {
        this.isAnimating = false;
        this.controls.forEach((control) => {
          control.disabled = false;
        });
        if (this.autoplay) {
          this.startAutoplay();
        }
      }, this.animationDuration);
    }

    goToSlide(index) {
      this.currentSlide = parseInt(index);

      if (this.currentSlide > this.maxSlide) {
        this.currentSlide = 1;
      }

      if (this.currentSlide === 0) {
        this.currentSlide = this.maxSlide;
      }

      const newCurrent = this.el.querySelector(
        '.js-slider-home-slide[data-slide="' + this.currentSlide + '"]'
      );
      const newPrev =
        this.currentSlide === 1
          ? this.el.querySelector(".js-slider-home-slide:last-child")
          : newCurrent.previousElementSibling;
      const newNext =
        this.currentSlide === this.maxSlide
          ? this.el.querySelector(".js-slider-home-slide:first-child")
          : newCurrent.nextElementSibling;

      this.el.querySelectorAll(".js-slider-home-slide").forEach((slide) => {
        slide.classList.remove("is-prev", "is-next", "is-current");
      });
      this.el.querySelectorAll(".js-pagination-item").forEach((item) => {
        item.classList.remove("is-current");
      });

      if (this.maxSlide > 1) {
        newPrev.classList.add("is-prev");
        newNext.classList.add("is-next");
      }

      newCurrent.classList.add("is-current");
      this.el
        .querySelector(
          '.js-pagination-item[data-slide="' + this.currentSlide + '"]'
        )
        .classList.add("is-current");
    }

    nextSlide() {
      this.preventClick();
      this.goToSlide(this.currentSlide + 1);
    }

    prevSlide() {
      this.preventClick();
      this.goToSlide(this.currentSlide - 1);
    }

    startAutoplay() {
      this.interval = setInterval(() => {
        if (!this.isAnimating) {
          this.nextSlide();
        }
      }, this.autoplaySpeed);
    }

    destroy() {
      this.el.removeEventListener("click", () => {});
    }
  }

  (function () {
    let loaded = false;
    let maxLoad = 3000;

    function load() {
      const options = {
        showPagination: true,
      };

      let slideShow = new Slideshow(options);
    }

    function addLoadClass() {
      body.classList.add("is-loaded");

      setTimeout(function () {
        body.classList.add("is-animated");
      }, 600);
    }

    window.addEventListener("load", function () {
      if (!loaded) {
        loaded = true;
        load();
      }
    });

    setTimeout(function () {
      if (!loaded) {
        loaded = true;
        load();
      }
    }, maxLoad);

    addLoadClass();
  })();
}
