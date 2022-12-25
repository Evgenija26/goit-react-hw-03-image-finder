// import React from "react";
// import css from "./ImageGalleryItem.module.css";

export const ImageGalleryItem = ({ items }) => {
    
    return (
        <ul>
            {items.map(item => (
                <li key={item.id}>

                </li>
            ))}
        </ul>
    );
};




