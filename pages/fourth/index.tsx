import Head from 'next/head';
import styles from '@/styles/Home.module.scss';
import { gql, wpgraphql } from '../../lib/wpgrapghql';
import { useState } from 'react';
import { NextPageContext } from 'next';

import Carousel from '@/components/Carousel/Carousel';
import Footer from '@/components/Footer/Footer';
import Link from 'next/link';
import homeIcon from '../../assets/home-icon.svg';
import Image from 'next/image';
import CarouselThird from '@/components/CarouselThird/CarouselThird';
import photo from '../../assets/slider-3.webp';
import higgins from '../../assets/higgins.png';
import famousOne from '../../assets/eigth-president.png'
import famousTwo from '../../assets/famous-3.png'
import famousThree from '../../assets/famous-4.png'
import famousFour from '../../assets/famous-5.png'
import famousFive from '../../assets/famous-6.png'
import famousSix from '../../assets/famous-7.png'
import famousSeven from '../../assets/famous-8.png'
import arrowBottomWhite from '../../assets/arrow-bottom-white.svg';
import thirdPageIcon from '../../assets/thirdPageIcon.png';
import fifthPageIcon from '../../assets/fifthPageIcon.png';
import Header from '@/components/Header/Header';
import InfoBlock from '@/components/InfoBlock/InfoBlock';


