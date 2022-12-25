import React from "react";
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem'
// import css from "./ImageGallery.module.css";

export const ImageGallery = ({ items, ...otherProps }) => {
    return (
        <ul>
            {items.map(item => (
                <li key={item.id}>
                    <ImageGalleryItem items={items} {...otherProps}/>
                    {/* <p>
                        {item.link}
                    </p> */}
                </li>
            ))}
        </ul>
    )
}