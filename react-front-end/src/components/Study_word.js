import React, { Component } from 'react';

class Study_word extends Component {
	render() {
		return (
			<tr>
				<td>{this.props.foreign}</td>
				<td>{this.props.english}</td>
				<td>
					<button className="btn_del">Delete</button>
				</td>
			</tr>
		);
	}
}

export default Study_word;
