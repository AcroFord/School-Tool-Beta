import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './pages/app';
import Login from './pages/login';
import Editor from './pages/editor';
import MyViewer from './pages/viewer';

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/app/home" element={<App />} />
        <Route exact path="/app/login" element={<Login />} />
        <Route exact path="/app/editor" element={<Editor />} />
        <Route exact path="/app/viewer" element={<MyViewer />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Main />
);