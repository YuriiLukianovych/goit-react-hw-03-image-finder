import React, { Component } from 'react';
import css from './App.module.scss';
import Header from 'components/Header';
import Footer from 'components/Footer';
import ImageGallery from 'components/ImageGallery';
import Loader from 'components/Loader';
import Button from 'components/Button';
import Modal from 'components/Modal';
import fetchImages from './services/api';

export default class App extends Component {
  state = {
    isModalVisible: false,
    isLoadMoreButtonVisible: true,
    isLoading: false,
    galleryList: null,
    selectedId: null,
    searchQuery: null,
  };

  componentDidMount() {
    this.getImages();
  }

  openModal = id => {
    this.setState({
      isModalVisible: true,
      selectedId: id,
    });
  };

  closeModal = () => {
    this.setState({
      isModalVisible: false,
      selectedId: null,
    });
  };

  getImages = async () => {
    try {
      this.setState({
        isLoading: true,
      });
      const images = await fetchImages();
      this.setState({
        galleryList: images,
      });

      console.log(images);
    } catch (error) {
    } finally {
      this.setState({
        isLoading: false,
      });
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log('event onSubmit', e.target.elements.search.value);
    e.target.reset();
  };

  render() {
    return (
      <div className={css.app}>
        <Header handleSubmit={this.handleSubmit} />
        <div className={css.appBody}>
          <div className={`${css.container} container`}>
            {this.state.galleryList && (
              <ImageGallery
                images={this.state.galleryList}
                onOpenModal={this.openModal}
              />
            )}
            {this.state.isLoading && <Loader />}
            {this.state.isLoadMoreButtonVisible && this.state.galleryList && (
              <Button />
            )}
          </div>
        </div>
        <Footer />
        {this.state.isModalVisible && (
          <Modal
            id={this.state.selectedId}
            searchQuery={this.state.searchQuery}
            onCloseModal={this.closeModal}
          />
        )}
      </div>
    );
  }
}
