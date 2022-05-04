import s from './Filter.module.css';
import PropeTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/bookSlice';

const Filter = ({ filterChange, value }) => {

  const filter = useSelector(store => store.books.contacts.filter);
  const dispatch = useDispatch();

  const handleFilterChange = e => {
    const { value } = e.currentTarget;
    dispatch(setFilter(value));
  };

  return (
    <div className={s.filterWrap} value={filter} filterChange={handleFilterChange}>
      <label className={s.label}>Find contact by name</label>
      <input type="text" onChange={filterChange} value={value} className={s.input}/>
    </div>
  );
};

Filter.propTypes = {
  filterChange: PropeTypes.func,
  value: PropeTypes.string,
};

export default Filter;
