import { createComponents } from "./components/createComponents";
import "./style.css";
import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/regular";
import "@fortawesome/fontawesome-free/js/brands";
const rootElement = document.getElementById("root");
rootElement.appendChild(createComponents());
