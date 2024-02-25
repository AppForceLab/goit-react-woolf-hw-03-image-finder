import React from 'react';

class ImageGalleryItem extends React.Component {
  handleClick = () => {
    this.props.openLightbox(this.props.image.largeImageURL);
  };

  render() {
    const { image } = this.props;
    return (
      <li className="ImageGalleryItem" onClick={this.handleClick}>
        <img
          src={image.webformatURL}
          alt=""
          className="ImageGalleryItem-image"
        />
      </li>
    );
  }
}

export default ImageGalleryItem;
