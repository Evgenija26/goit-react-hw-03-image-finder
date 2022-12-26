import { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import * as API from 'api';
// // import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
// // import { ImageGallery } from './ImageGallery/ImageGallery';
import  Searchbar  from './Searchbar/Searchbar';

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


  handleSubmit = searchName => {
    this.setState({
  
      searchName: searchName,
      images: [],
      currentPage: 1,
    });
  };

  addImagesItem = async values => {

    try {
      this.setState({ isLoading: true });
      const images = await API.addImagesItem(values);
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
        {this.state.searchName && <div>Evgeniia</div>}
        {/* <ImageGallery onSubmit={this.addImagesGalleryItem} />
        <ImageGalleryItem items={searchName} /> */}
        <Searchbar onSubmit={this.handleSubmit} />
       </>   
        //  {/*  */}
        // {/*  */}
      // <Loader />
      // <Button />
      // <Modal />  
    )
    
  }
 
};

// 
// import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
// import { Loader } from './Loader/Loader';
// import { Button } from './Button/Button';
// import { Modal } from './Modal/Modal';