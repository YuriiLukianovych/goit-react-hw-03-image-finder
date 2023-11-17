import React from 'react';
import css from './ImageGalleryItem.module.scss';

function ImageGalleryItem({ image, onOpenModal }) {
  const { id, title, body } = image;
  return (
    <li className={css.galleryItem} onClick={() => onOpenModal(id)}>
      <h4>{title}</h4>
      <p>{body}</p>
    </li>
  );
}

export default ImageGalleryItem;
