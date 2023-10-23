import React from 'react';
import './Navbar.css';
import {useNavigate} from 'react-router-dom';
import {AppBar,Toolbar,Box,Typography,Button} from '@mui/material';
const Navbar = () => {
  let navigate=useNavigate();
  const navigateToAdd=()=>{
    navigate('/addItems');
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="fixed" 
    className='header'>
      <Toolbar className='toolbar'>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} className='heading'>
          ShipStation
        </Typography>
        <Button color="inherit" className='btn'>Sort By Price
        {/* <select>
        <option value="asc">Low to High</option>
        <option value="desc">High to Low</option>
        </select> */}
        </Button>
      <Button color="inherit" className='btn' onClick={navigateToAdd}>Add Product</Button>
      </Toolbar>
    </AppBar>
  </Box>
  )
}

export default Navbar;

