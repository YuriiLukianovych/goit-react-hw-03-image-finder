import React, { Component } from 'react';
import css from './App.module.scss';
import Header from 'components/Header';
import Footer from 'components/Footer';
import ImageGallery from 'components/ImageGallery';
import Loader from 'components/Loader';
import Button from 'components/Button';
import Modal from 'components/Modal';

export default class App extends Component {
  render() {
    return (
      <div className={css.app}>
        <Header />
        <div className={css.appBody}>
          <div className={`${css.container} container`}>
            <ImageGallery />
            <Loader />
            <Button />
          </div>
        </div>
        <Footer />
        <Modal />
      </div>
    );
  }
}
