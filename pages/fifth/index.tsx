import Head from 'next/head';
import styles from '@/styles/Home.module.scss';
import { gql, wpgraphql } from '../../lib/wpgrapghql';
import { use, useEffect, useState } from 'react';
import { NextPageContext } from 'next';

import Carousel from '@/components/Carousel/Carousel';
import Footer from '@/components/Footer/Footer';
import photo from '../../assets/slider-3.webp';
import president from '../../assets/higgins.png';
import fourthPageIcon from '../../assets/fourthPageIcon.png';
import sixthPageIcon from '../../assets/sixthPageIcon.png';
import Header from '@/components/Header/Header';
import flag1 from '../../assets/flags/flag-1.svg';
import flag2 from '../../assets/flags/flag-2.svg';
import flag3 from '../../assets/flags/flag-3.svg';
import flag4 from '../../assets/flags/flag-4.svg';
import flag5 from '../../assets/flags/flag-5.svg';
import flag6 from '../../assets/flags/flag-6.svg';
import flag7 from '../../assets/flags/flag-7.svg';
import flag8 from '../../assets/flags/flag-8.svg';
import flag9 from '../../assets/flags/flag-9.svg';
import flag10 from '../../assets/flags/flag-10.svg';
import flag11 from '../../assets/flags/flag-11.svg';
import Image from 'next/image';
import InfoBlock from '@/components/InfoBlock/InfoBlock';


const contentPageFifth = [
  {id: 1, title: 'British Royal Standard', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', photo: flag1},
  {id: 2, title: 'British Royal Standard2',  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', photo:  flag2},
  {id: 3, title: 'British Royal Standard3',  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra aliquam leo, vel vestibulum leo tempor eu. Mauris dolor erat, convallis et aliquet et, efficitur mollis eros. Cras fringilla, ligula convallis ultricies accumsan, dui lacus malesuada mauris.', photo: flag3},
  {id: 4, title: 'British Royal Standard4',  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra aliquam leo, vel vestibulum leo tempor eu. Mauris dolor erat, convallis et aliquet et, efficitur mollis eros. Cras fringilla, ligula convallis ultricies accumsan, dui lacus malesuada mauris.', photo: flag4},
  {id: 5, title: 'British Royal Standard5',  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra aliquam leo, vel vestibulum leo tempor eu. Mauris dolor erat, convallis et aliquet et, efficitur mollis eros. Cras fringilla, ligula convallis ultricies accumsan, dui lacus malesuada mauris.', photo: flag5},
  {id: 6, title: 'British Royal Standard6',  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra aliquam leo, vel vestibulum leo tempor eu. Mauris dolor erat, convallis et aliquet et, efficitur mollis eros. Cras fringilla, ligula convallis ultricies accumsan, dui lacus malesuada mauris.', photo: flag6},
  {id: 7, title: 'British Royal Standard7',  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra aliquam leo, vel vestibulum leo tempor eu. Mauris dolor erat, convallis et aliquet et, efficitur mollis eros. Cras fringilla, ligula convallis ultricies accumsan, dui lacus malesuada mauris.', photo: flag7},
  {id: 8, title: 'British Royal Standard8',  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra aliquam leo, vel vestibulum leo tempor eu. Mauris dolor erat, convallis et aliquet et, efficitur mollis eros. Cras fringilla, ligula convallis ultricies accumsan, dui lacus malesuada mauris.', photo: flag8},
  {id: 9, title: 'British Royal Standard9',  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra aliquam leo, vel vestibulum leo tempor eu. Mauris dolor erat, convallis et aliquet et, efficitur mollis eros. Cras fringilla, ligula convallis ultricies accumsan, dui lacus malesuada mauris.', photo: flag9},
  {id: 10, title: 'British Royal Standard8',  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra aliquam leo, vel vestibulum leo tempor eu. Mauris dolor erat, convallis et aliquet et, efficitur mollis eros. Cras fringilla, ligula convallis ultricies accumsan, dui lacus malesuada mauris.', photo: flag10},
  {id: 11, title: 'British Royal Standard9',  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra aliquam leo, vel vestibulum leo tempor eu. Mauris dolor erat, convallis et aliquet et, efficitur mollis eros. Cras fringilla, ligula convallis ultricies accumsan, dui lacus malesuada mauris.', photo: flag11},
];




const Fifth = () => {

  const [currentFlag, setCurrentFlag] = useState(1);
  const [changeImage, setChangeImage] = useState(false);
  const [startX, setStartX] = useState(0);

  const chooseFlag = (e: any, id: any) => {
    setChangeImage(true);
    e.preventDefault();

    setCurrentFlag(id);
  }

  // const handleTouchStart = (event: any) => {
  //   setStartX(event.touches[0].clientX);
  //   // setIsSwiping(true);
  // };

  // const handleTouchMove = (event: any) => {
  //   const currentX = event.touches[0].clientX;
  //   const diff = startX - currentX;
  //   const threshold = 50; // adjust this value to control swipe sensitivity


  //   if (diff > threshold) {
  //     // swipe left

  //     if(currentFlag === contentPageFifth.length){
  //       setCurrentFlag(contentPageFifth.length);  
  //     }

  //     setCurrentFlag(currentFlag => currentFlag + 1);
  //   } else if (diff < -threshold) {
  //     // swipe right
  //     setCurrentFlag(currentFlag => currentFlag - 1);
  //   }
  // };


  useEffect(() => {
    setTimeout(() => {
      setChangeImage(false);
    }, 500)
    
  }, [changeImage])

  
  

  console.log('setChangeImage', currentFlag);
  
  
  return (
    <>
      <Head>
        <title>Thomas F Meagher</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <main className="fifth-page" >
      <Header />

      <div className="fifth-page-flags" 
      >
        <div className="fifth-page-banner"
          // onTouchStart={handleTouchStart}
          // onTouchMove={handleTouchMove}
        >
          <div 
            className={`fifth-page-banner-left ${changeImage === false ? 'fade-in show' : 'fade-in'}`}
          >
            <img
              src={contentPageFifth[currentFlag].photo.src}
              alt=""
            />
            
          </div>
          <div className="fifth-page-banner-rigth">
            <h2 className="fifth-page-banner-rigth-title">
              {contentPageFifth[currentFlag].title}
            </h2>
            <p className="fifth-page-banner-rigth-text">
              {contentPageFifth[currentFlag].text}
            </p>
            
          </div>
        </div>
        <div className="fifth-page-flags-navigarion">
          {contentPageFifth.map(item => 
            <div key={item.id} className="fifth-page-flags-img">
              <a href="" onClick={(e: any) => chooseFlag(e, item.id - 1)}>
                <img
                  src={item.photo.src}
                  alt=''
                  // fill
                />
              </a>
            </div>
          )}
        </div>
      </div>
      
      <Footer 
        prevLink={'/fourth'} prevImage={fourthPageIcon.src.toString()}
        nextLink={'/sixth'} nextImage={sixthPageIcon.src.toString()}
      />
      </main>
      <div className="fifth-page-wrapper-info-block">
        <InfoBlock text={'Select a flag below to find out more'} />
      </div>
    </>
  );
}

export default Fifth;
