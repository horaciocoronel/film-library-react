import React, { Component } from 'react';

class FilmDetails extends Component {

	renderMovieDetails = (currentFilm) => {
		if(currentFilm !== null) {
			const props = this.props;
			const backdropUrl = `https://image.tmdb.org/t/p/w1280/${props.currentMovie.backdrop_path}`;
			const posterUrl = `https://image.tmdb.org/t/p/w780/${props.currentMovie.poster_path}`;
			let details =(
				<div className="film-detail is-hydrated">
				  <figure className="film-backdrop">
				    <img src={backdropUrl} alt="" />
				    <h1 className="film-title">{props.currentMovie.title}</h1>
				  </figure>

				  <div className="film-meta">
				    <h2 className="film-tagline">{props.currentMovie.tagline}</h2>
				    <p className="film-detail-overview">
				      <img src={posterUrl} className="film-detail-poster" alt={props.currentMovie.title} />
				      {props.currentMovie.overview}
				    </p>
				  </div>
				</div>)
				return details;
		} else {
			return (
							<div className="film-detail">
							  <p>
							    <i className="material-icons">subscriptions</i>
							    <span>No film selected</span>
							  </p>
							</div>
		)}
	}

  render() {

    return (
			<div className="film-details">
				<h1 className="section-title">DETAILS</h1>
				{this.renderMovieDetails(this.props.currentMovie)}
			</div>
    );
  }
}

export default FilmDetails;