const famousFaces = [
  // first image id 1
  {id: 1, name: 'Micheal D Higgins', position: 'President', words: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra aliquam leo, vel vestibulum leo tempor eu. Mauris dolor erat, convallis et aliquet et, efficitur mollis eros. Cras fringilla, ligula convallis ultricies accumsan, dui lacus malesuada mauris.', photo: photo},
  {id: 2, name: 'Katie Taylor2', position: 'gold medal winner at the olympic games', words: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra aliquam leo, vel vestibulum leo tempor eu. Mauris dolor erat, convallis et aliquet et, efficitur mollis eros. Cras fringilla, ligula convallis ultricies accumsan, dui lacus malesuada mauris.', photo: famousFour},
  {id: 3, name: 'Katie Taylor3', position: 'gold medal winner at the olympic games', words: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra aliquam leo, vel vestibulum leo tempor eu. Mauris dolor erat, convallis et aliquet et, efficitur mollis eros. Cras fringilla, ligula convallis ultricies accumsan, dui lacus malesuada mauris.', photo: famousFive},
  {id: 4, name: 'Katie Taylor4', position: 'gold medal winner at the olympic games', words: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra aliquam leo, vel vestibulum leo tempor eu. Mauris dolor erat, convallis et aliquet et, efficitur mollis eros. Cras fringilla, ligula convallis ultricies accumsan, dui lacus malesuada mauris.', photo: famousSix},
  {id: 5, name: 'Katie Taylor5', position: 'gold medal winner at the olympic games', words: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra aliquam leo, vel vestibulum leo tempor eu. Mauris dolor erat, convallis et aliquet et, efficitur mollis eros. Cras fringilla, ligula convallis ultricies accumsan, dui lacus malesuada mauris.', photo: famousSeven},
  //first from left id 6
  {id: 6, name: 'Micheal D Higgins', position: 'President', words: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra aliquam leo, vel vestibulum leo tempor eu. Mauris dolor erat, convallis et aliquet et, efficitur mollis eros. Cras fringilla, ligula convallis ultricies accumsan, dui lacus malesuada mauris.', photo: higgins},
  {id: 7, name: 'President McAleese', position: 'The eighth president ', words: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra aliquam leo, vel vestibulum leo tempor eu. Mauris dolor erat, convallis et aliquet et, efficitur mollis eros. Cras fringilla, ligula convallis ultricies accumsan, dui lacus malesuada mauris.', photo: famousOne},
  {id: 8, name: 'Katie Taylor8', position: 'gold medal winner at the olympic games', words: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra aliquam leo, vel vestibulum leo tempor eu. Mauris dolor erat, convallis et aliquet et, efficitur mollis eros. Cras fringilla, ligula convallis ultricies accumsan, dui lacus malesuada mauris.', photo: famousTwo},
  {id: 9, name: 'Katie Taylor9', position: 'gold medal winner at the olympic games', words: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra aliquam leo, vel vestibulum leo tempor eu. Mauris dolor erat, convallis et aliquet et, efficitur mollis eros. Cras fringilla, ligula convallis ultricies accumsan, dui lacus malesuada mauris.', photo: famousThree},
];




export default function Fourth() {
  const [index, setIndex] = useState(0);
  const [startX, setStartX] = useState(0);
  const [isSwiping, setIsSwiping] = useState(false);

  const mod = (n: number, m: number) => {
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
      setIndex((index + 1) % famousFaces.length);
    } else if (diff < -threshold) {
      // swipe right
      setIndex(mod(index - 1, famousFaces.length));
    }

    setIsSwiping(false);
  };
  
  return (
    <>
      <Head>
        <title>Thomas F Meagher</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <main className="fourth-page" >
      <Header/>

        <div
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          <div className="famous-faces-carousel">
            {/* {famousFaces.map((face, index) => (
              <div 
                key={face.id}
                className={`${currentIndex === index && 'active'}`}
                style={
                  currentIndex > 0 
                  ? { transform: `translateX(-${(currentIndex * 100)}%)`, transitionProperty: 'transform',
                  transitionDuration: '0.5s'}
                  : { transform: `translateX(${-currentIndex * 100}%)`, transitionProperty: 'transform',
                  transitionDuration: '0.5s'}
                  }
              >
                <Image 
                  src={face.photo.photo.src} 
                  alt=''
                  width={400}
                  height={400}
                />
              </div>
            ))} */}
            {famousFaces.map((item, i) => {
        const indexLeft = mod(index - 1, famousFaces.length);
        const indexLeftPrevOne = mod(index - 2, famousFaces.length);
        const indexLeftPrevTwo = mod(index - 3, famousFaces.length);
        const indexLeftPrevThree = mod(index - 4, famousFaces.length);
        // const indexLeftPrevFour = mod(index - 5, famousFaces.length);
        const indexRight = mod(index + 1, famousFaces.length);
        const indexRightNextOne = mod(index + 2, famousFaces.length);
        const indexRightNextTwo = mod(index + 3, famousFaces.length);
        const indexRightNextThree = mod(index + 4, famousFaces.length);
        // const indexRightNextFour = mod(index + 5, famousFaces.length);

        let className = 'card-people';

        if (i === index) {
          className = 'card-people card-people--active';
        } else if (i === indexRight) {
          className = 'card-people card-people--right';
        } else if (i === indexLeft) {
          className = 'card-people card-people--left';
        } else if (i === indexLeftPrevOne) {
          className = 'card-people card-people--left--prev--one';
        } else if (i === indexLeftPrevTwo) {
          className = 'card-people card-people--left--prev--two';
        } else if (i === indexLeftPrevThree) {
          className = 'card-people card-people--left--prev--three';
        }  else if (i === indexRightNextOne) {
          className = 'card-people card-people--right--next--one';
        } else if (i === indexRightNextTwo) {
          className = 'card-people card-people--right--next--two';
        } else if (i === indexRightNextThree) {
          className = 'card-people card-people--right--next--three';
        } else {
          className = 'card-people';
        }

        return (
          <div key={item.id} className={className}>
            {i === index &&
              <div>
              <h3 className="card-people--title">
                What The Irish flag means to me
                <Image 
                  src={arrowBottomWhite.src}
                  alt=""
                  width={30}
                  height={30}
                />
              </h3>
            </div>
            }
              <img
                className="card-people--image"
                src={item.photo.src}
                alt={item.name}
                // fill
              />

              {i !== index &&
                <div className="card-people--caption--name-secondary">{item.name}</div>
              }
              {i === index &&
                <div className="card-people--caption">
                <div className="card-people--caption--name">{item.name}</div>
                <div className="card-people--caption--position">{item.position}</div>
                <div className="card-people--caption--words">{item.words}</div>
              </div>
              }
            </div>
        );
      })}
          </div>
        </div>
        
        <div className="fourth-page-wrapper-info-block">
          <InfoBlock text={'Swipe Left or right to view the famous faces'}/>
        </div>
        
        <Footer 
          prevLink={'/third'} prevImage={thirdPageIcon.src.toString()}
          nextLink={'fifth'} nextImage={fifthPageIcon.src.toString()}
        />
      </main>
    </>
  );
}
