import React from 'react';
import ReactDOM from 'react-dom/client';
import "./bootstrap.min.css"
import "./global.css"

function Greeting() {
  var testVariable = "Hello World!";
  console.log(testVariable);
  console.log("If you see this, your React app is live!");
  return (
    <div className='text-center container life'>
      <img className="logo" src="https://schooltool.io/assets/img/logo.webp?h=0722d3247654ad6b5121ce1ebd28d5fc" alt="Logo" />
      <h1 className='heading'>If you see this, School Tool is live!</h1>
      <div className='box text-center'>
        <h2 className="jumbotron text-center">Heading Test</h2>
        <h6 className="code text-center">{testVariable}</h6>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Greeting />
);