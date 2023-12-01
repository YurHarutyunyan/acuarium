function createInnerBanner() {
  const innerBannerDiv = document.createElement("div");
  innerBannerDiv.className = "inner-banner";

  const breadcrumbDiv = document.createElement("div");
  breadcrumbDiv.className = "breadcrumb";
  innerBannerDiv.appendChild(breadcrumbDiv);

  const containerDiv = document.createElement("div");
  containerDiv.className = "container";
  breadcrumbDiv.appendChild(containerDiv);

  const h4Element = document.createElement("h4");
  h4Element.className = "inner-text-title";
  h4Element.textContent = "Services";
  containerDiv.appendChild(h4Element);

  const ulElement = document.createElement("ul");
  ulElement.className = "custom-path";
  containerDiv.appendChild(ulElement);

  const homeLiElement = document.createElement("li");
  const homeAnchor = document.createElement("a");
  homeAnchor.href = "#"; //poxel----------------------------
  homeAnchor.textContent = "Home";
  ulElement.appendChild(homeLiElement);
  homeLiElement.appendChild(homeAnchor);

  const servicesLiElement = document.createElement("li");
  servicesLiElement.className = "active";
  const spanElement = document.createElement("span");
  spanElement.className = "span";
  const servicesText = document.createElement("span");
  servicesText.textContent = "Services";
  servicesLiElement.appendChild(spanElement);
  servicesLiElement.appendChild(servicesText);
  ulElement.appendChild(homeLiElement);
  ulElement.appendChild(servicesLiElement);

  document.body.appendChild(innerBannerDiv);
}
createInnerBanner();

function createServiceSection() {
  const section = document.createElement("section");
  section.className = "services";

  const containerSection = document.createElement("div");
  containerSection.className = "containerSection";
  section.appendChild(containerSection);

  const titleMain = document.createElement("div");
  titleMain.className = "title-main";
  containerSection.appendChild(titleMain);

  const heading = document.createElement("h3");
  heading.className = "title-style";
  heading.textContent = "Our Services";
  titleMain.appendChild(heading);

  const subTitle = document.createElement("div");
  subTitle.classList = "sub-title";
  subTitle.textContent =
    "Cum doctus civibus efficiantur in imperdiet deterruisset. Cras efficitur, metus gravida suscipit cursus, dui diam pre lorem id lectus.";
  titleMain.appendChild(subTitle);

  const row = document.createElement("div");
  row.className = "row-text-center";
  containerSection.appendChild(row);

  function createServiceBox(serviceName, serviceDescription, imageUrl, index) {
    const col = document.createElement("div");
    col.className = "col";

    const areaBox = document.createElement("div");
    areaBox.className = "area-box service-box";

    areaBox.style.backgroundColor = "#fbfbfb";
    areaBox.style.color = "#000000";

    const imageElement = document.createElement("img");
    imageElement.src = imageUrl;
    imageElement.alt = serviceName;
    imageElement.className = `service-image service-image-${index}`;

    areaBox.appendChild(imageElement);

    const serviceHeading = document.createElement("h4");
    const serviceLink = document.createElement("a");
    serviceLink.href = "#feature";
    serviceLink.className = "title-head";
    serviceLink.textContent = serviceName;
    serviceHeading.appendChild(serviceLink);

    areaBox.addEventListener("mouseover", function () {
      areaBox.style.backgroundColor = "#FFA500";
      areaBox.style.color = "#ffffff";
      serviceLink.style.color = "#ffffff";
    });

    areaBox.addEventListener("mouseout", function () {
      areaBox.style.backgroundColor = "#fbfbfb";
      areaBox.style.color = "#000000";
      serviceLink.style.color = "#000000";
    });

    const serviceDescriptionPara = document.createElement("p");
    serviceDescriptionPara.className = "mt-3";
    serviceDescriptionPara.textContent = serviceDescription;

    areaBox.appendChild(serviceHeading);
    areaBox.appendChild(serviceDescriptionPara);

    col.appendChild(areaBox);

    return col;
  }

  const serviceBox1 = createServiceBox(
    "Cleaning Services",
    "Ligula quam tesque et libero ut justo, ultrices in. Ut eu leo non. Duis sed et dolor amet.",
    "img/s1.jpg"
  );
  const serviceBox2 = createServiceBox(
    "Maintenance",
    "Ligula quam tesque et libero ut justo, ultrices in. Ut eu leo non. Duis sed et dolor amet.",
    "img/s2.jpg"
  );
  const serviceBox3 = createServiceBox(
    "Aquarium Design",
    "Ligula quam tesque et libero ut justo, ultrices in. Ut eu leo non. Duis sed et dolor amet.",
    "img/s3.jpg"
  );
  const serviceBox4 = createServiceBox(
    "Aquarium Supply",
    "Ligula quam tesque et libero ut justo, ultrices in. Ut eu leo non. Duis sed et dolor amet.",
    "img/s4.jpg"
  );
  const serviceBox5 = createServiceBox(
    "Health Services",
    "Ligula quam tesque et libero ut justo, ultrices in. Ut eu leo non. Duis sed et dolor amet.",
    "img/s5.jpg"
  );
  const serviceBox6 = createServiceBox(
    "Consultation",
    "Ligula quam tesque et libero ut justo, ultrices in. Ut eu leo non. Duis sed et dolor amet.",
    "img/s6.jpg"
  );

  row.appendChild(serviceBox1);
  row.appendChild(serviceBox2);
  row.appendChild(serviceBox3);
  row.appendChild(serviceBox4);
  row.appendChild(serviceBox5);
  row.appendChild(serviceBox6);

  document.body.appendChild(section);
}

createServiceSection();
