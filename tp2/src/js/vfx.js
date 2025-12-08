import { VFX } from "https://esm.sh/@vfx-js/core";

const vfx = new VFX();

const dateDisplay = document.querySelector("#date-display");
vfx.add(dateDisplay, {
  shader: "pixelateTransition",
  overflow: 1
});

const userDisplay = document.querySelector("#user-display");
vfx.add(userDisplay, {
  shader: "pixelateTransition",
  overflow: 1
});

const nameDisplay = document.querySelector("#name-display");
vfx.add(nameDisplay, {
  shader: "pixelateTransition",
  overflow: 1
});