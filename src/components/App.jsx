import React from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import { Fancybox } from '@fancyapps/ui';
import Loader from './Loader/Loader';
import fetchImagesFromApi from 'api/api';
import '@fancyapps/ui/dist/fancybox/fancybox.css';
import './App.css';

class App extends React.Component {
  state = {
    images: [],
    currentPage: 1,
    searchTerm: '',
    loading: false,
    showModal: false,
    modalImageSrc: '',
    showButton: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.searchTerm !== this.state.searchTerm ||
      prevState.currentPage !== this.state.currentPage
    ) {
      this.fetchImages(this.state.searchTerm, this.state.currentPage);
    }
  }

  openLightbox = imageSrc => {
    Fancybox.show([{ src: imageSrc, type: 'image' }]);
  };

  fetchImages = async (searchTerm, page = 1) => {
    this.setState({ loading: true });

    try {
      const { hits, totalHits } = await fetchImagesFromApi(searchTerm, page);
      this.setState(prevState => ({
        images: [...prevState.images, ...hits],
        loading: false,
        showButton: page < Math.ceil(totalHits / 12),
      }));
    } catch (error) {
      console.error('Error fetching images:', error);
      this.setState({ loading: false });
    }
  };

  handleSearchSubmit = searchTerm => {
    this.setState({ searchTerm, currentPage: 1, images: [] });
  };

  handleLoadMore = () => {
    this.setState(prevState => ({ currentPage: prevState.currentPage + 1 }));
  };

  render() {
    const { images, loading, showButton } = this.state;
    return (
      <div className="App">
        <Searchbar onSubmit={this.handleSearchSubmit} />
        <ImageGallery images={images} openLightbox={this.openLightbox} />
        {loading && <Loader />}
        {showButton && (
          <Button onClick={this.handleLoadMore} />
        )}
      </div>
    );
  }
}

export default App;
