import s from './Filter.module.css';
import PropeTypes from 'prop-types';

const Filter = ({ filterChange, value }) => {
  return (
    <div className={s.filterWrap}>
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
