import React, { Component } from 'react';
import { Container } from 'components/App.styled';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Button } from 'components/Button/Button';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import { fetchQuery } from 'serices/api';
class App extends Component {
  state = {
    searchQuery: '',
    images: [],
    page: 1,
    showLoadMoreBtn: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const { searchQuery, page } = this.state;

    if (prevState.searchQuery !== searchQuery || prevState.page !== page) {
      fetchQuery(searchQuery, page)
        .then(resp =>
          this.setState(prevState => ({
            images: [...prevState.images, ...resp.hits],
            showLoadMoreBtn: 12 - resp.hits.length,
          }))
        )
        .catch(error => console.log(error));
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
    });
  };

  handleLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { images, showLoadMoreBtn } = this.state;

    return (
      <Container>
        <Searchbar onSubmit={this.searchQueryValue} />
        <ImageGallery images={images} />
        {showLoadMoreBtn === 0 && <Button onClick={this.handleLoadMore} />}

        <ToastContainer position="top-center" autoClose={1500} />
      </Container>
    );
  }
}

export default App;
