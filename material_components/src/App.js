import './App.css';
import React from 'react';
import NavBar from './Components/NavBar';

const Footer = React.lazy(
  () => import('css_components/Footer')
);

function App() {
  return (
    <>
      <div className="App">
        <NavBar />
      </div>
      <React.Suspense fallback='Loading Footer'>
        <Footer />
      </React.Suspense>
    </>
  );
}

export default App;
