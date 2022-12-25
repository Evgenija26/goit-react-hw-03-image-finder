import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12';

// const API_KEY = '30732924-fda9e7f6c6adece0421e92fce';
// const PER_PAGE = 12;

export const getImagesGalleryItem = async values => {
  const response = await axios.get('/imagesGalleryItem', values);
  return response.data;
};

export const addImagesGalleryItem = async () => {
  const response = await axios.post('/imagesGalleryItem');
  return response.data;
};


// export const fetchImageGallery = async searchQuery => {
//   const response = axios.get(`/search?query=${searchQuery}`);
//   return response.data.hits;
// };

// export default {
//   fetchImageGallery,
// };







