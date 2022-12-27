import React from 'react'
import { BiSearchAlt } from "react-icons/bi";
import  css  from "./SearchBar.module.css";

const Searchbar = ({  onSubmit }) => {
    const handleSubmit = e => {
        e.preventDefault();
        onSubmit(e.target.elements.searchName.value);
        e.target.reset();
    }

  return (
      <header className={css.Searchbar}>
          <form className={css.SearchForm} onSubmit={handleSubmit}>
              <input className={css.SearchFormInput} name='searchName' type='text' id='search'  />
              <button className={css.SearchFormButton} >
                  <BiSearchAlt />
              </button>
          </form>
    </header>
  )
}

export default Searchbar



     
    
  
