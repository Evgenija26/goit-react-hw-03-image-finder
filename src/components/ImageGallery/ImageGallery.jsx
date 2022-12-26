import React from 'react'
import css from './ImageGallery.module.css';
import ImageItem  from 'components/ImageItem/ImageItem';

export const ImageGallery = ({ items, ...otherProps }) => {
  return (
    <ul className={css.ImageGallery}>
      <ImageItem items={items} {...otherProps} />
    </ul>
  )
};


// export const ImageGallery = ({ images, onClick }) => {
//   return (
//     <ul className={css.ImageGallery}>
//       {images &&
//         images.map(image => (
//           <ImageItem key={image.id} >
//             <ImageItem
//               link={image.webformatURL}
//               tags={image.tags}
//               onClick={() => onClick(image.largeImageURL, image.tags)}
//             />
//           </ImageItem>
//         ))}
//     </ul>
//   );
// };
// const ImageGallery = ({ children }) => (
//     <ul className={css.ImageGallery}>
//         {children}
//     </ul>
// );

export default ImageGallery




// import React from "react";
// import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem'
// // import css from "./ImageGallery.module.css";






            // {images &&
            //    images.map(item => (
            //     <li key={item.id}>
                    
            //         {/* <p>
            //             {item.link}
            //         </p> */}
            //     </li>
            // ))}