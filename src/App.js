import React, { Component } from 'react';
import FilmListing from './components/FilmListing.js';
import FilmDetails from './components/FilmDetails.js';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
			<div className="film-library">
				 <FilmDetails />
				 <FilmListing />
			 </div>
    );
  }
}

export default App;
