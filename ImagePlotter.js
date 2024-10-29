// src/components/ImagePlotter.js
import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const ImagePlotter = ({ imageSrc, points, onAddPoint }) => {
  const handleImageClick = (event) => {
    const rect = event.target.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    onAddPoint({ id: uuidv4(), x, y });
  };

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <img
        src={imageSrc}
        alt="Plot area"
        onClick={handleImageClick}
        style={{ width: '100%', cursor: 'crosshair' }}
      />
      {points.map((point) => (
        <div
          key={point.id}
          style={{
            position: 'absolute',
            top: point.y,
            left: point.x,
            width: '10px',
            height: '10px',
            borderRadius: '50%',
            backgroundColor: 'red',
            transform: 'translate(-50%, -50%)',
          }}
        />
      ))}
    </div>
  );
};

export default ImagePlotter;

