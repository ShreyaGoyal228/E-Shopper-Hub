import React,{useState} from 'react'
import SearchIcon from '@mui/icons-material/Search';
import './SearchBar.css';
const SearchBar = (props) => {
  const [searchInput,setSearchInput]=useState("");
    const getSearchTerm=(e)=>{
      setSearchInput(e.target.value);
    }
    const handleSearch=(e)=>{
      props.searchKeyword(searchInput);
    }
  return (
    <div className="middle">
    <form onSubmit ={(e)=> e.preventDefault() } action="">
        <input type="text" placeholder='Search'
        value={searchInput} onChange={getSearchTerm}/>
        <button type='submit' className='bttn' onClick={handleSearch}>
            <SearchIcon size={24}/>
        </button>
    </form>
    
    </div>
  )
}
export default SearchBar;
