import React, { Component } from 'react';
import Carousel from '@brainhubeu/react-carousel';
import '../stylesheets/booklist.css';
import '../stylesheets/carousel.css';

class LibraryCarousel extends Component {
	render() {
		return (
			<div className="carousel">
				<Carousel arrows infinite>
					<div className="bookCover">
						<h1>Harry Potter et la Coupe De Feu</h1>
						<img
							src="https://images-na.ssl-images-amazon.com/images/I/51Pab2aMLHL.jpg"
							height="300"
							alt="Harry Potter"
						/>
					</div>
					<div className="bookCover">
						<h1>Coraline</h1>
						<img
							src="https://images-na.ssl-images-amazon.com/images/I/41eXaoJCaUL.jpg"
							height="300"
							alt="Coraline"
						/>
					</div>
					<div className="bookCover">
						<h1>Game of Thrones</h1>
						<img
							src="https://images-na.ssl-images-amazon.com/images/I/41PO1V8EHcL.jpg"
							height="300"
							alt="Game Of Throness"
						/>
					</div>
					<div className="bookCover">
						<h1>Moi, Simon, 16ans, Homo Sapiens</h1>
						<img
							src="https://images-na.ssl-images-amazon.com/images/I/813lU7WPKvL.jpg"
							height="300"
							alt="Moi, Simon, 16ans, Homo Sapiens"
						/>
					</div>
				</Carousel>
			</div>
		);
	}
}

export default LibraryCarousel;
