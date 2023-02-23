import { Container } from 'components/App.styled';
import { Searchbar } from 'components/Searchbar/Searchbar';

export const App = ({ onSubmit }) => {
  return (
    <Container>
      <Searchbar onSubmit={onSubmit} />
    </Container>
  );
};
