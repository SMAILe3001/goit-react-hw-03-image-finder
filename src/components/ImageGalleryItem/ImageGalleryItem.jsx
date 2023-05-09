import CSS from './ImageGalleryItem.module.css';

export function ImageGalleryItem({ images }) {
  return (
    <>
      {images.map(({ id, previewURL, tags }) => (
        <li className={CSS.imageGalleryItem} key={id}>
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
