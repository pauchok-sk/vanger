import "../scss/style.scss";
import { backgroundParallax } from "./files/animate.js";
import scrollables from "./files/scrollables.js";
import spoller from "./files/spoller.js";

AOS.init();

spoller();
backgroundParallax();
scrollables();
