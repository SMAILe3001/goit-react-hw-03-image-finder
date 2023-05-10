import PropTypes from 'prop-types';
import CSS from './ImageGalleryItem.module.css';

export function ImageGalleryItem({ images, toggleModal, contentModal }) {
  return (
    <>
      {images.map(({ id, previewURL, webformatURL, tags }) => (
        <li
          className={CSS.imageGalleryItem}
          key={id}
          onClick={() => {
            contentModal(webformatURL, tags);
            toggleModal();
          }}
        >
          <img
            className={CSS.imageGalleryItemImage}
            src={previewURL}
            alt={tags}
          />
        </li>
      ))}
    </>
  );
}

ImageGalleryItem.propType = {
  images: PropTypes.string,
  toggleModal: PropTypes.func,
  contentModal: PropTypes.func,
};
