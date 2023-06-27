import Head from 'next/head';
import styles from '@/styles/Home.module.scss';
import { gql, wpgraphql } from '../../lib/wpgrapghql';
import { useEffect, useRef, useState } from 'react';
import { NextPageContext } from 'next';
import Image from 'next/image';
import Footer from "@/components/Footer";
import Carousel from '@/components/Carousel/Carousel';
import timeLineImage from '../../assets/timeline-image.png';
import timeLineImageLeft from '../../assets/left-3-page.png';
import timeLineImageRight from '../../assets/right-3-page.png';
import homeIcon from '../../assets/home-icon.svg';
import pointIcon from '../../assets/pointIcon.svg';
import secondPageIcon from '../../assets/secondPageIcon.png';
import fourthPageIcon from '../../assets/fourthPageIcon.png';


import { Swiper, SwiperSlide } from 'swiper/react';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import Swiper styles
// import 'react-slick/css';
import CarouselSecond from '@/components/Carousel-second/CarouselSecond';
import CarouselThird from '@/components/CarouselThird/CarouselThird';
import Link from 'next/link';
import Header from '@/components/Header/Header';

const GetAllPosts = gql`
  query getPosts {
    posts {
      nodes {
        id
        slug
        title
        uri
      }
    }
  }
`;

type One = {
  posts: Nodes
}

type Nodes = {
  nodes: Posts
}

type Posts = {
  map(arg0: (post: { title: string; id: string; }) => JSX.Element): import("react").ReactNode;
  length: number;
  id: string
  slug: string
  title: string
  uri: string
}

interface PostsPageProps {
  posts:One;
}

