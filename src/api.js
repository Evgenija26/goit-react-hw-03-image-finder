import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

const API_KEY = '30732924-fda9e7f6c6adece0421e92fce';
export const perPage = 12;

export const getImagesItem = async (values, query, page) => {
  const response = await axios.get(`?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`, values);
  return response.data;
};

export const addImagesItem = async (query, page) => {
  const response = await axios.post(`?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`);
  return response.data;
};

// axios.defaults.baseURL = 'https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12';
// export const getImages = async (query, page) => {
//   const response = await axios.get(
//     `?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`
//   );
//   return response.data;
// };

// 
// export const perPage = 12;




// export const fetchImageGallery = async searchQuery => {
//   const response = axios.get(`/search?query=${searchQuery}`);
//   return response.data.hits;
// };

// export default {
//   fetchImageGallery,
// };







