import React, { Component } from 'react';
import Carousel from '@brainhubeu/react-carousel';
import '../stylesheets/booklist.css';
import '../stylesheets/carousel.css';

class LibraryCarousel extends Component {
	render() {
		return (
			<div className="carousel">
				<Carousel arrows>
					<div>
						<h1>Harry Potter et la Coupe De Feu</h1>
						<img
							src="https://images-na.ssl-images-amazon.com/images/I/51Pab2aMLHL.jpg"
							height="300px"
							alt="Harry Potter"
						/>
					</div>
					<div>
						<h1>Coaline</h1>
						<img
							src="https://images-na.ssl-images-amazon.com/images/I/41eXaoJCaUL.jpg"
							height="300px"
							alt="Coraline"
						/>
					</div>
					<div>
						<h1>Game of Thrones</h1>
						<img
							src="https://images-na.ssl-images-amazon.com/images/I/41PO1V8EHcL.jpg"
							height="300px"
							alt="Game Of Throness"
						/>
					</div>
				</Carousel>
				<div className="overlay" />
			</div>
		);
	}
}

export default LibraryCarousel;
