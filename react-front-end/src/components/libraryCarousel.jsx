import React, { Component } from 'react';
import Carousel from '@brainhubeu/react-carousel';
import '../stylesheets/booklist.css';
import '../stylesheets/carousel.css';

class LibraryCarousel extends Component {
	render() {
		return (
			<div className="carousel">
				<Carousel arrows>
					<img
						src="https://images-na.ssl-images-amazon.com/images/I/51Pab2aMLHL.jpg"
						height="350px"
						alt="Harry Potter"
					/>
					<img
						src="https://images-na.ssl-images-amazon.com/images/I/41eXaoJCaUL.jpg"
						height="350px"
						alt="Coraline"
					/>
					<img
						src="https://images-na.ssl-images-amazon.com/images/I/41PO1V8EHcL.jpg"
						height="350px"
						alt="Game Of Throness"
					/>
				</Carousel>
				<div className="overlay" />
			</div>
		);
	}
}

export default LibraryCarousel;
