import "./a";
console.log("This is the client");

import moosePic from "./images/moose.jpg";

console.log(moosePic);

document.addEventListener("DOMContentLoaded", () => {
  const mooseImg = document.createElement("img");
  mooseImg.src = moosePic;

  document.body.append(mooseImg);
});
