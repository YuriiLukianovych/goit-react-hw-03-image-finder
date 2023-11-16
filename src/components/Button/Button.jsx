import React from 'react';
import css from './Button.module.scss';

function Button() {
  return (
    <button className={css.btn} type="button">
      Load more
    </button>
  );
}

export default Button;
