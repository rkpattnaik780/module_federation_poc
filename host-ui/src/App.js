import './App.css';
import React from 'react';

const NavBar = React.lazy(
  () => import('material_components/NavBar')
);

const Footer = React.lazy(
  () => import('css_components/Footer')
);

function App() {

  return (
    <div className="App">
      <React.Suspense fallback='Loading Navbar'>
        <NavBar />
      </React.Suspense>
      <h1>This header is from hosted ui - NavBar above comes from the federated UI</h1>
      <React.Suspense fallback='Loading Footer'>
        <Footer />
      </React.Suspense>
    </div>
  );
}

export default App;
