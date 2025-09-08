// import './App.css';

import { PageWelcome } from './components/PageWelcome';
import { PageUseToggle } from './components/PageUseToggle';
import { PageUseFetch } from './components/PageUseFetch';
import { NavLink, Routes, Route, Navigation, Navigate } from 'react-router-dom';
import { PageStarter } from './components/PageStarter';

function App() {
  return (
    <div className="App">
      <h1>Custom-Hooks-React-Vite-Typescript</h1>

      <nav>
        <NavLink to="/welcome">Welcome</NavLink>
        <NavLink to="/useToggle">useToggle</NavLink>
        <NavLink to="/useFetch">useFetch</NavLink>

        {/* do the same like Navigate - we don't need it even here too!*/}
        {/* <NavLink to="/"></NavLink> */}
      </nav>

      <Routes>
        <Route
          path="/welcome"
          element={<PageWelcome PageWelcome={'hallo - PW'} />}
        />

        {/* do the dasme like Navigate */}
        <Route path="/" element={<PageStarter />} />

        <Route
          path="/useToggle"
          element={<PageUseToggle PageUseToggle={'hallo - UT'} />}
        />

        <Route
          path="/useFetch"
          element={<PageUseFetch PageUseFetch={'hallo - UF'} />}
        />

        {/* The equivalent Code is above */}
        {/* <Route path="/" element={<Navigate to="/welcome" replace />} /> */}
      </Routes>
    </div>
  );
}

export default App;
