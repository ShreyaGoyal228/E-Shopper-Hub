import React from 'react'
import './Sidebar.css';
const Sidebar = (props) => {
  const handleClick=(val)=>{
  props.sortByCategory(val);
  console.log(val);
  }
  return (
    <div className='sidebar'>
       <li>
        <span onClick={()=>handleClick('All')}>All</span>
      </li>
      <li>
        <span onClick={()=>handleClick('Men')}>Men</span>
      </li>
      <li>
        <span onClick={()=>handleClick('Women')}>Women</span>
      </li>
      <li>
        <span onClick={()=>handleClick('Kids')}>Kids</span>
      </li>
      <li>
        <span onClick={()=>handleClick('Jewellery')}>Jewellery</span>
      </li>
      <li>
        <span onClick={()=>handleClick('Electronics')}>Electronics</span>
      </li>
    </div>
  )
}
export default Sidebar;
