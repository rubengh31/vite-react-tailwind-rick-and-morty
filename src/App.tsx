import { Route, Routes } from 'react-router-dom';
import { Navbar } from './components';
import { Suspense, lazy } from 'react';

const Characters = lazy(() => import('./pages/Characters'));
const Episodes = lazy(() => import('./pages/Episodes'));
const Locations = lazy(() => import('./pages/Locations'));

import './assets/styles/normalize.css';
import { Character, LoginForm } from './pages';
import Error404 from './pages/Error404';

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
        <Routes>
          <Route path="/" element={<LoginForm />}></Route>
          <Route path="/episodes" element={<Episodes />}></Route>
          <Route path="/characters/:id" element={<Character />}></Route>
          <Route path="/characters" element={<Characters />}></Route>
          <Route path="/locations" element={<Locations />}></Route>
          <Route path="*" element={<Error404 />}></Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
