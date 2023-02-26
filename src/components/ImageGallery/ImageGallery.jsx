import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

import { GalleryList } from 'components/ImageGallery/ImageGallery.styled';

export const ImageGallery = ({ images }) => {
  return (
    <GalleryList>
      {images.map(({ id, webformatURL, tags }) => (
        <ImageGalleryItem key={id} webformatURL={webformatURL} tags={tags} />
      ))}
    </GalleryList>
  );
};
