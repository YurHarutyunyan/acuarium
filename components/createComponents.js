import { HeaderComponent } from "./Header/HeaderComponent";
import { FooterComponent } from "./Footer/FooterComponent";
import { SliderComponent } from "./Slider/SliderComponent";
import { SliderBottomComponent } from "./SliderBottom/SliderBottomComponent";
import { FeatureComponent } from "./Feature/FeatureComponent";
import {aboutUsComponent} from "./AcuariumAboutUs/AboutUsPart1";
import {Aquarium} from "./Aquarium/AquariumComponent"
import {Test} from "./Test"
export function createComponents() {
  // Create header component
  const header = HeaderComponent();
   const slider = SliderComponent();
   const sliderBottom = SliderBottomComponent();
   const feature = FeatureComponent();
  // // Create footer component
   const footer = FooterComponent();
  // Assuming you have a root element with the id "root" in your HTML
  const aboutUs = aboutUsComponent();
  const aquarium = Aquarium();
  const rootElement = document.getElementById("root");

  // Append header and footer to the root element
  rootElement.appendChild(aquarium);
  rootElement.appendChild(header);
  rootElement.appendChild(slider);
  rootElement.appendChild(aboutUs)
  rootElement.appendChild(sliderBottom);
  rootElement.appendChild(feature);
  rootElement.appendChild(footer);
}
