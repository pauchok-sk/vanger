import "../scss/style.scss";
import { backgroundParallax } from "./files/animate.js";
import mediaAdaptive from "./files/mediaAdaptive.js";
import scrollables from "./files/scrollables.js";
import select from "./files/select.js";
import spoller from "./files/spoller.js";

AOS.init();

spoller();
backgroundParallax();
scrollables();
select();
mediaAdaptive();