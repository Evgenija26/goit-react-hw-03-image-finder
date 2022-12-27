import { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import * as API from 'api';
import ImageGallery from './ImageGallery/ImageGallery';
import SearchBar from './SearchBar/SearchBar';
import  Button  from './Button/Button';

export default class App extends Component {
  state = {
    searchName: '',
    images: [],
    currentPage: 1,
    error: null,
    isLoading: false,
    totalPages: 0,
    
  };

  componentDidUpdate(_, prevState) {
    if (
      prevState.searchName !== this.state.searchName ||
      prevState.currentPage !== this.state.currentPage
    ) {
      this.addImages();
    }
  }

  loadMore = () => {
    this.setState(prevState => ({
      currentPage: prevState.currentPage + 1,
    }));
  };

  handleSubmit = query => {
    this.setState({
      searchName: query,
      images: [],
      currentPage: 1,
    });
  };

  addImages = async values => {
    const { searchName, currentPage } = this.state;
    try {
      this.setState({ isLoading: true });
      const data = await API.getImages(searchName, currentPage);
      this.setState(state => ({
        images: [...state.images, ...data.hits],
        isLoading: false,
        error: '',
        totalPages: Math.ceil(data.totalHits / 12)
      }));

    } catch (error) {
      this.setState({ error: 'something went wrong' })
    } finally {
      this.setState({ isLoading: false });
    }
  };

 


  render() {
     const { images, isLoading, currentPage, totalPages } = this.state;

    return (
       
      <>
        <GlobalStyle /> 
        <SearchBar onSubmit={this.handleSubmit} />
        <ImageGallery images={this.state.images} />
        
        {images.length > 0 && totalPages !== currentPage && !isLoading && (
          <Button onClick={this.loadMore} />
        )}
        {/* <Button onClick={this.loadMore} /> */}
        {/* {images.length !== 0 && <Button onClick={this.loadMore} />} */}
        
       </>   
      
      // <Loader />
  
    )
    
  }
 
};

// import { Loader } from './Loader/Loader';
