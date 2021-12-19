import React from 'react';
import './App.css';
import Main from './view/Main';
import { Router } from '@reach/router';
import MovieDetails from './components/MovieDetails';

function App() {
  return (
    <div>
      <Router>
        <Main path={'/main'} />
        <MovieDetails path={'/:id'} />
      </Router>
    </div>
  );
}

export default App;
