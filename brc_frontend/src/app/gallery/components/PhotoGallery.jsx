"use client"; 

import React, { useState } from 'react';
import './PhotoGallery.css'
import { RxCross1 } from 'react-icons/rx';
import {BiLeftArrow} from 'react-icons/bi';
import {BiRightArrow} from 'react-icons/bi';
const img1 = "/PhotoGallery/img1.jpg"
const img2 = "/PhotoGallery/img2.jpg"
const img3 =  "/PhotoGallery/img3.jpg"
const img4=  "/PhotoGallery/img4.jpg"
const img5 =  "/PhotoGallery/img5.jpg"
const img6 =  "/PhotoGallery/img6.jpg"
const PhotoGallery = () => {
    let data=[
        {
            id :0,
            imgSrc : img1
        },
        {
            id:1,
            imgSrc:img2,
        },
        {
            id:2,
            imgSrc:img3,
        },
        {
            id:3,
            imgSrc:img4,
        },
        {
            id:4,
            imgSrc:img5,
        },
        {
            id:5,
            imgSrc:img6,
        },
    ]
  const [model, setModel]=useState(false);
  const [tempimgSrc, setTempImgSrc]=useState('');
  const[currentIndex, setCurrentIndex]=useState(0);

  const getImg=(item)=>{
    const newIndex= item.id
    setCurrentIndex(newIndex);
    setTempImgSrc(item.imgSrc);
    setModel(true);
    
    console.log(item.imgSrc+" "+currentIndex);

  }
  const goToPrevious=()=>{
    const isFirstSlide=currentIndex===0;
    const newIndex= isFirstSlide ? data.length -1 : currentIndex-1;
    setSlideImg(newIndex);
    console.log("new index prev "+newIndex);
    setCurrentIndex(newIndex);
  }
  const goToNext=()=>{
    const isLastSlide= currentIndex===data.length-1;
    const newIndex= isLastSlide ? 0: currentIndex+1;
    setSlideImg(newIndex);
    console.log("new index next "+newIndex);
    setCurrentIndex(newIndex);
    
    
  }
  const setSlideImg=(newIndex)=>{
    const imgSrc=data[newIndex].imgSrc;
    setTempImgSrc(imgSrc);
    console.log(currentIndex+" curr  "+tempimgSrc)
  }
  return (
    <div>
    <div class="flex justify-center align-middle font-bold p-5 my-2"><h1><span class="text-[25px] tracking-[2.5px]">Photo Gallery</span></h1></div>
    <div className={ model? "model open" : "model"}>
        <div class='fixed top-2/4 left-4 hover:bg-opacity-20 hover:bg-slate-300 bg-opacity-30 p-2 bg-slate-500 rounded-full z-50'><BiLeftArrow size={25} onClick={goToPrevious}/></div>
        <img src={tempimgSrc}/>
        <div class=' fixed top-2/4 rounded-full hover:bg-opacity-20 hover:bg-slate-300  bg-opacity-30  bg-slate-500 p-2 right-4 z-50'><BiRightArrow size={25} onClick={goToNext}/></div>
        <div className='crossicon'><RxCross1 size={20} class=" hover:opacity-50 text-center font-extrabold border-" onClick={()=>{setModel(false); setCurrentIndex(0)}}/></div>
        
    </div>
    <div className='gallery'>
        {data.map((item, index)=>{
            return(
                <div className='pics' key={index} onClick={()=>getImg(item)}>
                    <img src={item.imgSrc} alt="NA" style={{width : '100%', border:'5px'}}/>
                </div>
            )
        })}
        
    </div>
    
    
    </div>
    
  );
}

export default PhotoGallery;

