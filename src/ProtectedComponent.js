//src/ProtectedComponent.js
// ProtectedComponent.js
import React from 'react';

const ProtectedComponent = () => {
    return (
        <div>
            <h1>Protected Content</h1>
            <p>This is a protected area. You must be logged in to view this content.</p>
        </div>
    );
};

export default ProtectedComponent;

