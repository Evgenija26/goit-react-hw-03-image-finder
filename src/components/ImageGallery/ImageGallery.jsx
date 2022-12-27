import React from 'react'
import css from './ImageGallery.module.css';
import ImageItem from 'components/ImageItem/ImageItem';

export const ImageGallery = ({ images, largeImageUrl }) => {
  return (
    <ul className={css.ImageGallery}>
      {images.map(image => (
        <ImageItem key={image.id} image={image} largeImageUrl={largeImageUrl} />
      ))}
    </ul>
  )
};

export default ImageGallery


























// export default class ImageGallery extends Comment {
//   state = {
//     largeImageUrl: '',
//   }
//   render() {
//     const { images, largeImageUrl } = this.props;

//     return (
//       <ul className={css.ImageGallery}>
//         {images.map(image => (
//           <ImageItem key={image.id} image={image} largeImageUrl={largeImageUrl} />
//         ))}
//       </ul>
//     );
//   }
// }


