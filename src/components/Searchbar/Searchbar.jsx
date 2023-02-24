import { BsSearch } from 'react-icons/bs';

import { Formik, ErrorMessage } from 'formik';

import {
  SearchbarHeader,
  Form,
  Field,
  SearchFormButton,
  SearchFormButtonLabel,
} from 'components/Searchbar/Searchbar.styled';

export const Searchbar = ({ onSubmit }) => {
  return (
    <SearchbarHeader>
      <Formik initialValues={{ name: 'input' }}>
        <Form onSubmit={onSubmit}>
          <SearchFormButton type="submit">
            <SearchFormButtonLabel>
              <BsSearch size={20} />
            </SearchFormButtonLabel>
          </SearchFormButton>

          <Field
            type="text"
            name="input"
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </Form>
      </Formik>
    </SearchbarHeader>
  );
};
