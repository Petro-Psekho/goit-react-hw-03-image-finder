import React, { Component } from 'react';

import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

class ImageGallery extends Component {
  state = {};
  render() {
    return (
      <ul className="gallery">
        {<ImageGalleryItem searchQuery={this.props.searchQuery} />}
      </ul>
    );
  }
}

export default ImageGallery;
