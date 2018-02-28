import React, { Component } from 'react';

class Fave extends Component {
	constructor() {
		super();
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick = (e) => {
		e.stopPropagation();
		this.props.onFaveToggle();

	};

  render() {
		const queue = false ? 'remove_from_queue' : 'add_to_queue'
		return (
			<div className={`film-row-fave ${queue}`}>
			  <i className="material-icons" onClick={this.handleClick}>add_to_queue</i>
			</div>
		)

	}
}
export default Fave;
