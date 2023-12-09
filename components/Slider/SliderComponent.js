import bg1 from "../../static/images/bg1.jpg";
import bg2 from "../../static/images/bg2.jpg";
import bg3 from "../../static/images/bg3.jpg";
import { Sliderlogic } from "./Sliderlogic.js";

export function SliderComponent() {
  const section = document.createElement("section");
  section.classList.add("banner-slider-new-main");

  const heroHeaderDiv = document.createElement("div");
  heroHeaderDiv.classList.add("hero-header-11");

  const wrapperDiv = document.createElement("div");
  wrapperDiv.id = "wrapper";

  const slideshowSection = document.createElement("section");
  slideshowSection.classList.add("slideshow");
  slideshowSection.id = "js-header";

  for (let i = 1; i <= 3; i++) {
    const slideDiv = document.createElement("div");
    slideDiv.classList.add("slideshow__slide", "js-slider-home-slide");

    const backgroundDiv = document.createElement("div");
    backgroundDiv.classList.add(
      "slideshow__slide-background-parallax",
      "background-absolute",
      "js-parallax"
    );
    backgroundDiv.dataset.speed = "-1";
    backgroundDiv.dataset.position = "top";
    backgroundDiv.dataset.target = "#js-header";

    const imageDiv = document.createElement("div");
    imageDiv.classList.add("slideshow__slide-image", "background-absolute");
    imageDiv.style.backgroundImage = `url(${bg1})`;

    const captionDiv = document.createElement("div");
    captionDiv.classList.add("slideshow__slide-caption");

    const textContainerDiv = document.createElement("div");
    textContainerDiv.classList.add("slideshow__slide-caption-text");
    const containerDiv = document.createElement("div");
    containerDiv.classList.add("container", "js-parallax", "wrapper");
    containerDiv.dataset.speed = "2";
    containerDiv.dataset.position = "top";
    containerDiv.dataset.target = "#js-header";

    const heading = document.createElement("h4");
    heading.textContent = "Real adventure!";
    const title = document.createElement("h1");
    title.classList.add("slideshow__slide-caption-title", "mt-2");
    title.textContent = "Best Aquarium Solution";

    const button = document.createElement("a");
    button.classList.add("btn", "btn-style", "mt-sm-5", "mt-4");
    button.href = "contact.html";
    button.textContent = "Contact Now";

    section.appendChild(heroHeaderDiv);
    heroHeaderDiv.appendChild(wrapperDiv);
    wrapperDiv.appendChild(slideshowSection);
    slideshowSection.appendChild(slideDiv);
    slideDiv.appendChild(backgroundDiv);
    backgroundDiv.appendChild(imageDiv);
    slideDiv.appendChild(captionDiv);
    captionDiv.appendChild(textContainerDiv);
    textContainerDiv.appendChild(containerDiv);
    containerDiv.appendChild(heading);
    containerDiv.appendChild(title);
    containerDiv.appendChild(button);
  }

  return section;
}
