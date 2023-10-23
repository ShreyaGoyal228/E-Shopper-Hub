import React from 'react';
import './Info.css'
import {useLocation,Link} from 'react-router-dom';
import {Box,Button,CardActionArea,CardMedia,CardContent,Typography,Card} from '@mui/material';
const Info = () => {
  const location=useLocation();
  return (<>
    <Box className='details'>
    <Box className='flexi'>
    <Box className='add'>Item Detail's Page</Box>
    <Card style={{marginTop:25,
    marginBottom:25}}>
      <CardActionArea>
        <div className="aligning">
        <CardMedia
          component="img"
          height="300"
          image={location.state.image}
          alt="image"
          sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
        />
        </div>
        <CardContent>
          <Typography gutterBottom component="div" className='title'>  
            {location.state.title}
          </Typography>
          <Typography gutterBottom variant="body2" color="text.secondary" className='description'>
          {location.state.description}
          </Typography>
          <Typography variant="body2" className='price'>
            Price : Rs.
          {location.state.price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Link to='/'>
    <Button variant="contained" className='btn'>Back</Button>
    </Link>
    </Box>
    </Box>
    </>
  )
}

export default Info;
