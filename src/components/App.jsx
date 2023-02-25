import React, { Children, Component } from 'react';
import { Container } from 'components/App.styled';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { fetchQuery } from 'serices/api';
class App extends Component {
  state = {
    searchQuery: '',
    images: [],
    page: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    const { searchQuery, page } = this.state;

    if (prevState.searchQuery !== searchQuery || prevState.page !== page) {
      fetchQuery(searchQuery, page).then(resp =>
        this.setState(prevState => ({
          images: [...prevState.images, ...resp.hits],
        }))
      );
    }
  }

  searchQueryData = data => {
    this.setState({
      searchQuery: data,
    });
  };

  render() {
    const { images } = this.state;

    return (
      <Container>
        <Searchbar onSubmit={this.searchQueryData} />
        <ImageGallery images={images} />
        <ToastContainer position="top-center" autoClose={1500} />
      </Container>
    );
  }
}

export default App;
