
import { Gallery, Item } from 'react-photoswipe-gallery';
import 'photoswipe/dist/photoswipe.css';

const BasicGallery = () => {
  return (
    <Gallery>
      <Item
        original="https://via.placeholder.com/1200x800"
        thumbnail="https://via.placeholder.com/300x200"
        width="1200"
        height="800"
      >
        {({ ref, open }) => (
          <img
            ref={ref}
            onClick={open}
            src="https://via.placeholder.com/300x200"
            alt="Sample"
            style={{ cursor: 'pointer', margin: '10px' }}
          />
        )}
      </Item>
      <Item
        original="https://via.placeholder.com/1200x800/FF0000"
        thumbnail="https://via.placeholder.com/300x200/FF0000"
        width="1200"
        height="800"
      >
        {({ ref, open }) => (
          <img
            ref={ref}
            onClick={open}
            src="https://via.placeholder.com/300x200/FF0000"
            alt="Sample 2"
            style={{ cursor: 'pointer', margin: '10px' }}
          />
        )}
      </Item>
    </Gallery>
  );
};

export default BasicGallery;
