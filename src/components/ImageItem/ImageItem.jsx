import React from "react";
import css from "./ImageItem.module.css";

export const ImageItem = ({ link, tags, onClick }) => {
  return (
  <>
      {images && items.map(item => (
    
        <li key={item.id} className={css.ImageItem}>
          <Image src={link} alt={tags} onClick={onClick} className={css.ImageItem-image} />
        </li>
      ))}
  </>
    
  );
};

{/* <li class="gallery-item">
  <img src="" alt="" />
</li> */}




// export const ImageItem = ({ items }) => {
    
//     return (
//         <ul>
//             
//         </ul>
//     );
// };




