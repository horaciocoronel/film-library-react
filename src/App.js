import React, { Component } from 'react';
import FilmListing from './components/FilmListing.js';
import FilmDetails from './components/FilmDetails.js';
import logo from './logo.svg';
import './App.css';
import TMDB from './TMDB';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			films: TMDB.films,
			faves: [],
			current: null
		}
	}
  render() {
    return (
			<div className="film-library">
				<FilmListing
					films={this.state.films}
					faves={this.state.faves}
				 />
				<FilmDetails
					films={TMDB.films}
					film={this.state.current}
				 />
			 </div>
    );
  }
}

export default App;
