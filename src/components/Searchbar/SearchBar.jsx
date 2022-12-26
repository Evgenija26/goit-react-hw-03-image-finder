// import { Component } from 'react';
import { BiSearchAlt } from "react-icons/bi";
// import { Searchbar, SearchForm, Button, Input } from './Searchbar.module.css';
import  css  from "./Searchbar.module.css";
import React from 'react'


const Searchbar = ({ images, setSearchResults }) => {
    const handleSubmit = (e) => e.preventDefault()

    const handleSearchChange = (e) => {
        if (!e.target.value) return setSearchResults(images)

        const resultsArray = images.filter(image => image.title.includes(e.target.value) || image(e.target.value))
        
        setSearchResults(resultsArray)
    }

  return (
      <header className={css.Searchbar}>
          <form className={css.SearchForm} onSubmit={handleSubmit}>
              <input className={css.SearchFormInput} type='text' id='search' onChange={handleSearchChange} />
              <button className={css.SearchFormButton} >
                  <BiSearchAlt />
              </button>
          </form>
    </header>
  )
}

export default Searchbar
// export default class Searchbar extends Component() {
    
//     state = {
//         searchName: '',
//     };
    
//     handleChange = e => {
//         this.setState({
//             searchName: e.currentTarget.value.toLowerCase(),
//         });
//     };

//     handleFormSubmit = event => {
//         event.preventDefault();
//         this.props.onSubmit(this.state.searchName);
   
//     };
      
//     render() {
//         return (
//             <header className={css.Searchbar} >
//                 <form className={css.SearchForm} onSubmit={this.handleFormSubmit}>
//                     <button type="submit" className={css.SearchFormButton}>
//                         {/* <RiSearchEyeLine size={24} /> */}
//                     </button>

//                     <input
//                         className={css.SearchFormInput}
//                         type="text"
//                         autoComplete="off"
//                         autoFocus
//                         placeholder="Search images and photos"
//                         onChange={this.handleChange}
//                         value={this.state.searchName}
//                     />
//                 </form>
//             </header>
//         );
//     }
// };



     
    
  
