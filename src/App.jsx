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
    selectedImageURL: null,
    searchQuery: null,
  };

  componentDidMount() {
    // this.getImages();
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.searchQuery &&
      prevState.searchQuery !== this.state.searchQuery
    ) {
      this.getImages();
    }
  }

  openModal = largeImageURL => {
    this.setState({
      isModalVisible: true,
      selectedImageURL: largeImageURL,
    });
  };

  closeModal = () => {
    this.setState({
      isModalVisible: false,
      selectedImageURL: null,
    });
  };

  getImages = async () => {
    try {
      this.setState({
        isLoading: true,
      });
      const images = await fetchImages(this.state.searchQuery);
      this.setState({
        galleryList: images.hits,
      });

      console.log('API -> ', images);
    } catch (error) {
    } finally {
      this.setState({
        isLoading: false,
      });
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    const searchQueryInput = e.target.elements.search.value;
    this.setState({
      searchQuery: searchQueryInput,
    });
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
            imageURL={this.state.selectedImageURL}
            onCloseModal={this.closeModal}
          />
        )}
      </div>
    );
  }
}
