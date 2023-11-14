import React ,{useState,useEffect} from 'react';
import Info from './Info.jsx';
import Delete from './Delete.jsx';
import api from './api/products';
import Navbar from './Navbar';
import HomeScreen from './HomeScreen';
import Sidebar from './Sidebar';
import {Routes, Route} from 'react-router-dom';
import {Container} from 'react-bootstrap';
import Login from './Login.jsx'
import './App.css';
const Layout=(props)=>{
  return (
    <>
    <Navbar/>
    <Container fluid className='app_container px-0'>
      <Sidebar sortByCategory={props.sortByCategory}/>
     <Container fluid className='app_main'>
     {props.name}
       </Container>
     </Container>
    </>
   );
}
const App = () => {
  const [searchResults,setSearchResults]=useState([])
  const [products,setProducts]=useState([]);
  const [searchVal,setSearchVal]=useState("");
  const [sortOrder, setSortOrder] = useState("");
  const sortProducts=(searchResults,sortOrder)=>{
    let sortedProducts = [...searchResults];

    if (sortOrder === "lowToHigh") {
      sortedProducts = sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sortOrder === "highToLow") {
      sortedProducts = sortedProducts.sort((a, b) => b.price - a.price);
    }
    return sortedProducts;
  }
const handleSortData=(sortOrder)=>{
  setSortOrder(sortOrder);
  const sortedProducts=sortProducts(searchResults,sortOrder);
  setSearchResults(sortedProducts); //Update the search Results based on the sorted products
}
const sortByCategory=(category)=>{
   if(category==='All')
   {
   setSearchResults(products);
   }
   else
   {
    const items=products.filter((item) =>
    item.category.toLowerCase().includes(category.toLowerCase())
);
console.log('Filtered Items:', items);
const sortedProducts = sortProducts(items, sortOrder);
console.log('Sorted Products:', sortedProducts);
  setSearchResults(sortedProducts);

   }
};
 const retrieveProducts=async()=>{
  const response = await api.get('/products');
  return response.data;
}
const searchHandler=(searchVal)=>{
  setSearchVal(searchVal);
  if(searchVal==="")
  {
  setSearchResults(products);
  }
  else{
    const filterBySearch = products.filter((item) => { 
     return item.category.toLowerCase().includes(searchVal.toLowerCase());
        });
  setSearchResults(filterBySearch); 
    }
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
   const sortedProducts = sortProducts(allProducts, sortOrder);
   setProducts(sortedProducts);
 }
 getAllProducts();
  },[sortOrder]);
  return (
   <>
  <Routes>
  <Route exact path='/' element={<Layout name={<HomeScreen product={searchVal.length>0?searchResults:products} 
  getProductId={removeProductHandler} searchKeyword={searchHandler}/>}
  sortByCategory={sortByCategory}/>}/>
  <Route exact path='/info' element={<Info/>}/>
  <Route exact path='/delete' element={<Delete/>}/>
  <Route exact path='/login' element={<Login/>}/>

  </Routes>  
  <Navbar sortData={handleSortData}/>
   </>
  );
}
export default App;