// import './App.css';

import { PageWelcome } from './components/pageWelcome';
import { PageUseToggle } from './components/PageUseToggle';
import { PageUserFetch } from './components/PageUseFetch';

function App() {
  return (
    <div className="App">
      <h1>Custom-Hooks-React-Vite-Typescript</h1>
      <p>Welcome to this site!</p>

      <PageWelcome PageWelcome={'hallo - PW'} />
      <PageUseToggle PageUseToggle={'hallo - UT'} />
      <PageUserFetch PageUserFetch={'hallo - UF'} />
    </div>
  );
}

export default App;
