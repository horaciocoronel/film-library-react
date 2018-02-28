import React, { Component } from 'react';
import FilmRow from './FilmRow';
class FilmListing extends Component {
	constructor() {
		super();
		this.handleFilterClick = this.handleFilterClick.bind(this);
		this.state = {
			filter: 'all'
		}
	}

	handleFilterClick = (event, filter) => { this.setState({ filter: filter }); };
  render() {
		let films = this.props.films;
		if(this.state.filter === 'faves') {
			films = this.props.faves
		}
    return (
				 <div className="film-list">
					 <h1 className="section-title">FILMS</h1>
					 <div className="film-list-filters">
					    <div className={`film-list-filter ${(this.state.filter === 'all') ? 'is-active' : ''}`} onClick={(e) => this.handleFilterClick(e, 'all')}>
					      ALL
					      <span className="section-count">{this.props.films.length}</span>
					    </div>
					    <div className={`film-list-filter ${(this.state.filter === 'faves') ? 'is-active' : ''}`}
									 onClick={(e) => this.handleFilterClick(e, 'faves')}>
					      FAVES
					      <span className="section-count">{this.props.faves.length}</span>
					    </div>
					  </div>
					 {films.map(movie =>
						 <FilmRow
							movie={movie}
							key={movie.id}
						 	onFaveToggle={() => this.props.onFaveToggle(movie)}
							isFave={this.props.faves.includes(movie)}
							film={() => this.props.film(movie)}
						/>
				 )}
				 </div>
    );
  }
}

export default FilmListing;
