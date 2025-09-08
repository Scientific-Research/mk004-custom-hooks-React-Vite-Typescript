// import './App.css';

import { PageWelcome } from './components/pageWelcome';
import { PageUseToggle } from './components/PageUseToggle';
import { PageUserFetch } from './components/PageUseFetch';

const name = 'Hallo';

function App() {
  return (
    <div className="App">
      <h1>Custom-Hooks-React-Vite-Typescript</h1>
      <p>Welcome to this site!</p>

      <PageWelcome PageWelcome={name} />
    </div>
  );
}

export default App;
