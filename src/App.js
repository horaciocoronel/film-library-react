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
		// binding functions
		// this.handleFaveToggle = this.handleFaveToggle.bind(this);
		this.currentMovie = this.currentMovie.bind(this);
	}
	handleFaveToggle = (film) => {
		const faves = this.state.faves.slice();
		const filmIndex = faves.indexOf(film);
		if(filmIndex === -1) {
			faves.push(film);
			console.log(`Adding ${film.title} to faves...`);
			this.setState({faves});
		} else {
			faves.splice(filmIndex, 1);
			this.setState({faves});
			console.log(`Removing ${film.title} from faves...`);
		}
	}
	currentMovie = (film) => {
		// const currentFilm = this.state.current;
		const url = `https://api.themoviedb.org/3/movie/${film.id}?api_key=${TMDB.api_key}&append_to_response=videos,images&language=en`
		fetch(url).then(response => {
		  response.json().then(data => {
				this.setState({current: data})
		    console.log(data) // take a look at what we get back!
		  })
		})

		// this.setState({current: film});

		console.log(this.state.current);
		console.log('TEST');
	}

	handleDetailsClick = (e, film) => {
		this.currentMovie(film);
		console.log('AASFAFS SAFFS SAF')
		// const url = `https://api.themoviedb.org/3/movie/${film.id}?api_key=${TMDB.api_key}&append_to_response=videos,images&language=en`
		// fetch(url).then(response => {
		//   response.json().then(data => {
		//     // console.log(data) // take a look at what we get back!
		// 		// this.setState({current: data});
		// 		return data;
		//   })
		// })

	}

  render() {
    return (
			<div className="film-library">
				<FilmListing
					films={this.state.films}
					faves={this.state.faves}
					onFaveToggle={this.handleFaveToggle}
					currentMovie={this.currentMovie}
					handleDetailsClick={this.handleDetailsClick}
				 />
				<FilmDetails
					films={TMDB.films}
					currentMovie={this.state.current}
				 />
			 </div>
    );
  }
}

export default App;
