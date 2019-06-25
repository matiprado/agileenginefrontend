import React from 'react';
import './App.css';

import ListTransaction from './components/ListTransaction';
import Container from "@material-ui/core/Container";

function App() {
  return (
    <div className="App">
        <Container maxWidth="sm">
      <ListTransaction />
        </Container>
    </div>
  );
}

export default App;
