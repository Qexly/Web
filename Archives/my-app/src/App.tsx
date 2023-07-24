import React from 'react';
import Main from 'Pages/Main';
import Shoes from 'Pages/Shoes';
import Clothing from 'Pages/Clothing';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/shoes" element={<Shoes />} />
        <Route path="/clothing" element={<Clothing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
