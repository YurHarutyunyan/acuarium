import {createElement} from "./aboutUsCreateElement"
import {createId} from "./aboutUsCreateId"
import { createInnerHtml } from "./aboutUsCreateInnerHtml";
export function memberCard(parent,name,containerId,className, imageUrl, gitUrl){
     
    const container = createElement("div");
    createId(container, containerId);
    container.className = "memberCard-container";
    parent.append(container)

    if (imageUrl) {
        const imageElement = createElement("img");
        createId(imageElement, containerId + "_Image");
        imageElement.src = imageUrl;
        console.log(imageElement.src)

        container.append(imageElement);
        imageElement.className = "imageCardFormat"
      }

      if (name) {
        const nameElement = createElement("div");
        createId(nameElement, containerId + "_Name");
        createInnerHtml(nameElement, `<h4>${name}</h4>`);
        container.append(nameElement);
      }


     if (gitUrl) {
      const gitElement = createElement("a");
      createId(gitElement, containerId + "_gitLink");
      gitElement.className = "link";
      gitElement.innerHTML = "<h6>GitHub</h6>";
      gitElement.href = gitUrl;
      container.append(gitElement);
     
    }
    
}