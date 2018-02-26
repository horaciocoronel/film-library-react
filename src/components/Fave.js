import React, { Component } from 'react';

class Fave extends Component {
	constructor() {
		super();

		this.handleClick = this.handleClick.bind(this);

		this.state = {
			isfave: false
		}
	}

	handleClick = (e) => {
		e.stopPropagation();
		this.setState(prevState => ({
			isfave: !prevState.isfave
		}));
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
