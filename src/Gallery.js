import React, { Component } from 'react';
import './Gallery.css';
import image1 from './img/img1.jpg';
import image2 from './img/img2.jpg';
import image3 from './img/img3.jpg';
import image4 from './img/img4.jpg';

export default class Gallery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [image1, image2, image3, image4],
      selected: image1
    };
  }

  handleClick = e => {
    let newState = { ...this.state };
    newState.selected = e.target.dataset.name;
    this.setState(newState);
  };

  carousel = () => {
    const images = this.state.images.map((img, idx) => {
      return (img = (
        <img
          data-name={img}
          className="carousel-item"
          key={idx}
          src={this.state.images[idx]}
          alt="montain"
          onClick={e => this.handleClick(e)}
        />
      ));
    });
    return images;
  };

  render() {
    const background = {
      backgroundImage: `url(${this.state.selected})`
    };

    return (
      <div className="gallery">
        <div className="image-display" style={background}></div>
        <div className="navigation">{this.carousel()}</div>
      </div>
    );
  }
}
