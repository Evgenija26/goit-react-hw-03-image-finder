import React from "react";
import css from "./ImageItem.module.css";

export const ImageItem = ({ image, onClick }) => {
  return (
  <>
        <li  className={css.ImageItem}>
        <img
          src={image.webformatURL}
          alt={image.tags}
          onClick={onClick}
          className={css.ImageItem__image} />
        </li>
  </>
    
  );
};

export default ImageItem





// export const ImageItem = ({ items }) => {
    
//     return (
//         <ul>
//             
//         </ul>
//     );
// };




