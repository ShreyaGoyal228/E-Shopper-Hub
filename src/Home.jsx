import React from 'react'
import './Home.css';
import Cards from './Cards';
import {Row,Col} from 'react-bootstrap';
import {Box} from '@mui/material';
const Home = (props) => {
  const deleteProductHandler=(id)=>{
          props.getProductId(id);
  }
  const renderProducts=props.product.map((product)=>{
    return( 
      <Col lg={4} md={6} sm={12} key={product.id}  >
    <Cards product={product} gettingId={deleteProductHandler} />
    </Col>
    ); 
});
  return (
    <Box className='container'>
      <Row>
    {renderProducts}
    </Row>
    </Box>
  )
}
export default Home;