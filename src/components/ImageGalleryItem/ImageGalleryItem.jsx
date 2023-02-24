import React, { Component } from 'react';

class ImageGalleryItem extends Component {
  state = {
    webformatURL: '',
    largeImageURL: '',
  };
  render() {
    return (
      <li className="gallery-item">
        <img src={this.state.webformatURL} alt="" />
      </li>
    );
  }
}

export default ImageGalleryItem;
