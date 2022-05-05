import s from './Filter.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/contactsSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.contacts.filter);

  const handleFilterChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div className={s.filterWrap}>
      <label className={s.label}>
        Find contact by name
        <input
          type="text"
          name="filter"
          onChange={handleFilterChange}
          value={filter}
          className={s.input}
        />
      </label>
    </div>
  );
};

// Filter.propTypes = {
//   onChange: PropeTypes.func,
//   value: PropeTypes.string,
// };

export default Filter;
