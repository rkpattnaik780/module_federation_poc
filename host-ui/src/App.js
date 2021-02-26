import './App.css';
import React, { useEffect } from 'react';

const NavBar = React.lazy(
  () => import('material_components/NavBar')
);

const add = React.lazy(
  () => import('utils')
)

function App() {

  useEffect(() => {
    console.log(add);
  }, [])
  return (
    <div className="App">
      <React.Suspense fallback='Loading Button'>
        <NavBar add={add} />
      </React.Suspense>
      {/* <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
