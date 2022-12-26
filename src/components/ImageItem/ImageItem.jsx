import React from "react";
import css from "./ImageItem.module.css";

export const ImageItem = ({ images, items, link, tags, onClick }) => {
  return (
  <>
      {images && items.map(item => (
        <li key={item.id} className={css.ImageItem}>
          <image src={link} alt={tags} onClick={onClick} className={css.ImageItem__image} />
        </li>
      ))}
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




