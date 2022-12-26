import React from 'react'

const ImageGallery = ({ children }) => (
    <ul className={styles.imageGallery}>
        {children}
    </ul>
);

export default ImageGallery




// import React from "react";
// import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem'
// // import css from "./ImageGallery.module.css";

// export const ImageGallery = ({ items, ...otherProps }) => {
//   return (
//     <ul>
//       <ImageGalleryItem items={items} {...otherProps} />
//     </ul>
//   )
// };

// export const ImageGallery = ({ images, onClick }) => {
//   return (
//     <ImageGallery className={css.ImageGallery}>
//       {images &&
//         images.map(image => (
//           <GalleryItem key={image.id} >
//             <ImageGalleryItem
//               link={image.webformatURL}
//               tags={image.tags}
//               onClick={() => onClick(image.largeImageURL, image.tags)}
//             />
//           </GalleryItem>
//         ))}
//     </ImageGallery>
//   );
// };


            // {images &&
            //    images.map(item => (
            //     <li key={item.id}>
                    
            //         {/* <p>
            //             {item.link}
            //         </p> */}
            //     </li>
            // ))}