import React from 'react';

import './assets/styles/global.css';
import Landing from './pages/landing';
import Routes from './routes';

//JSX(HTML dentro do JavaScript) = JavaScript + XML(linguagem do html)
//isto é um componente do React, server para ser usado para definir algo que vai se repetir várias vezes
function App() {
  return (
    <Routes />
  );
}

export default App;
