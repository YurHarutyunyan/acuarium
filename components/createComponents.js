import { HeaderComponent } from "./Header/HeaderComponent";
import { FooterComponent } from "./Footer/FooterComponent";

export function createComponents() {
  // Create header component
  const header = HeaderComponent();

  // Create footer component
  const footer = FooterComponent();

  // Assuming you have a root element with the id "root" in your HTML
  const rootElement = document.getElementById("root");

  // Append header and footer to the root element
  rootElement.appendChild(header);
  rootElement.appendChild(footer);
}
