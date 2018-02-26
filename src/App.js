import React, { Component } from 'react';
import FilmListing from './components/FilmListing.js';
import FilmDetails from './components/FilmDetails.js';
import logo from './logo.svg';
import './App.css';
import TMDB from './TMDB.js'

class App extends Component {
  render() {
    return (
			<div className="film-library">
				 <FilmDetails films={TMDB.films} />
				 <FilmListing films={TMDB.films} />
			 </div>
    );
  }
}

export default App;
