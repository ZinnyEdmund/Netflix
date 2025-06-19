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

const images = [straw, KO, ginnyandgeorgina, exterritorial, lovestory, Havoc, sikandar, dear, lastbullet, wednesday]

const Categories = () => {
  const [position, setPosition] = useState(0);
  const visibleSlides = 5;
  const slideWidth = 210; // 200px + 10px margin
  const maxPosition = images.length - visibleSlides;

  const moveSlide = (direction : number) => {
    // let newPosition = position + direction;
    // if (newPosition < 0) newPosition = 0;
    // if (newPosition > maxPosition) newPosition = maxPosition;
    if (direction < 0) setPosition(0)
      if (direction > maxPosition) setPosition(maxPosition)
    setPosition(direction);
  };

  return (
    <div className="slider-container">
      <button className="slider-btn left" onClick={() => moveSlide(-5)}><MdArrowBackIos color='white' size={50}/></button>

      <div className="slider">
        <div 
          className="slide-track" 
          style={{ transform: `translateX(${-position * slideWidth}px)` }}>
          {images.map((src, index) => (
            <img key={index} src={src} alt={`Slide ${index + 1}`} className="slide" />
          ))}
        </div>
      </div>

      <button className="slider-btn right" onClick={() => moveSlide(5)}><MdArrowForwardIos color='white' size={50}/></button>
    </div>
  );
};



export default Categories