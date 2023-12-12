import about1Image from "../../public/static/images/about1.jpg";
import about2Image from "../../public/static/images/about2.jpg";

export function SliderBottomComponent() {
  const aboutDiv = document.createElement("section");
  aboutDiv.classList.add("w3l-aboutblock", "py-5");

  const containerDiv = document.createElement("div");
  containerDiv.classList.add("container", "py-md-5", "py-sm-4");

  const firstRowDiv = document.createElement("div");
  firstRowDiv.classList.add("row");

  const leftImgDiv = document.createElement("div");
  leftImgDiv.classList.add(
    "col-lg-6",
    "left-wthree-img",
    "mb-lg-0",
    "mb-md-5",
    "mb-4"
  );

  const img1 = document.createElement("img");
  img1.classList.add("img-fluid", "img-responsive");
  img1.src = about1Image;
  img1.alt = " ";

  leftImgDiv.appendChild(img1);

  const rightContentDiv = document.createElement("div");
  rightContentDiv.classList.add(
    "col-lg-6",
    "about-right-faq",
    "align-self",
    "position-relative",
    "pl-lg-5"
  );

  const title1 = document.createElement("h6");
  title1.classList.add("left-text-design");
  title1.textContent = "Aquarium";

  const subtitle1 = document.createElement("h3");
  subtitle1.classList.add("title-style", "mb-2", "pl-4");
  subtitle1.textContent = "Aquarium Design, Manufacture";

  const para1 = document.createElement("p");
  para1.classList.add("mt-3", "pl-4");
  para1.textContent =
    "Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices in ligula. Semper at tempufddfel. Lorem ipsum dolor sit amet consectetur adipisicing elit.";

  const para2 = document.createElement("p");
  para2.classList.add("mt-3", "pl-4");
  para2.textContent =
    "Semper at tempufddfel. Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quae, fugiat.";

  const learnMoreBtn1 = document.createElement("a");
  learnMoreBtn1.classList.add("btn", "btn-style", "mt-4", "ml-4");
  learnMoreBtn1.href = "services.html";
  learnMoreBtn1.textContent = "Learn More";

  rightContentDiv.appendChild(title1);
  rightContentDiv.appendChild(subtitle1);
  rightContentDiv.appendChild(para1);
  rightContentDiv.appendChild(para2);
  rightContentDiv.appendChild(learnMoreBtn1);

  firstRowDiv.appendChild(leftImgDiv);
  firstRowDiv.appendChild(rightContentDiv);

  const secondRowDiv = document.createElement("div");
  secondRowDiv.classList.add("row", "mt-5", "pt-lg-4");

  const leftImg2Div = document.createElement("div");
  leftImg2Div.classList.add(
    "col-lg-6",
    "left-wthree-img",
    "mb-lg-0",
    "mb-md-5",
    "mb-4",
    "order-lg-last"
  );

  const img2 = document.createElement("img");
  img2.classList.add("img-fluid", "img-responsive");
  img2.src = about2Image;
  img2.alt = " ";

  leftImg2Div.appendChild(img2);

  const rightContent2Div = document.createElement("div");
  rightContent2Div.classList.add(
    "col-lg-6",
    "about-right-faq",
    "align-self",
    "position-relative",
    "pl-lg-5",
    "order-lg-first"
  );

  const title2 = document.createElement("h6");
  title2.classList.add("left-text-design");
  title2.textContent = "Aquarium";

  const subtitle2 = document.createElement("h3");
  subtitle2.classList.add("title-style", "mb-2", "pl-4");
  subtitle2.textContent = "Aquarium Maintenance Services";

  const para3 = document.createElement("p");
  para3.classList.add("mt-3", "pl-4");
  para3.textContent =
    "Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices in ligula. Semper at tempufddfel. Lorem ipsum dolor sit amet consectetur adipisicing elit.";

  const para4 = document.createElement("p");
  para4.classList.add("mt-3", "pl-4");
  para4.textContent =
    "Semper at tempufddfel. Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quae, fugiat.";

  const learnMoreBtn2 = document.createElement("a");
  learnMoreBtn2.classList.add("btn", "btn-style", "mt-4", "ml-4");
  learnMoreBtn2.href = "services.html";
  learnMoreBtn2.textContent = "Learn More";

  rightContent2Div.appendChild(title2);
  rightContent2Div.appendChild(subtitle2);
  rightContent2Div.appendChild(para3);
  rightContent2Div.appendChild(para4);
  rightContent2Div.appendChild(learnMoreBtn2);

  secondRowDiv.appendChild(leftImg2Div);
  secondRowDiv.appendChild(rightContent2Div);

  containerDiv.appendChild(firstRowDiv);
  containerDiv.appendChild(secondRowDiv);

  aboutDiv.appendChild(containerDiv);

  return aboutDiv;
}
