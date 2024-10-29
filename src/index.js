// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client'; // Use 'react-dom/client' for React 18
import { Auth0Provider } from '@auth0/auth0-react'; // Don't forget to import Auth0Provider
import './index.css';
//import { MainApp } from './App';
// Create a root for React 18
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
	<Auth0Provider
      domain="dev-yahpx8kor48164yi.us.auth0.com" // Your Auth0 domain
      clientId="HqtXKOKXRVT1az72BFlfMq95z6l4XmLT" // Your Auth0 client ID
      redirectUri={window.location.origin} // This should work for local development
    >
    </Auth0Provider>
  </React.StrictMode>
);

