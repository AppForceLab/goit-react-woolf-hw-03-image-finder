import React from 'react';
import axios from 'axios';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import { Fancybox } from '@fancyapps/ui';
import Loader from './Loader/Loader';
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
    const key = '36804673-b7c86e83fae38f10ed9b56d3d';
    const url = `https://pixabay.com/api/?q=${encodeURIComponent(
      searchTerm
    )}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`;

    this.setState({ loading: true });

    try {
      const {hits,totalHits} = (await axios.get(url)).data;
      const images = hits;
      this.setState(prevState => ({
        images: page === 1 ? images : [...prevState.images, ...images],
        loading: false,
        showButton: Math.ceil(totalHits / 12) <= page ? true : false,
      }));
    } catch (error) {
      console.error('Error fetching images:', error);
      this.setState({ loading: false });
    }
  };

  handleSearchSubmit = searchTerm => {
    this.setState({ searchTerm, currentPage: 1 });
  };

  handleLoadMore = () => {
    this.setState(prevState => ({ currentPage: prevState.currentPage + 1 }));
  };

  render() {
    const { images, loading,showButton } = this.state;
    return (
      <div className="App">
        <Searchbar onSubmit={this.handleSearchSubmit} />
        <ImageGallery images={images} openLightbox={this.openLightbox} />
        {loading && <Loader />}
        {images.length > 0 && !loading && !showButton &&(
          <Button onClick={this.handleLoadMore} />
        )}
      </div>
    );
  }
}

export default App;
