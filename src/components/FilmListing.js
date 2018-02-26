import React, { Component } from 'react';
import FilmRow from './FilmRow';
class FilmListing extends Component {

  render() {
    return (
				 <div className="film-list">
					 <h1 className="section-title">FILMS</h1>
					 {this.props.films.map(movie =>  <FilmRow movie={movie} />
				 )}
				 </div>
    );
  }
}

export default FilmListing;
