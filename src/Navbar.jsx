import React from 'react';
import './Navbar.css';
import SortingSelect from './SortingSelect.jsx';
import {AppBar,Toolbar,Box,Typography,Button} from '@mui/material';
const Navbar = (props) => {
const handleSortChange=(sortOrder)=>{
    props.sortData(sortOrder);
}
  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="fixed" 
    className='header'>
    <Toolbar className='toolbar'>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} className='heading'>
          E-Shopper Hub
        </Typography>
      <Button
      className='btn'>
        Log Out
      </Button>
      <Button
      className='btn'
      >
<SortingSelect handleSortChange={handleSortChange}/>
      </Button>
      </Toolbar>
    </AppBar>
  </Box>
  )
}

export default Navbar;

