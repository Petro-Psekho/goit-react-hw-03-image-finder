import {
  GalleryItem,
  GalleryItemImage,
} from 'components/ImageGalleryItem/ImageGalleryItem.styled';

export const ImageGalleryItem = ({ id, webformatURL, tags }) => {
  return (
    <GalleryItem key={id}>
      <GalleryItemImage src={webformatURL} alt={tags} />
    </GalleryItem>
  );
};
