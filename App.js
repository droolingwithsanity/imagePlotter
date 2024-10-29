// src/App.js
import React, { useState } from 'react';
import ImageUploader from './components/ImageUploader';
import ImagePlotter from './components/ImagePlotter';
import './App.css';

function App() {
  const [image, setImage] = useState(null);

  return (
    <div className="App">
      <h1>Image Plotter</h1>
      {!image ? (
        <ImageUploader onImageUpload={setImage} />
      ) : (
        <ImagePlotter imageSrc={image} />
      )}
    </div>
  );
}

export default App;

