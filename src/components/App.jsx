import React, { Children, Component } from 'react';
import { Container } from 'components/App.styled';
import { Searchbar } from 'components/Searchbar/Searchbar';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { fetchQuery } from 'serices/api';
class App extends Component {
  state = {
    searchQuery: '',
    images: [],
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      console.log(prevState.searchQuery);
      console.log(this.state.searchQuery);

      fetchQuery(this.state.searchQuery).then(resp => console.log(resp.hits));
    }
  }

  searchQueryData = data => {
    this.setState({
      searchQuery: data,
    });
  };

  render() {
    return (
      <Container>
        <Searchbar onSubmit={this.searchQueryData} />
        <ImageGallery searchQuery={this.state.searchQuery}>
          {Children}
        </ImageGallery>
        <ToastContainer position="top-center" autoClose={1500} />
      </Container>
    );
  }
}

export default App;
