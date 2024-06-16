import { useDispatch, useSelector } from 'react-redux';
import CSS from './SearchBar.module.css';
import { setContactsFilter } from '../../redux/filters/slice.js';
import { selectContactsFilter } from '../../redux/filters/selectors.js';

// Компонент відповідає за фільтрацію списку контактів за ім'ям
const SearchBar = () => {
  const dispatch = useDispatch(); // Отримуємо функцію dispatch з Redux для зміни фільтра
  const filter = useSelector(selectContactsFilter); // Отримуємо поточне значення фільтра зі стану

  // Обробник зміни значення фільтра
  const handleChangeFilter = ({ currentTarget: { value } }) => {
    const normalizedValue = value.toLowerCase();
    dispatch(setContactsFilter(normalizedValue)); // Викликаємо дію, яка змінює значення фільтра в Redux store
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
