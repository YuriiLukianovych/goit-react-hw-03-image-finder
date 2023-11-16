import React, { Component } from 'react';
import css from './Searchbar.module.scss';
import { BsSearch } from 'react-icons/bs';

export default class Searchbar extends Component {
  render() {
    return (
      <form className={css.searchForm}>
        <button className={css.searchBtn} type="submit">
          <BsSearch className={css.searchIcon} />
        </button>
        <input
          className={css.searchInput}
          type="text"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
        />
      </form>
    );
  }
}
