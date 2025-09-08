// import './App.css';

import { PageWelcome } from './components/PageWelcome';
import { PageUseToggle } from './components/PageUseToggle';
import { PageUseFetch } from './components/PageUseFetch';
import { NavLink, Routes, Route, Navigation } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>Custom-Hooks-React-Vite-Typescript</h1>

      <nav>
        <NavLink to="/welcome">Welcome</NavLink>
        <NavLink to="/useToggle">useToggle</NavLink>
        <NavLink to="/useFetch">useFetch</NavLink>
      </nav>

      <Routes>
        <Route
          path="/welcome"
          element={<PageWelcome PageWelcome={'hallo - PW'} />}
        />
        <Route
          path="/useToggle"
          element={<PageUseToggle PageUseToggle={'hallo - UT'} />}
        />
        <Route
          path="/useFetch"
          element={<PageUseFetch PageUseFetch={'hallo - UF'} />}
        />
      </Routes>
    </div>
  );
}

export default App;
