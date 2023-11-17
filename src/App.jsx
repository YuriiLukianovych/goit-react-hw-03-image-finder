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
    isLoading: false,
    galleryList: null,
    selectedImageURL: null,
    searchQuery: null,
    page: 1,
    totalHits: 0,
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      (this.state.searchQuery &&
        prevState.searchQuery !== this.state.searchQuery) ||
      prevState.page !== this.state.page
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
      const images = await fetchImages(this.state.searchQuery, this.state.page);

      if (this.state.galleryList) {
        this.setState(prevState => {
          return {
            galleryList: [...prevState.galleryList, ...images.hits],
            totalHits: images.totalHits,
          };
        });
      } else {
        this.setState({
          galleryList: images.hits,
          totalHits: images.totalHits,
        });
      }
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

    if (this.state.searchQuery === searchQueryInput) {
      return;
    }
    this.setState({
      searchQuery: searchQueryInput,
      galleryList: null,
      page: 1,
    });

    // e.target.reset();
  };

  loadMore = () => {
    this.setState(prevState => {
      return { page: prevState.page + 1 };
    });
  };

  render() {
    const isLoadMoreButtonVisible =
      this.state.page < Math.ceil(this.state.totalHits / 12);
    return (
      <div className={css.app}>
        <Header handleSubmit={this.handleSubmit} />
        <div className={css.appBody}>
          <div className={`${css.container} container`}>
            {/* Image Gallery */}
            {this.state.galleryList && (
              <ImageGallery
                images={this.state.galleryList}
                onOpenModal={this.openModal}
              />
            )}

            {/* Loader */}
            {this.state.isLoading && <Loader />}

            {/* Button */}
            {this.state.galleryList && (
              <Button
                onClick={this.loadMore}
                disabled={!isLoadMoreButtonVisible}
              />
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
