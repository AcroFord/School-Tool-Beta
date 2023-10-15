import React from 'react';
import ReactDOM from 'react-dom/client';
import "./bootstrap.min.css"
import "./global.css"

function Greeting() {
  var testVariable = "Hello World!";
  console.log(testVariable);
  console.log("If you see this, your React app is live!");
  return (
    <nav class="navbar fixed-top nav">
      <a class="navbar-brand brand d-flex align-items-center" href="#">
        <img className="icon" src='https://schooltool.io/assets/img/logo.webp?h=0722d3247654ad6b5121ce1ebd28d5fc'></img>
        <b>School Tool</b>
      </a>
    </nav>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Greeting />
);