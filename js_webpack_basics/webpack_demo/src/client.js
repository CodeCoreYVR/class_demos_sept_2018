import React from "react";
import ReactDOM from "react-dom";

import mainCss from "./styles/main.css";
import moosePic from "./images/moose.jpg";

document.addEventListener("DOMContentLoaded", () => {
  // const mooseImg = document.createElement("img");
  // mooseImg.src = moosePic;

  // const h1 = document.createElement("h1");
  // h1.innerText = "Webpack Demo";

  const MainPage = props => {
    return (
      <main style={{ padding: "20px" }}>
        <h1>Welcome to The Webpack Demo</h1>
        <img src={moosePic} width="300px" />
      </main>
    );
  };

  ReactDOM.render(
    <MainPage />,
    document.body.appendChild(document.createElement("div"))
  );
  // document.body.append(mooseImg);
  // document.body.prepend(h1);
});
