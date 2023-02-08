import React from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { FilterInput} from './Filter.styled'

export const FilterContacts = ({ value, onChange }) => {
  const filterId = nanoid();

  return (
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
  )
};

FilterContacts.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};