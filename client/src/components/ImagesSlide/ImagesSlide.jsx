import { Button } from '@mantine/core';
import React, { useState } from 'react';
// import { SliderData } from './SliderData';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

const ImageSlide = ({ images }) => {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(images) || images.length <= 0) {
    return null;
  }

  return (
    <section className='slider'>
      <img src={images[current]} alt={current} className='image' />
      <div className="buttonsDiv">
      <button className='arrow' onClick={prevSlide} > &lt; </button>
      <button className='arrow' onClick={nextSlide} >   &gt;   </button>

      </div>
    </section>
  );
};

export default ImageSlide;