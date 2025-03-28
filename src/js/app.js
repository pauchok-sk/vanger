import "../scss/style.scss";
import { backgroundParallax } from "./files/animate.js";
import burger from "./files/burger.js";
import mediaAdaptive from "./files/mediaAdaptive.js";
import messageForm from "./files/messageForm.js";
import scrollables from "./files/scrollables.js";
import select from "./files/select.js";
import servicesItemShadow from "./files/servicesItemShadow.js";
import sliders from "./files/sliders.js";
import spoller from "./files/spoller.js";

AOS.init();

spoller();
backgroundParallax();
scrollables();
select();
mediaAdaptive();
sliders();
burger();
messageForm();
servicesItemShadow();