export default function Third({ posts: serverPosts }: PostsPageProps) {

  const timeline = [1820, 2023];
  const timelineDecades: any[] | (() => any[]) = [];
  // const [tDecades, setTDecades] = useState([1890, 1900, 1910, 1920, 1930, 1940, 1950, 1960, 1970, 1980, 1990, 2000, 2010, 2020]); 
  const [tDecades, setTDecades] = useState(timelineDecades); 
  const [pointsTimeline, setPointsTimeine] = useState([1821, 1896, 1916, 1911, 2013, 1989, 2001]);
  const [currentYear, setCurrentYear] = useState(1916);

  const joinYears = tDecades.concat(timelineDecades).sort((a, b) => a - b);

  const pointsTimelineData = [
    {year: 1821, title: 'Lorem ipsum dollar, Lorem ipsum dollar', image: timeLineImage, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra aliquam leo, vel vestibulum leo tempor eu. Mauris dolor erat, convallis et aliquet et, efficitur mollis eros. Cras fringilla, ligula convallis ultricies accumsan, dui lacus malesuada mauris.'},
    {year: 1896, title: 'Lorem ipsum dollar', image: timeLineImage},
    {year: 1916, title: 'Lorem ipsum dollar', image: timeLineImage, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra aliquam leo, vel vestibulum leo tempor eu. Mauris dolor erat, convallis et aliquet et, efficitur mollis eros. Cras fringilla, ligula convallis ultricies accumsan, dui lacus malesuada mauris.'},
    {year: 1911, title: 'Lorem ipsum dollar', image: timeLineImageLeft, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra aliquam leo, vel vestibulum leo tempor eu. Mauris dolor erat, convallis et aliquet et, efficitur mollis eros. Cras fringilla, ligula convallis ultricies accumsan, dui lacus malesuada mauris.'},
    {year: 2001, title: 'Lorem ipsum dollar', image: timeLineImageRight, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra aliquam leo, vel vestibulum leo tempor eu. Mauris dolor erat, convallis et aliquet et, efficitur mollis eros. Cras fringilla, ligula convallis ultricies accumsan, dui lacus malesuada mauris.'},
    {year: 1989, title: 'Lorem ipsum dollar', image: timeLineImageRight, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra aliquam leo, vel vestibulum leo tempor eu. Mauris dolor erat, convallis et aliquet et, efficitur mollis eros. Cras fringilla, ligula convallis ultricies accumsan, dui lacus malesuada mauris.'},
    {year: 2013, title: 'Lorem ipsum dollar', image: timeLineImageRight, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra aliquam leo, vel vestibulum leo tempor eu. Mauris dolor erat, convallis et aliquet et, efficitur mollis eros. Cras fringilla, ligula convallis ultricies accumsan, dui lacus malesuada mauris.'},
  ]

  // console.log('joinYears', joinYears);
  

  // for (let i = timeline[0]; i <= timeline[1]; i++) {
  //   if(i % 10 === 0){
  //     timelineDecades.push(i);
  //   }
  // }

  for (let i = timeline[0]; i <= timeline[1]; i++) {
      timelineDecades.push(i);
  }

  // console.log('timelineDecades', timelineDecades.length);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 12,
    slidesToScroll: 1
  };

  // const [currentIndex, setCurrentIndex] = useState(Math.round(tDecades.length / 2 / 10))
  const [currentIndex, setCurrentIndex] = useState(0)
  // const [currentIndex, setCurrentIndex] = useState(0)



const timelineRef = useRef(null);

// console.log('currentYear', currentYear);
const copyPointsTimeline = [...pointsTimeline].sort((a, b) => a - b);
const [selectedPoint, setSelectedPoint] = useState(1916);
const [prevSelectedPoint, setPrevSelectedPoint] = useState(copyPointsTimeline[copyPointsTimeline.indexOf(selectedPoint) - 1]);
const [nextSelectedPoint, setNextSelectedPoint] = useState(copyPointsTimeline[copyPointsTimeline.indexOf(selectedPoint) + 1]);

const handlePointClick = (pointId: any) => {
  setSelectedPoint(pointId);

  const index = copyPointsTimeline.indexOf(pointId)
  
  setPrevSelectedPoint(copyPointsTimeline[index - 1]);
  setNextSelectedPoint(copyPointsTimeline[index + 1]);
};

  useEffect(() => {}, [selectedPoint, prevSelectedPoint, nextSelectedPoint])

  // const next = () => {
  //   // if (currentIndex < (length - 1)) {
  //     setSelectedPoint(copyPointsTimeline[copyPointsTimeline.indexOf(selectedPoint) + 1])
  //   // }
  // }
  
  // const prev = () => {
  //     // if (currentIndex > 0) {
  //       setSelectedPoint(copyPointsTimeline[copyPointsTimeline.indexOf(selectedPoint) - 1])
  //     // }
  
  // }
  
    // const [touchPosition, setTouchPosition] = useState(null)
  
  //   const handleTouchStart = (e: any) => {
  //     const touchDown = e.touches[0].clientX
  //     setTouchPosition(touchDown)
  // }
  
  
  //   const handleTouchMove = (e:any) => {
  //     const touchDown = touchPosition
  
  //     if(touchDown === null) {
  //         return
  //     }
  
  //     const currentTouch = e.touches[0].clientX
  //     const diff = touchDown - currentTouch
    
  
  //     if (diff > 5) {
  //         next()
  //         console.log('diff > 5');
          
  //     }
  
  //     if (diff < -5) {
  //         prev()
  //         console.log('diff < -5');
  //     }
  
  //     setTouchPosition(null)
  // }

  return (
    <>
      <Head>
        <title>Thomas F Meagher</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <main className="third-page" >  
        <Header />

        <div className="third-page-carousel">
         
          {/* srart timeline */}
          <div 
            className="timeline"
            // onTouchStart={handleTouchStart}
            // onTouchMove={handleTouchMove}
          >
            <div className="timeline-years">
            {tDecades.map((decade, index) => {
  if (decade % 10 === 0) {
    return (
      <div key={decade} className="year-wrapper">
        <div
          className={`year year-${decade} 
          `
          // ${currentIndex === index && 'active'} it was in 184 str
        }
          style={
            currentIndex > 0
              ? {
                  transform: `translateX(-${currentIndex * 100}%)`,
                  transitionProperty: 'transform',
                  transitionDuration: '0.5s',
                }
              : {
                  transform: `translateX(${ -currentIndex * 100 }%)`,
                  transitionProperty: 'transform',
                  transitionDuration: '0.5s',
                }
          }
        >
          <h2>{decade}</h2>
          {/* Uncomment the following lines if you have an image to render */}
          {/* {currentIndex === index && <Image src={timeLineImage} alt="" />} */}
          <div className="timeline-line">
            <svg width="100%" height="100%">
              <line x1="85" y1="100" x2="85" y2="250" stroke="white" strokeWidth="5" />
            </svg>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div
        key={decade}
        // style={
        //   !pointsTimeline.includes(decade)
        //     ? {
        //         position: 'absolute',
        //       }
        //     : {
        //         position: 'relative',
        //         display: 'flex',
        //         alignItems: 'end',
        //         width: '20px',
        //       }
        // }
        className="year-wrapper"
      >
        {pointsTimeline.includes(decade) && 
        <div 
          style={
            currentIndex > 0
              ? {
                  transform: `translateX(-${currentIndex * 100}%)`,
                  transitionProperty: 'transform',
                  transitionDuration: '0.5s',
                }
              : {
                  transform: `translateX(${ -currentIndex * 100 }%)`,
                  transitionProperty: 'transform',
                  transitionDuration: '0.5s',
                }
          }
          // className={`year year-${index} ${currentIndex === index && 'active'}`}
          className={`point-year year year-${decade} 
            ${selectedPoint === decade && 'active'} 
            ${prevSelectedPoint === decade && 'previous'} 
            ${nextSelectedPoint === decade && 'next'}`
          }
        >
          <div ref={timelineRef} onClick={() => handlePointClick(decade)}>
            {pointsTimelineData
              .filter(point => point.year === decade)
              .map((yearData, index) => {
                if(selectedPoint === decade) {
                  return (
                    <>
                      <img key={index} src={yearData.image.src} alt=''/>
                      <div className={`point-year-info-block ${decade > 1989 && 'point-year-info-block-shift'}`}>
                        <h3 className="point-year-info-block-year">{yearData.year}</h3>
                        <p className="point-year-info-block-title">{yearData.title}</p>
                        <p className="point-year-info-block-text">{yearData.text}</p>
                      </div>
                    </>
                  )
                }
                if( prevSelectedPoint === decade || nextSelectedPoint === decade) {
                  return <div key={index}><img src={yearData.image.src} alt='' className="prev-next-wrapper"/></div>
                }
                else {
                  return <div className="point-icon-wrapper" key={index}><img src={pointIcon.src} alt='' className="point-icon"/></div>
                }
              })}
          </div>
        </div>
        }
      </div>
    );
  }
})}

            </div>
            <div className="timeline-line-bottom">
              <svg width="100%" height="100%"><line x1="0" y1="0" x2="100%" y2="0" stroke="white" strokeWidth="20"></line></svg>
            </div>
          </div>

          {/* end timeline */}
        </div>

        <Footer 
          prevLink={'/second'} 
          nextLink={'/fourth'}
          prevImage={secondPageIcon.src.toString()}
          nextImage={fourthPageIcon.src.toString()}
        />
      </main>
    </>
  );
}

export async function getServerSideProps({}: NextPageContext) {
  const posts: any = await wpgraphql.request(GetAllPosts);

  return {
    props: {posts},
  }
}
