import React from 'react';
import Routes from '../components/Routes';
import PhotoGallery from './components/PhotoGallery';

const GallerySection = () => {
  return (
    <div  class="bg-gradient-to-r from-indigo-950   to-purple-950" >
      <Routes/>
      
       
      <PhotoGallery/>
      
    </div>
  );
}

export default GallerySection;
// Gallery (Photos Gallery) Refer this: https://nextjsconf-pics.vercel.app/
//       ... (Open Image)