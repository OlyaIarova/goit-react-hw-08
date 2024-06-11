
import { useDispatch, useSelector } from 'react-redux';
import CSS from './SearchBar.module.css';
import { setContactsFilter } from '../../redux/filterSlice.js';
import { selectContactsFilter } from '../../redux/selectors.js';

const SearchBar = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectContactsFilter);

  const handleChangeFilter = ({ currentTarget: { value } }) => {
    const normalizedValue = value.toLowerCase();
    dispatch(setContactsFilter(normalizedValue));
  };

  return (
    <div className={CSS.label}>
      <p>Find contacts by name</p>
      <input
        name="filter"
        className={CSS.searchInput}
        type="text"
        value={filter}
        onChange={handleChangeFilter}
        placeholder="Name"
      />
    </div>
  );
};

export default SearchBar;

