import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem';
import { Button } from 'components/Button';
import { Loader } from 'components/Loader';
import CSS from './ImageGallery.module.css';

export function ImageGallery({
  pistures,
  onClick,
  totalHits,
  isLoading,
  ...andOther
}) {
  return (
    <>
      <ul className={CSS.imageGallery}>
        <ImageGalleryItem images={pistures} {...andOther} />
      </ul>
      <Loader visible={isLoading} />
      {totalHits > pistures.length && !isLoading && (
        <Button onClick={onClick} />
      )}
    </>
  );
}

ImageGallery.propType = {
  pistures: PropTypes.array,
  onClick: PropTypes.func,
  totalHits: PropTypes.number,
  isLoading: PropTypes.func,
  toggleModal: PropTypes.func,
  contentModal: PropTypes.func,
};
