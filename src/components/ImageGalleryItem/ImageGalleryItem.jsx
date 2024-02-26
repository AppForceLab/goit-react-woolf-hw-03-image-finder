import React from 'react';

const ImageGalleryItem = ({ image, openLightbox }) => {
  const handleClick = () => {
    openLightbox(image.largeImageURL);
  };

  return (
    <li className="ImageGalleryItem" onClick={handleClick}>
      <img src={image.webformatURL} alt="" className="ImageGalleryItem-image" />
    </li>
  );
};

export default ImageGalleryItem;
