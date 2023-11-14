import { MenuItem, Select, FormControl} from '@mui/material';
import './SortingSelect.css';
import React, { useState } from 'react';
const SortingSelect = ({ handleSortChange }) => {
  const [sortOrder, setSortOrder] = useState('');

  const handleChange = (event) => {
    setSortOrder(event.target.value);
    handleSortChange(event.target.value);
  };

  return (
    <FormControl>
  <Select className='text'
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={sortOrder}
    onChange={handleChange}
  >
    <MenuItem value='lowToHigh'>Low to High</MenuItem>
    <MenuItem value='highToLow'>High to Low</MenuItem>
  </Select>
</FormControl>
  );
};

export default SortingSelect;
