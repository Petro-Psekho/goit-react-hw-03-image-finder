import React, { Component } from 'react';
import { Container } from 'components/App.styled';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Button } from 'components/Button/Button';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { fetchQuery } from 'serices/api';
class App extends Component {
  state = {
    searchQuery: '',
    images: [],
    page: 1,
    loadMore: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const { searchQuery, page } = this.state;

    if (prevState.searchQuery !== searchQuery || prevState.page !== page) {
      // fetchQuery(searchQuery, page).then(resp =>
      //   this.setState({ images: resp.hits })
      // );

      fetchQuery(searchQuery, page)
        .then(resp =>
          this.setState(prevState => ({
            images: [...prevState.images, ...resp.hits],
            loadMore: 12 - resp.hits.length,
          }))
        )
        .catch(error => console.log(error));
    }
  }

  searchQueryData = data => {
    this.setState({
      searchQuery: data,
    });
  };

  handleLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { images, loadMore } = this.state;

    return (
      <Container>
        <Searchbar onSubmit={this.searchQueryData} />
        <ImageGallery images={images} />
        {loadMore === 0 && <Button onClick={this.handleLoadMore} />}

        <ToastContainer position="top-center" autoClose={1500} />
      </Container>
    );
  }
}

export default App;
