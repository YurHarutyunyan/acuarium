export function HeaderComponent() {
  const header = document.createElement("header");
  header.id = "site-header";
  header.classList.add("fixed-top");

  const containerDiv = document.createElement("div");
  containerDiv.classList.add("container-fluid");

  const nav = document.createElement("nav");
  nav.classList.add("navbar", "navbar-expand-lg", "stroke");

  const h1 = document.createElement("h1");

  const a = document.createElement("a");
  a.classList.add("navbar-brand", "d-flex", "align-items-center");
  a.href = "index.html";
  a.textContent = "Aquarium";

  const button = document.createElement("button");
  button.classList.add("navbar-toggler", "collapsed", "bg-gradient");
  button.type = "button";
  button.setAttribute("data-toggle", "collapse");
  button.setAttribute("data-target", "#navbarTogglerDemo02");
  button.setAttribute("aria-controls", "navbarTogglerDemo02");
  button.setAttribute("aria-expanded", "false");
  button.setAttribute("aria-label", "Toggle navigation");

  const span1 = document.createElement("span");
  span1.classList.add("navbar-toggler-icon", "fa", "icon-expand", "fa-bars");

  const span2 = document.createElement("span");
  span2.classList.add("navbar-toggler-icon", "fa", "icon-close", "fa-times");

  const collapseDiv = document.createElement("div");
  collapseDiv.classList.add("collapse", "navbar-collapse");
  collapseDiv.id = "navbarTogglerDemo02";
  const ul = document.createElement("ul");
  ul.classList.add("navbar-nav", "ml-lg-auto");

  const navItems = ["Home", "AboutUs", "Services", "Contact_Us"];

  navItems.forEach((item) => {
    const li = document.createElement("li");
    li.classList.add("nav-item");

    const link = document.createElement("a");
    link.classList.add("nav-link");
    link.href = item.toLowerCase();
    link.textContent = item;

    li.appendChild(link);
    ul.appendChild(li);
  });

  const searchRightDiv = document.createElement("div");
  searchRightDiv.classList.add("search-right", "ml-lg-3");

  const searchForm = document.createElement("form");
  searchForm.action = "#search";
  searchForm.method = "GET";
  searchForm.classList.add("search-box", "position-relative");

  const searchInput = document.createElement("input");
  searchInput.type = "search";
  searchInput.placeholder = "Enter Keyword";
  searchInput.name = "search";
  searchInput.required = "required";
  searchInput.autofocus = "";
  searchInput.classList.add("search-popup");

  const searchButton = document.createElement("button");
  searchButton.type = "submit";
  searchButton.classList.add("btn", "search-btn");

  const searchIcon = document.createElement("i");
  searchIcon.classList.add("fa", "fa-search");

  searchButton.appendChild(searchIcon);

  searchForm.appendChild(searchInput);
  searchForm.appendChild(searchButton);

  searchRightDiv.appendChild(searchForm);

  const themeSwitchDiv = document.createElement("div");
  themeSwitchDiv.classList.add("cont-ser-position");

  const themeSwitchNav = document.createElement("nav");
  themeSwitchNav.classList.add("navigation");

  const themeSwitchWrapper = document.createElement("div");
  themeSwitchWrapper.classList.add("theme-switch-wrapper");

  const themeSwitchLabel = document.createElement("label");
  themeSwitchLabel.classList.add("theme-switch");
  themeSwitchLabel.setAttribute("for", "checkbox");

  const themeSwitchInput = document.createElement("input");
  themeSwitchInput.type = "checkbox";
  themeSwitchInput.id = "checkbox";

  const modeContainer = document.createElement("div");
  modeContainer.classList.add("mode-container");
  modeContainer.addEventListener('click',()=>{
    document.getElementsByClassName("slideshow").style.color=()=>{
      return "#473b43"
    }
  })

  const sunIcon = document.createElement("i");
  sunIcon.classList.add("gg-sun");

  const moonIcon = document.createElement("i");
  moonIcon.classList.add("gg-moon");

  themeSwitchLabel.appendChild(themeSwitchInput);
  themeSwitchLabel.appendChild(modeContainer);
  modeContainer.appendChild(sunIcon);
  modeContainer.appendChild(moonIcon);

  themeSwitchWrapper.appendChild(themeSwitchLabel);
  themeSwitchNav.appendChild(themeSwitchWrapper);
  themeSwitchDiv.appendChild(themeSwitchNav);

  header.appendChild(containerDiv);
  containerDiv.appendChild(nav);
  nav.appendChild(h1);
  h1.appendChild(a);
  h1.appendChild(button);
  button.appendChild(span1);
  button.appendChild(span2);
  nav.appendChild(collapseDiv);
  collapseDiv.appendChild(ul);
  nav.appendChild(searchRightDiv);
  nav.appendChild(themeSwitchDiv);

  return header;
}
