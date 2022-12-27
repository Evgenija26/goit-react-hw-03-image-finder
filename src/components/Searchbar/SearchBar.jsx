import React, { Component} from 'react'
import { BiSearchAlt } from "react-icons/bi";
import  css  from "./SearchBar.module.css";

export default class Searchbar extends Component {
  state = {
    searchName: '',
    };
    
    handleSubmit = e => {
        e.preventDefault();
         this.props.onSubmit(e.target.elements.searchName.value);
        // onSubmit(e.target.elements.searchName.value);
        e.target.reset();
    };

    render() {

        return (
            <header className={css.SearchBar}>
                <form className={css.SearchForm} onSubmit={this.handleSubmit}>
                    <input className={css.SearchFormInput} name='searchName' type='text' id='search' />
                    <button className={css.SearchFormButton} >
                        <BiSearchAlt />
                    </button>
                </form>
            </header>
        );

  
    }


}

// export default Searchbar



     
    
  
