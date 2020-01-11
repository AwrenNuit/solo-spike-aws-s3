import React from 'react';
import './App.css';
import ImageUpload from './ImageUpload';
import ImageRender from './ImageRender';

function App() {
  return (
    <div className="App">
      <ImageRender />
      <ImageUpload />
    </div>
  );
}

export default App;
