import { HeaderComponent } from "./Header/HeaderComponent";
import { FooterComponent } from "./Footer/FooterComponent";
import { SliderComponent } from "./Slider/SliderComponent";
import { SliderBottomComponent } from "./SliderBottom/SliderBottomComponent";
import { FeatureComponent } from "./Feature/FeatureComponent";

export function createComponents() {
  // Create header component
  const header = HeaderComponent();
  const slider = SliderComponent();
  const sliderBottom = SliderBottomComponent();
  const feature = FeatureComponent();
  // Create footer component
  const footer = FooterComponent();

  // Assuming you have a root element with the id "root" in your HTML
  const rootElement = document.getElementById("root");

  // Append header and footer to the root element
  rootElement.appendChild(header);
  rootElement.appendChild(slider);
  rootElement.appendChild(sliderBottom);
  rootElement.appendChild(feature);
  rootElement.appendChild(footer);
}
