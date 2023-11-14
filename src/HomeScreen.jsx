import React from 'react';
import './HomeScreen.css';
import Cards from './Cards';
import SearchBar from './SearchBar';
import { Container,Row,Col} from 'react-bootstrap';
const HomeScreen = (props) => {

  const deleteProductHandler=(id)=>{
    props.getProductId(id);
  }
  const renderProducts=props.product.map((product)=>{
    return( 
      <Col lg={3} md={4} sm={12} key={product.id} >
    <Cards product={product} gettingId={deleteProductHandler} />
    </Col>
    )
  })
  return (
  <>
  <Container className ='homeScreen'>
    <SearchBar searchKeyword={props.searchKeyword}/>
    <Row>
  {renderProducts}
  </Row>
   </Container>
    </>
  )
}

export default HomeScreen;
