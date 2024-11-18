
import { Gallery, Item } from 'react-photoswipe-gallery';
import 'photoswipe/dist/photoswipe.css';

const CustomControlsGallery = () => {
  return (
    <Gallery>
      <Item
        original="https://via.placeholder.com/1200x800"
        thumbnail="https://via.placeholder.com/300x200"
        width="1200"
        height="800"
      >
        {({ ref, open }) => (
          <div>
            <button ref={ref} onClick={open} style={{ margin: '10px' }}>
              Open Image 1
            </button>
          </div>
        )}
      </Item>
      <Item
        original="https://via.placeholder.com/1200x800/FF0000"
        thumbnail="https://via.placeholder.com/300x200/FF0000"
        width="1200"
        height="800"
      >
        {({ ref, open }) => (
          <div>
            <button ref={ref} onClick={open} style={{ margin: '10px' }}>
              Open Image 2
            </button>
          </div>
        )}
      </Item>
    </Gallery>
  );
};

export default CustomControlsGallery;
