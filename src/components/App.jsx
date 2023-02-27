import React, { Component } from 'react';
import { Container } from 'components/App.styled';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Button } from 'components/Button/Button';
import { Loader } from 'components/Loader/Loader';
import { Modalka } from 'components/Modal/Modal';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import { fetchQuery } from 'serices/api';
class App extends Component {
  state = {
    searchQuery: '',
    images: [],
    page: 1,
    showLoadMoreBtn: false,
    loading: false,
    largeImage: '',
  };

  componentDidUpdate(prevProps, prevState) {
    const { searchQuery, page } = this.state;

    if (prevState.searchQuery !== searchQuery || prevState.page !== page) {
      this.setState({ loading: true });

      fetchQuery(searchQuery, page)
        .then(resp =>
          this.setState(prevState => ({
            images: [...prevState.images, ...resp.hits],
            showLoadMoreBtn: 12 - resp.hits.length,
          }))
        )
        .catch(error => console.log(error))
        .finally(() => this.setState({ loading: false }));
    }
  }

  searchQueryValue = value => {
    if (value === this.state.searchQuery) {
      toast.warn('Enter another search query!');
      return;
    }

    this.setState({
      searchQuery: value,
      page: 1,
      images: [],
      showLoadMoreBtn: false,
    });
  };

  getModalImage = imageUrl => {
    this.setState({ largeImage: imageUrl });
  };

  largeImageStateReset = () => {
    this.setState({ largeImage: '' });
  };

  handleLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { images, showLoadMoreBtn, largeImage, loading } = this.state;
    const {
      largeImageStateReset,
      searchQueryValue,
      getModalImage,
      handleLoadMore,
    } = this;

    return (
      <Container>
        {largeImage && (
          <Modalka
            largeImage={largeImage}
            largeImageStateReset={largeImageStateReset}
          />
        )}

        <Searchbar onSubmit={searchQueryValue} />
        <ImageGallery images={images} getModalImage={getModalImage} />
        {loading && <Loader />}
        {showLoadMoreBtn === 0 && <Button onClick={handleLoadMore} />}

        <ToastContainer position="top-center" autoClose={1500} />
      </Container>
    );
  }
}

export default App;
