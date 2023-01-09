import { Route, Routes } from 'react-router-dom';
import { Navbar } from './components';
import { Suspense, lazy, useState } from 'react';

const Characters = lazy(() => import('./pages/Characters'));
const Episodes = lazy(() => import('./pages/Episodes'));
const Locations = lazy(() => import('./pages/Locations'));

import { Character, LoginForm } from './pages';
import Error404 from './pages/Error404';

const initialTheme = 'light';

function App() {
  const [theme, setTheme] = useState(initialTheme);

  const handleTheme = (e: any) => {
    if (e.target.value === 'light') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar theme={theme} handleTheme={handleTheme} />
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
