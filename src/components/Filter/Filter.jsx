import PropTypes from 'prop-types';
import { FilterContainer, FilterLable, FilterInput } from './Filter.styled';
export function Filter({ value, onChange }) {
  return (
    <FilterContainer>
      <FilterLable>
        Find contacts by name <br />
        <FilterInput
          type="text"
          placeholder="Search..."
          value={value}
          onChange={onChange}
        />
      </FilterLable>
    </FilterContainer>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
