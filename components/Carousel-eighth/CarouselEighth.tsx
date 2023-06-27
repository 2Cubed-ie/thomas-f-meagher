// import './Carousel.scss';
import { useState } from 'react';
import slider1 from './img/magazine-1.png';
import slider2 from './img/magazine-2.png';
import slider3 from './img/magazine-3.png';
import arrowBottom from '../../assets/arrow-bottom.svg';
import Link from 'next/link';
import Ninth from '@/pages/ninth';
import Image from 'next/image';

const CarouselEighth = ({
  magazines,
  setCurrentMagazine
}: any) => {
  const [index, setIndex] = useState(0);
  const [startX, setStartX] = useState(0);
  const [isSwiping, setIsSwiping] = useState(false);
  // const [currentMagazine, setCurrentMagazine] = useState();

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
      setIndex((index + 1) % magazines.length);
    } else if (diff < -threshold) {
      // swipe right
      setIndex(mod(index - 1, magazines.length));
    }

    setIsSwiping(false);
  };

  // const cards = [
  //   {
  //     id: '1',
  //     image: slider1,
  //     title: 'Let’s Take a look at the History of Thomas F. Meagher and The Irish flag',
  //     // eslint-disable-next-line max-len
  //     caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra aliquam leo, vel vestibulum leo tempor eu. Mauris dolor erat, convallis et aliquet et, efficitur mollis eros. Cras fringilla, ligula convallis ultricies accumsan, dui lacus malesuada mauris.',
  //     link: '/third',
  //   },
  //   {
  //     id: '2',
  //     image: slider2,
  //     title: 'History of the flags used in Ireland',
  //     // eslint-disable-next-line max-len
  //     caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra aliquam leo, vel vestibulum leo tempor eu. Mauris dolor erat, convallis et aliquet et, efficitur mollis eros. Cras fringilla, ligula convallis ultricies accumsan, dui lacus malesuada mauris.',
  //     link: '/fifth',
  //   },
  //   {
  //     id: '3',
  //     image: slider3,
  //     title: 'What the Irish flag means to me',
  //     // eslint-disable-next-line max-len
  //     caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra aliquam leo, vel vestibulum leo tempor eu. Mauris dolor erat, convallis et aliquet et, efficitur mollis eros. Cras fringilla, ligula convallis ultricies accumsan, dui lacus malesuada mauris.',
  //     link: '/fourth',
  //   },
  //   {
  //     id: '4',
  //     image: slider2,
  //     title: 'History of the flags used in Ireland',
  //     // eslint-disable-next-line max-len
  //     caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra aliquam leo, vel vestibulum leo tempor eu. Mauris dolor erat, convallis et aliquet et, efficitur mollis eros. Cras fringilla, ligula convallis ultricies accumsan, dui lacus malesuada mauris.',
  //     link: '/fifth',
  //   },

  //   {
  //     id: '5',
  //     image: slider3,
  //     title: 'What the Irish flag means to me',
  //     // eslint-disable-next-line max-len
  //     caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra aliquam leo, vel vestibulum leo tempor eu. Mauris dolor erat, convallis et aliquet et, efficitur mollis eros. Cras fringilla, ligula convallis ultricies accumsan, dui lacus malesuada mauris.',
  //     link: '/fourth',
  //   },
  // ];

  // console.log('currentMagazine->', currentMagazine);
  

  return (
    <div
      className="carousel carousel-magazines"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      {/* <div className="header">
        <h1 className="header--title">Welcome to the Ireland flag Institute</h1>
      </div> */}
      {magazines.map((magazine: any, i: any) => {
        const indexLeft = mod(index - 1, magazines.length);
        const indexRight = mod(index + 1, magazines.length);

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
          <div 
            key={magazine.id}
            // onClick={() => setCurrentMagazine(magazine)}
            onClick={(e) => {
              e.preventDefault();
              setCurrentMagazine(magazine);
            }}
          >
            <div className={className}>
              <div>
                <h3 className="card--title">
                  {magazine.title}
                  <img src={arrowBottom.src} alt="" />
                </h3>
                
              </div>
              <Link href={''} >
                <Image
                  className="card--image"
                  src={magazine.featuredImage.node.mediaItemUrl}
                  alt={magazine.title}
                  width={920}
                  height={1230}
                />
              </Link>
            </div>
          </div>
        );
      })}

      {/* add flip magazine here */}
      <div>

      </div>
    </div>
    
  );
};

export default CarouselEighth;
