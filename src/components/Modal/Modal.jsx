import React from 'react';
import css from './Modal.module.scss';

function Modal() {
  return (
    <div className={css.overlay}>
      <div className={css.modal}></div>
    </div>
  );
}

export default Modal;
