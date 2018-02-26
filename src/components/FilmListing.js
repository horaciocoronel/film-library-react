import React, { Component } from 'react';
import FilmRow from './FilmRow';
class FilmListing extends Component {
	constructor() {
		super();
		this.handleFilterClick = this.handleFilterClick.bind(this);
	}

	handleFilterClick = (event, filter) => { console.log(`Setting filter to ${filter}`)};
  render() {
    return (
				 <div className="film-list">
					 <h1 className="section-title">FILMS</h1>
					 <div className="film-list-filters">
					    <div className="film-list-filter" onClick={(e) => this.handleFilterClick(e, 'all')}>
					      ALL
					      <span className="section-count">{this.props.films.length}</span>
					    </div>
					    <div className="film-list-filter"
									 onClick={(e) => this.handleFilterClick(e, 'faves')}>
					      FAVES
					      <span className="section-count">0</span>
					    </div>
					  </div>
					 {this.props.films.map(movie =>  <FilmRow movie={movie} key={movie.id} />
				 )}
				 </div>
    );
  }
}

export default FilmListing;
