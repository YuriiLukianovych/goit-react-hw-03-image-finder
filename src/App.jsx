import React, { Component } from 'react';
import css from './App.module.scss';
import { ReactComponent as LogoIcon } from './assets/icons/search-svgrepo-com.svg';

export default class App extends Component {
  render() {
    return (
      <div className={css.app}>
        <div className={css.appHeader}>
          <div className={css.container}>
            <a className={css.logo} href="/">
              <LogoIcon width="36px" height="36px" fill="var(--yellow)" />
              <p className={css.txt}>
                <span>Image</span>
                <span>Finder</span>
              </p>
            </a>
          </div>
        </div>
        <div className={css.appBody}>
          <div className={css.container}>Body</div>
        </div>
        <div className={css.appFooter}>
          <div className={css.container}>
            <div className={css.sign}>
              <a
                className={css.footerLink}
                href="https://goit.global/ua/"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                GoIT
              </a>
              <span>2023</span>
            </div>
            <div className={css.sign}>
              <span>Developed by:</span>
              <a
                className={css.footerLink}
                href="https://github.com/YuriiLukianovych"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                Yurii Lukianovych
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
