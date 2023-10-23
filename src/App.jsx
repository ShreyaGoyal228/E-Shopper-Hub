import React ,{useState,useEffect} from 'react'
import {Routes,Route} from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import api from './api/products';
import Navbar from './Navbar';
import Home from './Home';
import AddItems from './AddItems';
import Info from './Info';
const App = () => {
  const [products,setProducts]=useState([]);

  //  Retrieving the products

 const retrieveProducts=async()=>{
  const response = await api.get('/products');
  return response.data;
}
const addProductHandler=async(product)=>{
  const response=await api.post('/products',{id:uuidv4(),...product});
  setProducts([...products,response.data]);
}
const removeProductHandler=async(id)=>
{
  await api.delete(`/products/${id}`);
  const newProductList=products.filter((product)=>{ 
    return product.id!==id;
});
setProducts(newProductList);
}
useEffect(()=>{
 const getAllProducts=async()=>{
   const allProducts=await retrieveProducts();
   setProducts(allProducts);
 }
 getAllProducts();
  },[]);
  return (
   <>
   <Navbar/>
   <Routes>
    <Route exact path='/' element={<Home product={products} getProductId={removeProductHandler}/>}/>   
    <Route exact path='/addItems' element={<AddItems addProductHandler={addProductHandler}/>}/> 
   <Route exact path='/info' element={<Info/>}/>
    </Routes> 
   </>
  );
}
export default App;
