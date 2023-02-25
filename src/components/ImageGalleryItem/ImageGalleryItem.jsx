import React, { Component } from 'react';

class ImageGalleryItem extends Component {
  state = {};
  render() {
    return (
      <li className="gallery-item">
        <h1>{this.props.searchQuery}</h1>
        <img src="" alt="" />
      </li>
    );
  }
}

export default ImageGalleryItem;
