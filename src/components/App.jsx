import { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import * as API from 'api';
import  ImageGallery  from './ImageGallery/ImageGallery';
import Searchbar from './Searchbar/Searchbar';
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
      page: prevState.page + 1,
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
      this.setState({ error: 'something went wrong'})
     } finally {
      this.setState({ isLoading: false });
    }
  }

  render() {
    // const { searchName } = this.state;

    return (
       
      <>
        <GlobalStyle /> 
       <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery images={this.state.images} />
        {/* <ImageGalleryItem items={searchName} />  */}
        
        <Button onClick={this.loadMore} />
       </>   
        //  {/*  */}
        // {/*  */}
      // <Loader />
      // 
      // <Modal />  
    )
    
  }
 
};

// 
// import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
// import { Loader } from './Loader/Loader';
// 
// import { Modal } from './Modal/Modal';