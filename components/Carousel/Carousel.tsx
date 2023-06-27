// import './Carousel.scss';
import { useState } from 'react';
import slider1 from '../../assets/s-p-sl-1.png';
import slider2 from '../../assets/s-p-sl-3.png';
import slider3 from '../../assets/slider-3.webp';
import arrowBottom from '../../assets/arrow-bottom.svg';
import Link from 'next/link';
import Image from 'next/image';

const Carousel = (sliderData: any) => {
  const [index, setIndex] = useState(0);
  const [startX, setStartX] = useState(0);
  const [isSwiping, setIsSwiping] = useState(false);

  console.log('sliderData=>', sliderData.sliderData);
  

  const mod = (n: any, m: any) => {
    const result = n % m;

    return result >= 0 ? result : result + m;
  };

  const handleTouchStart = (event: any) => {
    setStartX(event.touches[0].clientX);
    setIsSwiping(true);
  };

  const handleTouchMove = (event: any) => {
    if (!isSwiping) return;
    const currentX = event.touches[0].clientX;
    const diff = startX - currentX;
    const threshold = 50; // adjust this value to control swipe sensitivity

    if (diff > threshold) {
      // swipe left
      setIndex((index + 1) % cards.length);
    } else if (diff < -threshold) {
      // swipe right
      setIndex(mod(index - 1, cards.length));
    }

    setIsSwiping(false);
  };

  const cards = [
      {
      id: sliderData.sliderData.firstSliderImage.id,
      image: sliderData.sliderData.firstSliderImage.mediaItemUrl,
      title: sliderData.sliderData.firstSliderTitle,
      // eslint-disable-next-line max-len
      link: sliderData.sliderData.firstSliderLink,
    },
    {
      id: sliderData.sliderData.secondSliderImage.id,
      image: sliderData.sliderData.secondSliderImage.mediaItemUrl,
      title: sliderData.sliderData.secondSliderTitle,
      // eslint-disable-next-line max-len
      link: sliderData.sliderData.secondSliderLink,
    },
    {
      id: sliderData.sliderData.thirdSliderImage.id,
      image: sliderData.sliderData.thirdSliderImage.mediaItemUrl,
      title: sliderData.sliderData.thirdSliderTitle,
      // eslint-disable-next-line max-len
      link: sliderData.sliderData.thirdSliderLink,
    },
  ]

  console.log(arrowBottom);
  

  return (
    <div
      className="carousel"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      {/* <div className="header">
        <h1 className="header--title">Welcome to the Ireland flag Institute</h1>
      </div> */}
      {cards.map((item, i) => {
        const indexLeft = mod(index - 1, cards.length);
        const indexRight = mod(index + 1, cards.length);

        let className = 'card';

        if (i === index) {
          className = 'card card--active';
        } else if (i === indexRight) {
          className = 'card card--right';
        } else if (i === indexLeft) {
          className = 'card card--left';
        } else {
          className = 'card';
        }

        return (
          <div key={item.id}>
            <div className={className}>
              <div>
                <h3 className="card--title">
                  {item.title}
                  <img src={arrowBottom.src} alt="" />
                </h3>
                
              </div>
              <Image
                className="card--image"
                src={item.image}
                alt={item.title}
                width={858}
                height={858}
              />
              
                <div className="second-page-block-btn">
                  <Link className="btn-primary" href={item.link}>
                    take a look
                  </Link>
                </div>
            </div>
          </div>
        );
      })}
      {/* <span
        onClick={() => setIndex(mod(index - 1, cards.length))}
        className="nav nav--prev"
      >
        <img src={arrowLeft.src} alt="arrow left" className="nav--icon" />
        Previous
      </span>
      <span
        onClick={() => setIndex((index + 1) % cards.length)}
        className="nav nav--next"
      >
        Next
        <img src={arrowRight} alt="arrow right" className="nav--icon" />
      </span> */}
    </div>
  );
};

export default Carousel;
