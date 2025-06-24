import { useState  } from 'react'
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import './Categories.css'
import straw from '../../Images/straw.webp'
import KO  from '../../Images/KO.webp'
import ginnyandgeorgina from '../../Images/ginnyandgeorgina.jpg'
import exterritorial from '../../Images/exterritorial.jpg'
import lovestory from '../../Images/lovestory.jpg'
import Havoc from '../../Images/Havoc.jpg'
import sikandar from '../../Images/sikandar.jpg'
import dear from '../../Images/dear.jpg'
import lastbullet from '../../Images/lastbullet.jpg'
import wednesday from '../../Images/wednesday.jpg'


const Categories = () => {
  const [position, setPosition] = useState(0);
  const visibleSlides = 5;
  const slideWidth = 260; // 290px + 10px margin
  const images = [straw, KO, ginnyandgeorgina, exterritorial, lovestory, Havoc, sikandar, dear, lastbullet, wednesday, ];
  // Calculate the maximum position based on the number of images and visible slides
  // If there are fewer images than visible slides, maxPosition will be 0
  const maxPosition = images.length - visibleSlides;

  
  

  const moveSlide = (direction: number) => {
    let newPosition = position + direction;

    // clamp position between 0 and maxPosition
    if (newPosition < 0) newPosition = 0;
    if (newPosition > maxPosition) newPosition = maxPosition;

    setPosition(newPosition);
  };

  return (
    <div className="slider-container">
      <button className="slider-btn left" onClick={() => moveSlide(-5)}>
        <MdArrowBackIos color='white' size={50} />
      </button>

      <div className="slider">
        <div
          className="slide-track"
          style={{ transform: `translateX(${-position * slideWidth}px)` }}
        >
          {images.map((src, index) => (
            <img key={index} src={src} alt={`Slide ${index + 5}`} className="slide" />
          ))}
        </div>
      </div>

      <button className="slider-btn right" onClick={() => moveSlide(1)}>
        <MdArrowForwardIos color='white' size={50} />
      </button>
    </div>
  );
};

export default Categories;
