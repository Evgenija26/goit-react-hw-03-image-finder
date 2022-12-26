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
    totalPages: null,
  };

  componentDidMount() {

    fetch('https://pixabay.com/api/')
      .then(res => res.json())
      .then(searchName => this.setState({ searchName }))
      .finally(() => this.setState({ isLoading: false}));
    
  }

  componentDidUpdate(_, prevState) {
    if (
      prevState.searchName !== this.state.searchName ||
      prevState.currentPage !== this.state.currentPage
    ) {
      this.showImages();
    }
  }

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  handleSubmit = e => {
    this.setState({
      searchName: e.target.elements.searchName.value,
      images: [],
      currentPage: 1,
    });
  };

  addImages = async values => {
    try {
      this.setState({ isLoading: true });
      const images = await API.addImages(values);
      this.setState(state => ({
        images: [...state.images, images],
        isLoading: false,
      }));

    } catch (error) {};
  }

  render() {
    // const { searchName } = this.state;

    return (
       
      <>
        <GlobalStyle /> 
       
        <ImageGallery onSubmit={this.addImages} />
        {/* <ImageGalleryItem items={searchName} />  */}
        <Searchbar onSubmit={this.handleSubmit} />
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