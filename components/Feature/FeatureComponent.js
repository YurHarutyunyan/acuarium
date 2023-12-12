import icon1 from "../../public/static/images/icon1.png";
import icon2 from "../../public/static/images/icon2.png";
import icon3 from "../../public/static/images/icon3.png";
import icon4 from "../../public/static/images/icon4.png";
import bg1 from "../../public/static/images/bg1.jpg";

export function FeatureComponent() {
  const section = document.createElement("section");
  section.classList.add("w3l-feature-8", "py-5");

  section.style.background = `url('${bg1}') no-repeat center fixed`;
  section.style.backgroundSize = "cover";
  const containerDiv = document.createElement("div");
  containerDiv.classList.add("container", "py-md-5", "py-4");

  const rowDiv = document.createElement("div");
  rowDiv.classList.add("row", "features", "text-center", "py-lg-5");

  const featuresData = [
    {
      iconSrc: icon1,
      title: "Maintenance",
      text: "Lorem ipsum dolor sit amet consectetur adipis",
      link: "about.html",
    },
    {
      iconSrc: icon1,
      title: "Health Services",
      text: "Lorem ipsum dolor sit amet consectetur adipis",
      link: "about.html",
    },
    {
      iconSrc: icon1,
      title: "Design",
      text: "Lorem ipsum dolor sit amet consectetur adipis",
      link: "about.html",
    },
    {
      iconSrc: icon1,
      title: "Consultation",
      text: "Lorem ipsum dolor sit amet consectetur adipis",
      link: "about.html",
    },
  ];

  featuresData.forEach((featureData) => {
    const colDiv = document.createElement("div");
    colDiv.classList.add(
      "col-lg-3",
      "col-sm-6",
      "feature-1",
      "mt-lg-0",
      "mt-5"
    );

    const featureBodyDiv = document.createElement("div");
    featureBodyDiv.classList.add("feature-body");

    const featureImagesDiv = document.createElement("div");
    featureImagesDiv.classList.add("feature-images", "pb-sm-3", "pb-1");

    const featureIconImg = document.createElement("img");
    featureIconImg.src = featureData.iconSrc;
    featureIconImg.alt = "";
    featureIconImg.classList.add("img-fluid");

    const featureInfoDiv = document.createElement("div");
    featureInfoDiv.classList.add("feature-info", "mt-3");

    const featureTitleLink = document.createElement("a");
    featureTitleLink.href = featureData.link;

    const featureTitleH3 = document.createElement("h3");
    featureTitleH3.classList.add("feature-titel");
    featureTitleH3.textContent = featureData.title;

    const featureTextP = document.createElement("p");
    featureTextP.classList.add("feature-text");
    featureTextP.textContent = featureData.text;

    const moreInfoLink = document.createElement("a");
    moreInfoLink.href = featureData.link;
    moreInfoLink.classList.add("btn", "btn-style", "btn-style-normal", "mt-4");
    moreInfoLink.textContent = "More Info";

    section.appendChild(containerDiv);
    containerDiv.appendChild(rowDiv);
    rowDiv.appendChild(colDiv);
    colDiv.appendChild(featureBodyDiv);
    featureBodyDiv.appendChild(featureImagesDiv);
    featureImagesDiv.appendChild(featureIconImg);
    featureBodyDiv.appendChild(featureInfoDiv);
    featureInfoDiv.appendChild(featureTitleLink);
    featureTitleLink.appendChild(featureTitleH3);
    featureInfoDiv.appendChild(featureTextP);
    featureInfoDiv.appendChild(moreInfoLink);
  });

  return section;
}
