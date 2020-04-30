import React, { useState, useEffect } from 'react';

const MousePosition = () => {
  const [mousePosition, setMousePosition] = useState(null);

  const logMousePosition = e => {
    console.log('Screen Y', e.clientX);
    console.log('Screen X', e.clientY);
  }

  useEffect(() => {
    console.log('use effect called');

    window.addEventListener('mouseover', logMousePosition)

  });

  return (
    <div>
      <p>Yeahhhh.......</p>
    </div>
  );
};

export default MousePosition;