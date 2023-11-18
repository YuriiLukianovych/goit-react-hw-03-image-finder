import React from 'react';
import css from './ErrorDiv.module.scss';

function ErrorDiv({ errorMessage }) {
  return <div className={css.error}>{errorMessage}</div>;
}

export default ErrorDiv;
