import { useState } from "react";
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import "./Categories.css";
import Squid from "../../Images/Squid.jpg";
import Straw from "../../Images/Straw.jpg";
import untildawn from "../../Images/untildawn.webp";
import ginny from "../../Images/ginny.webp";
import territorial from "../../Images/territorial.jpg";
import lovestory from "../../Images/lovestory.jpg";
import havoc from "../../Images/havoc.jpg";
import sandman from "../../Images/sandman.jpg";
import stranger from "../../Images/stranger.jpg";
import kraven from "../../Images/kraven.jpg";
import wednesday from "../../Images/wednesday.jpg";

const Categories = () => {
  const [position, setPosition] = useState(0);
  const visibleSlides = 5;
  const slideWidth = 185; // Margin
  const images = [
    Squid,
    Straw,
    untildawn,
    ginny,
    territorial,
    lovestory,
    havoc,
    sandman,
    stranger,
    kraven,
    wednesday,
  ];
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
    <section>
      <div className="trending-header">
        <h1>Trending Now</h1>
      </div>
      <div className="slider-container">
        {position > 0 && (
          <button className="slider-btn left" onClick={() => moveSlide(-2)}>
            <MdArrowBackIos color="white" size={20} />
          </button>
        )}

        <div className="slider">
          <div
            className="slide-track"
            style={{ transform: `translateX(${-position * slideWidth}px)` }}
          >
            {images.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Slide ${index + 1}`}
                className="slide"
              />
            ))}
          </div>
        </div>

        {position < maxPosition && (
          <button className="slider-btn right" onClick={() => moveSlide(2)}>
            <MdArrowForwardIos color="white" size={20} />
          </button>
        )}
      </div>
    </section>
  );
};

export default Categories;
