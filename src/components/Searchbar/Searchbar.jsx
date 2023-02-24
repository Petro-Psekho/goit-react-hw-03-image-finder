import { BsSearch } from 'react-icons/bs';

import { Formik, ErrorMessage } from 'formik';

import {
  SearchbarHeader,
  Form,
  Field,
  SearchFormButton,
  SearchFormButtonLabel,
} from 'components/Searchbar/Searchbar.styled';

export const onSubmit = (values, { resetForm }) => {
  // this.props.onSubmit(values);
  console.log(values);
  resetForm();
};

export const Searchbar = ({ onSubmit }) => {
  return (
    <SearchbarHeader>
      <Formik
        initialValues={{ name: '' }}
        onSubmit={values => {
          console.log(values);
        }}
      >
        <Form onSubmit={onSubmit}>
          <SearchFormButton type="submit">
            <SearchFormButtonLabel>
              <BsSearch size={20} />
            </SearchFormButtonLabel>
          </SearchFormButton>

          <Field
            type="text"
            name="name"
            placeholder="Search images and photos"
          />
        </Form>
      </Formik>
    </SearchbarHeader>
  );
};
