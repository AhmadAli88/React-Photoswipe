
import { Gallery, Item } from 'react-photoswipe-gallery';
import 'photoswipe/dist/photoswipe.css';

const GalleryWithCaptions = () => {
  return (
    <Gallery>
      <Item
        original="https://via.placeholder.com/1200x800"
        thumbnail="https://via.placeholder.com/300x200"
        width="1200"
        height="800"
        caption="This is the first image caption"
      >
        {({ ref, open }) => (
          <img
            ref={ref}
            onClick={open}
            src="https://via.placeholder.com/300x200"
            alt="First Image"
            style={{ cursor: 'pointer', margin: '10px' }}
          />
        )}
      </Item>
      <Item
        original="https://via.placeholder.com/1200x800/FF0000"
        thumbnail="https://via.placeholder.com/300x200/FF0000"
        width="1200"
        height="800"
        caption="This is the second image caption"
      >
        {({ ref, open }) => (
          <img
            ref={ref}
            onClick={open}
            src="https://via.placeholder.com/300x200/FF0000"
            alt="Second Image"
            style={{ cursor: 'pointer', margin: '10px' }}
          />
        )}
      </Item>
    </Gallery>
  );
};

export default GalleryWithCaptions;
