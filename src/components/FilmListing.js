import React, { Component } from 'react';

class FilmListing extends Component {
  render() {
    return (
				 <div className="film-list">
					 <h1 className="section-title">FILMS</h1>
					 <h2>{this.props.films[1].title}</h2>
				 </div>
    );
  }
}

export default FilmListing;
