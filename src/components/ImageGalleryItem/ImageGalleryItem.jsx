import {
  GalleryItem,
  GalleryItemImage,
} from 'components/ImageGalleryItem/ImageGalleryItem.styled';

export const ImageGalleryItem = ({ id, webformatURL }) => {
  return (
    <GalleryItem key={id} className="gallery-item">
      <GalleryItemImage src={webformatURL} alt="" />
    </GalleryItem>
  );
};
