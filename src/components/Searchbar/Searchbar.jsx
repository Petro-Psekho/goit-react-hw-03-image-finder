import { BsSearch } from 'react-icons/bs';
import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  SearchbarHeader,
  Form,
  Field,
  SearchFormButton,
  SearchFormButtonLabel,
  ErrorMessage,
} from 'components/Searchbar/Searchbar.styled';

const SearchSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(70, 'Too Long!')
    .required('Enter a Request'),
});

const initialValues = {
  name: '',
};

export const Searchbar = ({ onSubmit }) => {
  const handleSubmit = (values, action) => {
    onSubmit(values.name);

    action.resetForm();
  };
  return (
    <SearchbarHeader>
      <Formik
        initialValues={initialValues}
        validationSchema={SearchSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <SearchFormButton type="submit">
            <SearchFormButtonLabel>
              <BsSearch size={20} />
            </SearchFormButtonLabel>
          </SearchFormButton>

          <Field
            type="text"
            name="name"
            autoComplete="off"
            placeholder="Search images and photos"
          />

          <ErrorMessage name="name" component="div" />
        </Form>
      </Formik>
    </SearchbarHeader>
  );
};
