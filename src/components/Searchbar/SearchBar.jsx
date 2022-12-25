import React from "react";
import { IoIosSearch } from "react-icons/io";
import { Searchbar, SearchForm, Button, Input } from './Searchbar.module.css';

export class Searchbar extends React.Component({}) {
    
    state = {
    searchName: '',
    };
    
    handleChange = e => {
        this.setState({
        searchName: e.currentTarget.value.toLowerCase(),
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.props.onSubmit(this.state.searchName);
        
    };
    
    
    render() {
    return (
      <Searchbar>
        <SearchForm onSubmit={this.handleFormSubmit}>
          <Button type="submit">
            <IoIosSearch size={24} />
          </Button>

          <Input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
            value={this.state.searchName}
          />
        </SearchForm>
      </Searchbar>
    );
  }
     
    
  
}