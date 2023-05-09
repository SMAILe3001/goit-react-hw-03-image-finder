import { ImageGalleryItem } from 'components/ImageGalleryItem';
import { Button } from 'components/Button';
import { baseSearchParams } from 'servises/params';
import CSS from './ImageGallery.module.css';

export function ImageGallery({ pistures, onClick }) {
  return (
    <>
      <ul className={CSS.imageGallery}>
        <ImageGalleryItem images={pistures} />
      </ul>
      {pistures.length >= baseSearchParams.per_page && (
        <Button onClick={onClick} />
      )}
    </>
  );
}
