import React, { Component } from 'react';
import css from './App.module.scss';
import Header from 'components/Header';
import Footer from 'components/Footer';
import ImageGallery from 'components/ImageGallery';
import Loader from 'components/Loader';
import Button from 'components/Button';
import Modal from 'components/Modal';

export default class App extends Component {
  state = {
    isModalVisible: false,
  };

  openModal = () => {
    this.setState({
      isModalVisible: true,
    });
  };

  closeModal = () => {
    this.setState({
      isModalVisible: false,
    });
  };

  render() {
    return (
      <div className={css.app}>
        <Header />
        <div className={css.appBody}>
          <div className={`${css.container} container`}>
            <ImageGallery onOpenModal={this.openModal} />
            <Loader />
            <Button />
          </div>
        </div>
        <Footer />
        {this.state.isModalVisible && <Modal onCloseModal={this.closeModal} />}
      </div>
    );
  }
}
