import './App.css';
import BasicGallery from './components/BasicGallery';
import CustomControlsGallery from './components/CustomControlsGallery';
import DynamicGallery from './components/DynamicGallery';
import GalleryWithCaptions from './components/GalleryWithCaptions';

function App() {
  return (
    <div>
      <BasicGallery />
      <CustomControlsGallery/>
      <DynamicGallery/>
      <GalleryWithCaptions/>
    </div>
  );
}

export default App;
