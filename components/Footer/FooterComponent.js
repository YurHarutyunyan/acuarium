export function FooterComponent() {
  const section = document.createElement("section");
  section.classList.add("footer-17");

  const footerSub = document.createElement("div");
  footerSub.classList.add("footer17-sub", "pt-5");

  const container = document.createElement("div");
  container.classList.add("container", "py-md-5", "py-4");

  const textCenter = document.createElement("div");
  textCenter.classList.add("text-center", "mb-4");

  const footerLogo = document.createElement("a");
  footerLogo.classList.add("footer-logo");
  footerLogo.href = "index.html";
  footerLogo.textContent = "Aquarium";

  const form = document.createElement("form");
  form.action = "#url";
  form.method = "GET";
  form.classList.add("rightside-form", "m-auto");
  form.style.maxWidth = "500px";

  const emailInput = document.createElement("input");
  emailInput.type = "email";
  emailInput.classList.add("form-control");
  emailInput.name = "email";
  emailInput.placeholder = "Enter your email";

  const submitButton = document.createElement("button");
  submitButton.classList.add("btn");
  submitButton.type = "submit";
  submitButton.textContent = "Subscribe";

  const row = document.createElement("div");
  row.classList.add("row", "footer17-top", "mt-5", "pt-md-5", "pt-sm-4");

  function createColumn(title, links) {
    const column = document.createElement("div");
    column.classList.add("col-md-3", "col-6");

    const footerTopLeft = document.createElement("div");
    footerTopLeft.classList.add("footer17-top-left");

    const heading = document.createElement("h6");
    heading.textContent = title;

    const linkList = document.createElement("ul");

    links.forEach((linkText) => {
      const listItem = document.createElement("li");
      const link = document.createElement("a");
      link.href = "#url";
      link.textContent = linkText;

      listItem.appendChild(link);
      linkList.appendChild(listItem);
    });

    footerTopLeft.appendChild(heading);
    footerTopLeft.appendChild(linkList);
    column.appendChild(footerTopLeft);

    return column;
  }

  const column1 = createColumn("Customer Care", [
    "Contact Us",
    "How We Work",
    "Aquarium Info",
    "Main Questions",
    "Information",
  ]);
  const column2 = createColumn("Get To Know Us", [
    "Maintenance",
    "Aquarium Design",
    "Cleaning Services",
    "Aquarium Supplies",
    "Health Services",
  ]);
  const column3 = createColumn("Ways To Shop", [
    "Our Store",
    "Shopping Cart",
    "My Account",
    "Our Offers",
    "Sitemap",
  ]);
  const column4 = createColumn("Legal", [
    "Privacy policy",
    "Terms of use",
    "FAQ",
    "Return Policy",
    "Support",
  ]);

  row.appendChild(column1);
  row.appendChild(column2);
  row.appendChild(column3);
  row.appendChild(column4);
  container.appendChild(textCenter);
  textCenter.appendChild(footerLogo);
  container.appendChild(form);
  form.appendChild(emailInput);
  form.appendChild(submitButton);
  container.appendChild(row);
  footerSub.appendChild(container);

  const copyright = document.createElement("div");
  copyright.classList.add("copyright", "text-center");

  const copyrightContainer = document.createElement("div");
  copyrightContainer.classList.add("container");

  const copyrightText = document.createElement("p");
  copyrightText.classList.add("copy-footer-29");

  copyrightContainer.appendChild(copyrightText);
  copyright.appendChild(copyrightContainer);

  section.appendChild(footerSub);
  section.appendChild(copyright);

  return section;
}
