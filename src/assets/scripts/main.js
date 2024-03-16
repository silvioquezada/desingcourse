import "../../../node_modules/bootstrap/js/dist/toast.js";
import "../../../node_modules/bootstrap/js/dist/modal.js";
import "../../../node_modules/bootstrap/js/dist/popover.js";

import { Menu } from './menu.js';
const menu = new Menu();

document.getElementById("enlace_menu").onclick = muestraMensaje;

function muestraMensaje() {
    menu.clickMenu();
  }