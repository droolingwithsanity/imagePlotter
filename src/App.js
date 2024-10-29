// src/App.js
import React, { useState } from 'react';
import ImageUploader from './components/ImageUploader';
import ImagePlotter from './components/ImagePlotter';
import './App.css';
import { useAuth0 } from '@auth0/auth0-react';
import ProtectedRoute from './ProtectedRoute';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { MainApp } from './App';
import ProtectedComponent from './ProtectedComponent';
// Use ProtectedRoute instead of Route for protected pages

function App ()  {
	const [image, setImage] = useState(null);
  const [points, setPoints] = useState([]);
  const handleImageUpload = (img) => {
    setImage(img);
    setPoints([]); // Clear points on new image upload
  };

  const handlePointAdd = (point) => {
    setPoints((prevPoints) => [...prevPoints, point]);
  };
 return (
        <div>
            <ProtectedRoute path="protected" component={ProtectedComponent} />
        </div>
    );
  return (
    <div className="App">
      <header>
        <h1>React Image Plotter</h1>
      </header>
      <main>
        {!image ? (
          <ImageUploader onImageUpload={handleImageUpload} />
        ) : (
          <ImagePlotter imageSrc={image} points={points} onAddPoint={handlePointAdd} />
        )}
      </main>
      <footer>
        <p>Built with React</p>
      </footer>
    </div>
  );

function MainApp() {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
       	<MainApp /> // Use the correct component here
  return (
    <div className="MainApp">
      <h1>React SSO App</h1>
      {isAuthenticated ? (
        <div>
          <p>Welcome, {user.name}!</p>
          <button onClick={() => logout({ returnTo: window.location.origin })}>Log Out</button>
	 </div>
      ) : (
        <button onClick={() => loginWithRedirect()}>Log In with SSO</button>
	           )}
	</div>  
  );
}
}
//export default App;
export { MainApp, App };
