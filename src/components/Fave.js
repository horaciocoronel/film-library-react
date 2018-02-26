import React, { Component } from 'react';

class Fave extends Component {
	constructor() {
		super();

		this.handleClick = this.handleClick.bind(this);

		this.state = {
			films: false
		}
	}

	handleClick = (e) => {
		e.stopPropagation();
		console.log('handling Fave click!')
	};

  render() {
		return (
			<div className="film-row-fave add_to_queue" key={this.props.key}>
			  <i className="material-icons" onClick={this.handleClick}>add_to_queue</i>
			</div>
		)

	}
}
export default Fave;
