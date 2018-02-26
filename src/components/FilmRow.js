import React, { Component } from 'react';
import Fave from './Fave';

class FilmRow extends Component {
  render() {
			const release_date = new Date(this.props.movie.release_date)
			const posterUrl = `https://image.tmdb.org/t/p/w780/${this.props.movie.poster_path}`;
			return (
				<div className="film-row">
				 <figure className="film-poster">
					 <img src={posterUrl} alt={this.props.movie.title} />
				 </figure>

				 <div className="film-summary">
					 <h1>{this.props.movie.title}</h1>
					 <p>{release_date.getFullYear()}</p>
				 </div>
				 <Fave />
			 </div>
		 	)
  }
}

export default FilmRow;
