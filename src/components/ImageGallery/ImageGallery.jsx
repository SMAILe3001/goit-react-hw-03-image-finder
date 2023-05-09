import { ImageGalleryItem } from 'components/ImageGalleryItem';
import { Button } from 'components/Button';
import { Loader } from 'components/Loader';
import CSS from './ImageGallery.module.css';

export function ImageGallery({ pistures, onClick, totalHits, isLoading }) {
  return (
    <>
      <ul className={CSS.imageGallery}>
        <ImageGalleryItem images={pistures} />
      </ul>
      <Loader visible={isLoading} />
      {totalHits > pistures.length && !isLoading && (
        <Button onClick={onClick} />
      )}
    </>
  );
}
