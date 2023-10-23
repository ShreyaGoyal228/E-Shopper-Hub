import React from 'react';
import './Cards.css';
import {useNavigate} from 'react-router-dom';
import {Box,CardActionArea,CardMedia,CardContent,Typography,Card} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
const Cards = (props) => {
  let navigate=useNavigate();
  const deleteProduct=()=>{
    props.gettingId(props.product.id)
  }
  const changePage=()=>{
    navigate('/info',{state:props.product})
  }
  return (
    <Box className='card'>
     <Card style={{marginTop:20,
    height:'100%'}}>
 <CardActionArea>
          <CardMedia
          onClick={changePage}
          component="img"
          height="260"
          image={props.product.image}
          alt="image"
           sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
        />
        <CardContent>
          <Typography component="div" className='title'>  
            {props.product.title}
          </Typography>
          <Box className='bottom'>
          <Typography  component="div" className='price'>  
            Price : Rs.{props.product.price}
          </Typography>
          <DeleteIcon className='delete' onClick={deleteProduct}/>
          </Box>
        </CardContent>
     </CardActionArea>
    </Card>
    </Box>
  );
}
export default Cards;
