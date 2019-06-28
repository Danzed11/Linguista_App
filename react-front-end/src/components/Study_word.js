import React, { Component } from 'react';
import axios from 'axios';

class Study_word extends Component {
	deleteWord(arg) {
		axios({
          method: 'post',
          url: '/delete-word',
          data: {
            wordId: arg
          },
          headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        });
		this.props.renderWords()
	}

	render() {
		return (
			<tr>
				<td>{this.props.foreign}</td>
				<td>{this.props.english}</td>
				<td>
					<button
						className="btn_del"
						onClick={() => this.deleteWord(this.props.dbID)}
					>
					Delete
					</button>
				</td>
			</tr>
		);
	}
}

export default Study_word;
