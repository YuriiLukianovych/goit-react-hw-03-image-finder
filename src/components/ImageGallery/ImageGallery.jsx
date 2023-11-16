import React from 'react';
import css from './ImageGallery.module.scss';
import ImageGalleryItem from 'components/ImageGalleryItem';

function ImageGallery() {
  return (
    <ul className={`${css.galleryList} list`}>
      {[...Array(12).keys()].map(el => {
        return <ImageGalleryItem />;
      })}
    </ul>
  );
}

export default ImageGallery;
