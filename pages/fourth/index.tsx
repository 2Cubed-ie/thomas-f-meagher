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
import president from '../../assets/higgins.png';
import arrowBottomWhite from '../../assets/arrow-bottom-white.svg';

const famousFaces = [
  {id: 1, name: 'Micheal D Higgins', position: 'President', words: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra aliquam leo, vel vestibulum leo tempor eu. Mauris dolor erat, convallis et aliquet et, efficitur mollis eros. Cras fringilla, ligula convallis ultricies accumsan, dui lacus malesuada mauris.', photo: president},
  {id: 2, name: 'Katie Taylor2', position: 'gold medal winner at the olympic games', words: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra aliquam leo, vel vestibulum leo tempor eu. Mauris dolor erat, convallis et aliquet et, efficitur mollis eros. Cras fringilla, ligula convallis ultricies accumsan, dui lacus malesuada mauris.', photo: president},
  {id: 3, name: 'Katie Taylor3', position: 'gold medal winner at the olympic games', words: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra aliquam leo, vel vestibulum leo tempor eu. Mauris dolor erat, convallis et aliquet et, efficitur mollis eros. Cras fringilla, ligula convallis ultricies accumsan, dui lacus malesuada mauris.', photo: photo},
  {id: 4, name: 'Katie Taylor4', position: 'gold medal winner at the olympic games', words: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra aliquam leo, vel vestibulum leo tempor eu. Mauris dolor erat, convallis et aliquet et, efficitur mollis eros. Cras fringilla, ligula convallis ultricies accumsan, dui lacus malesuada mauris.', photo: photo},
  {id: 5, name: 'Katie Taylor5', position: 'gold medal winner at the olympic games', words: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra aliquam leo, vel vestibulum leo tempor eu. Mauris dolor erat, convallis et aliquet et, efficitur mollis eros. Cras fringilla, ligula convallis ultricies accumsan, dui lacus malesuada mauris.', photo: photo},
  {id: 6, name: 'Katie Taylor6', position: 'gold medal winner at the olympic games', words: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra aliquam leo, vel vestibulum leo tempor eu. Mauris dolor erat, convallis et aliquet et, efficitur mollis eros. Cras fringilla, ligula convallis ultricies accumsan, dui lacus malesuada mauris.', photo: photo},
  {id: 7, name: 'Katie Taylor7', position: 'gold medal winner at the olympic games', words: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra aliquam leo, vel vestibulum leo tempor eu. Mauris dolor erat, convallis et aliquet et, efficitur mollis eros. Cras fringilla, ligula convallis ultricies accumsan, dui lacus malesuada mauris.', photo: photo},
  {id: 8, name: 'Katie Taylor8', position: 'gold medal winner at the olympic games', words: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra aliquam leo, vel vestibulum leo tempor eu. Mauris dolor erat, convallis et aliquet et, efficitur mollis eros. Cras fringilla, ligula convallis ultricies accumsan, dui lacus malesuada mauris.', photo: photo},
  {id: 9, name: 'Katie Taylor9', position: 'gold medal winner at the olympic games', words: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra aliquam leo, vel vestibulum leo tempor eu. Mauris dolor erat, convallis et aliquet et, efficitur mollis eros. Cras fringilla, ligula convallis ultricies accumsan, dui lacus malesuada mauris.', photo: photo},
  // {id: 10, name: 'Katie Taylor10', position: 'gold medal winner at the olympic games', words: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra aliquam leo, vel vestibulum leo tempor eu. Mauris dolor erat, convallis et aliquet et, efficitur mollis eros. Cras fringilla, ligula convallis ultricies accumsan, dui lacus malesuada mauris.', photo: {photo}},
  // {id: 11, name: 'Katie Taylor11', position: 'gold medal winner at the olympic games', words: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra aliquam leo, vel vestibulum leo tempor eu. Mauris dolor erat, convallis et aliquet et, efficitur mollis eros. Cras fringilla, ligula convallis ultricies accumsan, dui lacus malesuada mauris.', photo: {photo}},
  // {id: 12, name: 'Katie Taylor12', position: 'gold medal winner at the olympic games', words: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra aliquam leo, vel vestibulum leo tempor eu. Mauris dolor erat, convallis et aliquet et, efficitur mollis eros. Cras fringilla, ligula convallis ultricies accumsan, dui lacus malesuada mauris.', photo: {photo}},
  // {id: 13, name: 'Katie Taylor13', position: 'gold medal winner at the olympic games', words: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra aliquam leo, vel vestibulum leo tempor eu. Mauris dolor erat, convallis et aliquet et, efficitur mollis eros. Cras fringilla, ligula convallis ultricies accumsan, dui lacus malesuada mauris.', photo: {photo}},
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
      <div className="header">
        <Link href="/">
          <Image src={homeIcon} alt="" />
          <h2>Home</h2>
        </Link>
      </div>
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
              <div>
                <h3 className="card-people--title">
                  {item.name}
                  <img src={arrowBottomWhite.src} alt="" />
                </h3>
                
              </div>
              <img
                className="card-people--image"
                src={item.photo.src}
                alt={item.name}
                // fill
              />
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
        <Footer prev={true} next={true} />
      </main>
    </>
  );
}
