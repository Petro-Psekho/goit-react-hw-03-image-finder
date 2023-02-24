import { Container } from 'components/App.styled';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';

import React, { Children, Component } from 'react';

class App extends Component {
  state = { search: '' };

  searchQuery = data => {
    this.setState({
      search: data,
    });
  };

  render() {
    return (
      <Container>
        <Searchbar onSubmit={this.searchQuery} />
        <ImageGallery searchQueryData={this.state.search}>
          {Children}
        </ImageGallery>
      </Container>
    );
  }
}

export default App;
