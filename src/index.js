import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './bootstrap.min.css';
import './global.css';
import axios from 'axios';
import Nav from './components/Nav';
import TextPanel from './components/Panels';
import Widgets from "./components/Widgets"

function Main() {
  return (
    <div>
      <Nav />
      <div className="container">
        <Widgets />
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Main />
);
