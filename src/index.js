import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './pages/app';

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/app/home" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Main />
);