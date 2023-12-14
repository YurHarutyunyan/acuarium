import {runNemo} from "./move"
export function Aquarium(){
    console.log("aquarium")
    const aquarium = document.createElement("div")
    aquarium.classList.add("aquarium")
    const fishPart = document.createElement("div")
    const seaweed = document.createElement('img')
    seaweed.classList.add('seaweed')
    seaweed.src = "../static/images/seaweedWithoutbackground.png"

    fishPart.classList.add('nemo-container')
    const fishImage = document.createElement('img')
    fishImage.id="nemo"
    fishImage.src = "../static/images/fish.png";
    fishImage.addEventListener('click',()=>{runNemo()})
    aquarium.append(fishPart);
    aquarium.appendChild(seaweed);
    fishPart.appendChild(fishImage);
    return aquarium;
}