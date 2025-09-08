// import './App.css';

import { PageWelcome } from './components/PageWelcome';
import { PageUseToggle } from './components/PageUseToggle';
import { PageUserFetch } from './components/PageUseFetch';
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

      <Routes></Routes>

      <PageWelcome PageWelcome={'hallo - PW'} />
      <PageUseToggle PageUseToggle={'hallo - UT'} />
      <PageUserFetch PageUserFetch={'hallo - UF'} />
    </div>
  );
}

export default App;
