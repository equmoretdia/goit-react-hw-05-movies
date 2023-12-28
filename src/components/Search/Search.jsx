import { useSearchParams } from 'react-router-dom';
import { Form, Input, FormButton } from './SearchStyles';

const Search = ({ onSubmit }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query') ?? '';
  console.log(query);

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(query);
  };

  const handleInputChange = e => {
    const input = e.target.value.toLowerCase();
    const params = input !== '' ? { query: input.trim() } : {};
    setSearchParams(params);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        name="searchInput"
        value={query}
        onChange={handleInputChange}
        autoComplete="off"
        // autoFocus
        placeholder="Search movies"
      />
      <FormButton type="submit">Search</FormButton>
    </Form>
  );
};

export default Search;
