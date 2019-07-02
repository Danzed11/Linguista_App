import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Nav from './components/nav.js';
import Word from './components/word.js';
import './stylesheets/reader.css';

import axios from 'axios';

class Reader extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: true,
		};
	}

	translationHandler(input) {
		let url = `https://translation.googleapis.com/language/translate/v2?key=AIzaSyD0A7tw-SVBIHFZwEH12i2SS__8LviSfFE&q=${input}&target=fr`;
		axios
			.get(url) // You can simply make your requests to "/api/whatever you want"
			.then(response => {
				console.log(
					`${input}: ${response.data.data.translations[0].translatedText}`,
				);
			});
	}
	componentWillMount() {
		let url = `/getchapter/${this.props.match.params.book}/${
			this.props.match.params.chapter
		}`;
		axios
			.get(url) // You can simply make your requests to "/api/whatever you want"
			.then(response => {
				this.setState({
					words: response.data,
					loading: false,
					prev: Number(this.props.match.params.chapter) - 1,
					next: Number(this.props.match.params.chapter) + 1,
				});
			});
	}

	render() {
		let backurl = `/reader/${this.props.match.params.book}/${this.state.prev}`;
		let nexturl = `/reader/${this.props.match.params.book}/${this.state.next}`;
		if (this.state.loading) {
			return (
				<fragment>
					<Nav />
					<div className="loading-div">Chapter Loading...</div>
				</fragment>
			);
		} else if (this.state.words === '') {
			return <div className="loading-div">Chapter missing</div>;
		} else {
			return (
				<fragment>
					<Nav />
					<div className="chapter-div">
						<div className="button-box">
							<a href={backurl}>
								<button className="prev-next-leftarrow">&lt;</button>
							</a>
							<a href={nexturl}>
								<button className="prev-next-rightarrow">&#62;</button>
							</a>
						</div>
						<h1> Chapter {this.props.match.params.chapter}</h1>
						<article className="reading-space">
							{this.state.words.map((word, index) => {
								return <Word keyprop={index} foreign={word.word} />;
							})}
						</article>
					</div>
				</fragment>
			);
		}
	}
}

export default Reader;
