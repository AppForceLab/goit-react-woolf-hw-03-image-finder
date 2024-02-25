import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

class ImageGallery extends React.Component {
  render() {
    const { images, openLightbox } = this.props;
    return (
      <ul className="ImageGallery">
        {images.map(image => (
          <ImageGalleryItem
            key={image.id}
            image={image}
            openLightbox={openLightbox}
          />
        ))}
      </ul>
    );
  }
}

export default ImageGallery;
