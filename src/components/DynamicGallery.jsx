
import { Gallery, Item } from 'react-photoswipe-gallery';
import 'photoswipe/dist/photoswipe.css';

const imageData = [
  {
    original: 'https://via.placeholder.com/1200x800',
    thumbnail: 'https://via.placeholder.com/300x200',
    width: 1200,
    height: 800,
    caption: 'Dynamic Image 1',
  },
  {
    original: 'https://via.placeholder.com/1200x800/FF0000',
    thumbnail: 'https://via.placeholder.com/300x200/FF0000',
    width: 1200,
    height: 800,
    caption: 'Dynamic Image 2',
  },
];

const DynamicGallery = () => {
  return (
    <Gallery>
      {imageData.map((img, index) => (
        <Item
          key={index}
          original={img.original}
          thumbnail={img.thumbnail}
          width={img.width}
          height={img.height}
          caption={img.caption}
        >
          {({ ref, open }) => (
            <img
              ref={ref}
              onClick={open}
              src={img.thumbnail}
              alt={`Dynamic ${index + 1}`}
              style={{ cursor: 'pointer', margin: '10px' }}
            />
          )}
        </Item>
      ))}
    </Gallery>
  );
};

export default DynamicGallery;
