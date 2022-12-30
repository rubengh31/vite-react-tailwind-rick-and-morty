import { Route, Routes } from 'react-router-dom';
import { Navbar } from './components';
import React, { Suspense, lazy } from 'react';

const Characters = lazy(() => import('./pages/Characters'));
const Episodes = lazy(() => import('./pages/Episodes'));
const Locations = lazy(() => import('./pages/Locations'));

import './assets/styles/normalize.css';

function App() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/episodes" element={<Episodes />}></Route>
          <Route path="/characters" element={<Characters />}></Route>
          <Route path="/locations" element={<Locations />}></Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
