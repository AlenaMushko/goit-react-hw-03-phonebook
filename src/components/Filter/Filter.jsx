import React from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { FilterInput, FilterContainer } from './Filter.styled';

export const FilterContacts = ({ value, onChange }) => {
  const filterId = nanoid();

  return (
    <FilterContainer>
      <label htmlFor={filterId}>
        Find contacts by name
        <FilterInput
          id={filterId}
          type="text"
          name="filter"
          value={value}
          onChange={onChange}
        />
      </label>
    </FilterContainer>
  );
};

FilterContacts.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
