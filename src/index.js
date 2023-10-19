import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './pages/app';
import Login from './pages/login';
import Editor from './pages/editor';
import MyViewer from './pages/viewer';
import { Auth0Provider, useAuth0 } from '@auth0/auth0-react';
import LoginButton from "./components/Login";
import LogoutButton from "./components/Logout";
import Profile from "./components/Profile";

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/app/home" element={<App />} />
        <Route exact path="/app/editor" element={<Editor />} />
        <Route exact path="/app/viewer" element={<MyViewer />} />
        <Route exact path="/app/login" element={<LoginButton />} />
        <Route exact path="/app/logout" element={<LogoutButton />} />
        <Route exact path="/app/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain="dev-qo6rnjmfafd2euvt.us.auth0.com"
    clientId="6HEb6f6pEyiKsolY2B169jLKHSuHUnZ4"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <Main />
  </Auth0Provider>,
);