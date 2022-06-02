import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import {
  FilterLabel,
  FilterInput,
} from './Filter.styles';

const Filter = () => {
  const dispatch = useDispatch();

  const changeFilter = event => {
    dispatch(setFilter(event.currentTarget.value));
  };

  return (
    <FilterLabel>
      Find contacts by name
        <FilterInput
          type="text"
          onChange={changeFilter}
        />
    </FilterLabel>
  );
};

export default Filter;