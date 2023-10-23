import React ,{useState} from 'react';
import './AddItems.css';
import {useNavigate} from "react-router-dom"
import {Box,TextField,Button} from '@mui/material';
import {Link} from 'react-router-dom';

const AddItems = (props) => {
  const[state,setState] = useState({image: "", title:"",description:"",price:""});
  let navigate = useNavigate();
  const submitForm=(e)=>{
  e.preventDefault();
        if(state.url=== "" || state.heading===""||state.desc===""||state.price==="")
        {
        alert("Fields can't be empty");
        return;
        }
        else{
          props.addProductHandler(state);
          setState({image: "", title:"",description:"",price:""});
          navigate("/");
        }
}
  return (
    <Box className='container'>
    <Box className='flexing'>
    <Box className='add'>Add Item of your wish</Box>
    <Link to='/'>
    <Button variant="contained" className='btn'>Cancel</Button>
    </Link>
    </Box>
  <form onSubmit= {submitForm}>
  <label className='subheading' for='url'>Image Url:</label>
  <TextField variant="outlined" 
      placeholder="Url for product image...." fullWidth 
      id="url" 
      className='field' type="url" required 
      value={state.image}
      onChange={(e)=>{
        setState({...state, image :e.target.value});
      }}
    />
  <label className='subheading' for='heading'>Heading:</label>
  <TextField variant="outlined" 
  placeholder="Heading of Product...." fullWidth 
  id="heading" 
  className='field' 
  type="text" required 
  value={state.heading}
  onChange={(e)=>{
   setState({...state, title :e.target.value});
      }}/>
      <label className='subheading' for='numb'>Description:</label>
  <TextField variant="outlined" 
   type='text'
   placeholder="Description for Product...." fullWidth
   id="desc" className='field' 
   value={state.description}
   onChange={(e)=>{
       setState({...state, description:e.target.value});
     }}   
    />
    <label className='subheading' for='price'>Price:</label>
    <TextField variant="outlined" 
   type='text'
   placeholder="Price of Product...." fullWidth
   id="price" className='field' 
   value={state.price}
   onChange={(e)=>{
       setState({...state, price :e.target.value});
     }}   
    />
    <Button type= "submit" variant="contained" className='btn'>Add</Button>
</form>
   </Box>
  )
}

export default AddItems;
