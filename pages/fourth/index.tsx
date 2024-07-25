import Head from 'next/head';
import styles from '@/styles/Home.module.scss';
import { gql, wpgraphql } from '../../lib/wpgrapghql';
import { useEffect, useState } from 'react';
import { NextPageContext } from 'next';
import Footer from '@/components/Footer/Footer';
import Image from 'next/image';
import arrowBottomWhite from '../../assets/arrow-bottom-white.svg';
import thirdPageIcon from '../../assets/thirdPageIcon.png';
import fifthPageIcon from '../../assets/fifthPageIcon.png';
import Header from '@/components/Header/Header';
import InfoBlock from '@/components/InfoBlock/InfoBlock';

import { GET_FEATURED_IMAGE_FIFTH_PAGE, GET_FEATURED_IMAGE_THIRD_PAGE, GET_FOURTH_PAGE_DATA } from '@/gql/queries';

export async function getServerSideProps({}: NextPageContext) {
  const sliderData: any = await wpgraphql.request(GET_FOURTH_PAGE_DATA);
  const iconImageThird: any = await wpgraphql.request(GET_FEATURED_IMAGE_THIRD_PAGE);
  const iconImageFifth: any = await wpgraphql.request(GET_FEATURED_IMAGE_FIFTH_PAGE);

  return {
    props: {sliderData, iconImageThird, iconImageFifth},
  }
}

export default function Fourth({
  sliderData: serverSliderData,
  iconImageThird: serverThirdImage,
  iconImageFifth: serverFifthImage,
}: any) {

  const famousFaces = serverSliderData.page.fourthPage.listFamousPeopleAboutFlag; 
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

  useEffect(() => {
    document.body.style.background = '#096723';
  }, [])
  
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
            {famousFaces.map((item: any, i: any) => {
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
              <Image
                className="card-people--image"
                src={item.mediaItemUrl}
                alt={item.name}
                width={338}
                height={338}
              />

              {i !== index &&
                <div className="card-people--caption--name-secondary">{item.title.replace(/<\/?p>/g, '')}</div>
              }
              {i === index &&
                <div className="card-people--caption">
                <div className="card-people--caption--name">{item.title.replace(/<\/?p>/g, '')}</div>
                <div className="card-people--caption--position">{item.caption.replace(/<\/?p>/g, '')}</div>
                <div className="card-people--caption--words">{item.description.replace(/<\/?p>/g, '')}</div>
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
          prevLink={'/third'}
          nextLink={'fifth'} 
          prevImage={serverThirdImage.page.featuredImage.node.mediaItemUrl}
          nextImage={serverFifthImage.page.featuredImage.node.mediaItemUrl}
        />
      </main>
    </>
  );
}
