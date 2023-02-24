import { Container } from 'components/App.styled';
import { Searchbar } from 'components/Searchbar/Searchbar';

import React, { Component } from 'react';

class App extends Component {
  state = { search: '' };

  searchQuery = data => {
    this.setState({
      search: data,
    });
    console.log(data);
  };

  render() {
    return (
      <Container>
        <Searchbar onSubmit={this.searchQuery} />
      </Container>
    );
  }
}

export default App;
