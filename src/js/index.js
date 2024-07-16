import { header } from "./header";
import { accordion } from "./accordion";
import {initializeSlider} from "./slider";

document.addEventListener("DOMContentLoaded", function () {
    header();
    accordion();
    initializeSlider();
});