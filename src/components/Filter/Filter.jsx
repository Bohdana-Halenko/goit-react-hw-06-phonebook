import s from './Filter.module.css';
// import PropeTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/bookSlice';

const Filter = ( /*{filterChange, value}*/ ) => {

  const dispatch = useDispatch();
  const filter = useSelector(state => state.contacts.filter);

  const handleFilterChange = e => {
    dispatch(setFilter(e.currentTarget.value));
    // const { value } = e.currentTarget;
    // dispatch(setFilter(value));
  };

  return (
    <div className={s.filterWrap} /*value={filter} filterChange={handleFilterChange}*/>
      <label className={s.label}>Find contact by name</label>
      <input type="text" onChange={handleFilterChange} value={filter} className={s.input}/>
    </div>
  );
};

// Filter.propTypes = {
//   filterChange: PropeTypes.func,
//   value: PropeTypes.string,
// };

export default Filter;
