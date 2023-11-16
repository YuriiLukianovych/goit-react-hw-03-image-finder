import React from 'react';
import css from './ImageGalleryItem.module.scss';

function ImageGalleryItem({ onOpenModal }) {
  return (
    <li className={css.galleryItem}>
      <span>Lorem ipsum dolor sit amet.</span>
      <button type="button" onClick={onOpenModal}>
        Open Modal
      </button>
    </li>
  );
}

export default ImageGalleryItem;
