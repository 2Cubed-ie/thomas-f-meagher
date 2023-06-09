// import './Carousel.scss';
import { useState } from 'react';
import slider1 from '../../assets/s-p-sl-1.png';
import slider2 from '../../assets/s-p-sl-3.png';
import slider3 from '../../assets/slider-3.webp';
import arrowRight from '../../assets/arrow-right.svg';
import arrowLeft from '../../assets/arrow-left.svg';
import arrowBottom from '../../assets/arrow-bottom.svg';
import Link from 'next/link';

const CarouselSecond = () => {
  const [index, setIndex] = useState(0);
  const [startX, setStartX] = useState(0);
  const [isSwiping, setIsSwiping] = useState(false);

  const mod = (n: any, m: any) => {
    const result = n % m;

    return result >= 0 ? result : result + m;
  };

  const handleTouchStart = (event: any) => {
    setStartX(event.touches[0].clientX);
    setIsSwiping(true);
  };

  const handleTouchMove = (event) => {
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
      id: '1',
      image: slider1,
      title: 'Let’s Take a look at the History of Thomas F. Meagher and The Irish flag',
      // eslint-disable-next-line max-len
      caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra aliquam leo, vel vestibulum leo tempor eu. Mauris dolor erat, convallis et aliquet et, efficitur mollis eros. Cras fringilla, ligula convallis ultricies accumsan, dui lacus malesuada mauris.',
    },
    {
      id: '2',
      image: slider2,
      title: 'History of the flags used in Ireland',
      // eslint-disable-next-line max-len
      caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra aliquam leo, vel vestibulum leo tempor eu. Mauris dolor erat, convallis et aliquet et, efficitur mollis eros. Cras fringilla, ligula convallis ultricies accumsan, dui lacus malesuada mauris.',
    },
    {
      id: '3',
      image: slider3,
      title: 'What the Irish flag means to me',
      // eslint-disable-next-line max-len
      caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra aliquam leo, vel vestibulum leo tempor eu. Mauris dolor erat, convallis et aliquet et, efficitur mollis eros. Cras fringilla, ligula convallis ultricies accumsan, dui lacus malesuada mauris.',
    },
  ];

  const timeline = [1890, 2023];
  const timelineDecades = [];

  for (let i = timeline[0]; i <= timeline[1]; i++) {
    if(i % 10 === 0){
      timelineDecades.push(i);
    }
  }

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
      {timelineDecades.map((item, i) => {
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
          <div key={item}>
            <div className={className}>
              <div>
                <h3 className="card--title">
                  {item}
                  {/* <img src={arrowBottom.src} alt="" /> */}
                </h3>
                
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

export default CarouselSecond;
