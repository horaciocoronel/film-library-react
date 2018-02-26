import React, { Component } from 'react';

class FilmListing extends Component {

	renderMovie(movie) {
		const release_date = new Date(movie.release_date)
		const posterUrl = `https://image.tmdb.org/t/p/w780/${movie.poster_path}`;
		return (
			<div className="film-row" key={movie.id}>
			 <figure className="film-poster">
				 <img src={posterUrl} alt={movie.title} />
			 </figure>

			 <div className="film-summary">
				 <h1>{movie.title}</h1>
				 <p>{release_date.getFullYear()}</p>
			 </div>
		 </div>
	 	)
	}

  render() {
    return (
				 <div className="film-list">
					 <h1 className="section-title">FILMS</h1>
					 {this.props.films.map(movie =>  this.renderMovie(movie)
				 )}
				 </div>
    );
  }
}

export default FilmListing;
