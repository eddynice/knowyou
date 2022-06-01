import {useState} from 'react'
import   './search.css'

function SearchBar({products}) {
    const [searchVal, setSearchVal] = useState('');
    
    const handleInput = (e) => {
      setSearchVal(e.target.value);
    }
    
    const handleClearBtn = () => {
      setSearchVal('');
    }
    
    const filteredProducts = products.filter((product) => {
      return product.includes(searchVal);
    });
    
    return (
      <div className="container1">
        <label 
            for="product-search" 
            id="input-label"
          >
            Search your favorite artist!
          </label>
        <div className="input-wrap">
          <i className="fas fa-search"></i>
          
          
          <input 
            onChange={handleInput}
            value={searchVal}
            type="text" 
            name="product-search" 
            id="product-search" 
            placeholder="Search Products"
          />
          <i 
            onClick={handleClearBtn}
            className="fas fa-times"
          ></i>
        </div>
        <div className="results-wrap">
          <ul>
            {filteredProducts.map((product) => {
              return <li key={product} className='list-item'><a href='#'>{product}</a></li>
            })}
          </ul>
        </div>
      </div>
    );
  }
   export default SearchBar