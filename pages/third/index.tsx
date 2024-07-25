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
import arrowBottomWhite from '../../assets/arrow-bottom-white.svg';


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
import { GET_FEATURED_IMAGE_FOURTH_PAGE, GET_TIMELINE_POSTS } from '@/gql/queries';
import {GET_FEATURED_IMAGE_SECOND_PAGE} from '@/gql/queries';

export async function getServerSideProps({}: NextPageContext) {
  const timelinePosts: any = await wpgraphql.request(GET_TIMELINE_POSTS);
  const iconImageSecond: any = await wpgraphql.request(GET_FEATURED_IMAGE_SECOND_PAGE);
  const iconImageFourth: any = await wpgraphql.request(GET_FEATURED_IMAGE_FOURTH_PAGE);

  return {
    props: {timelinePosts, iconImageSecond, iconImageFourth},
  }
}

export default function Third({ 
  timelinePosts: serverTimelinePosts, 
  iconImageSecond: serverSecondIconImage,
  iconImageFourth: serverFourthIconImage }: any) {

const sortedPointsTimeline = serverTimelinePosts.timelinePosts.nodes
    .map((post: any) => Number(post.timeLineFields.year))
    .sort((a: number, b: number) => a - b);

  const timeline = [1820, 1910];
  const timelineDecades: any[] | (() => any[]) = [];

  for (let i = timeline[0]; i <= timeline[1]; i++) {
    timelineDecades.push(i);
  }

  // const [tDecades, setTDecades] = useState(timelineDecades); 
  const [currentIndex, setCurrentIndex] = useState(0)
  const timelineRef = useRef(null);

  // const [pointsTimeline, setPointsTimeine] = useState([1821, 1896, 1916, 1911, 2013, 1989, 2001]);
  // const copyPointsTimeline = [...pointsTimeline].sort((a, b) => a - b);
  const [selectedPoint, setSelectedPoint] = useState(1823);
  const [prevSelectedPoint, setPrevSelectedPoint] = useState(sortedPointsTimeline[sortedPointsTimeline.indexOf(selectedPoint) - 1]);
  const [nextSelectedPoint, setNextSelectedPoint] = useState(sortedPointsTimeline[sortedPointsTimeline.indexOf(selectedPoint) + 1]);
  
  const handlePointClick = (pointId: any) => {
    setSelectedPoint(pointId);
  
    const index = sortedPointsTimeline.indexOf(pointId)
    
    setPrevSelectedPoint(sortedPointsTimeline[index - 1]);
    setNextSelectedPoint(sortedPointsTimeline[index + 1]);
  };  

  const handleClickNextPoint = () => {
    if (sortedPointsTimeline.indexOf(selectedPoint) === sortedPointsTimeline.length - 1) {
      return handlePointClick(sortedPointsTimeline[0]);
    }

    handlePointClick(sortedPointsTimeline[sortedPointsTimeline.indexOf(selectedPoint) + 1])
}

  useEffect(() => {
    const timeoutId = setTimeout(handleClickNextPoint, 7000); // Adjust the timeout duration as needed (e.g., 1000ms = 1 second)
    document.body.style.background = '#e36f24';

    return () => {
      clearTimeout(timeoutId);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedPoint, prevSelectedPoint, nextSelectedPoint])

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
          >
            <div className="timeline-years">
            {timelineDecades.map((decade, index) => {
              if (decade % 10 === 0 && !sortedPointsTimeline.includes(decade)) {
                return (
                  <div key={decade} className="year-wrapper">
                    <div
                      className={`year year-${decade}`}
                    >
                      <h2>{decade}</h2>
                      <div className="timeline-line">
                        <svg width="100%" height="100%">
                          <line x1="85" y1="100" x2="85" y2="250" stroke="white" strokeWidth="5" />
                        </svg>
                      </div>
                    </div>
                  </div>
                );
              }
              
              else {
                return (
                  <div key={decade} className="year-wrapper">
                    {sortedPointsTimeline.includes(decade) && 
                    <div 
                      className={`point-year year year-${decade} 
                        ${selectedPoint === decade && 'active'} 
                        ${prevSelectedPoint === decade && 'previous'} 
                        ${nextSelectedPoint === decade && 'next'}`
                      }
                    >
                      <div ref={timelineRef} onClick={() => handlePointClick(decade)}>
                        {/* {pointsTimelineData */}
                        {serverTimelinePosts.timelinePosts.nodes
                          .filter((point: any) => Number(point.timeLineFields.year) === decade)
                          .map((yearData: any, index: any) => {
                            if(selectedPoint === decade) {
                              return (
                                <div key={yearData.id}>
                                <div className="point-year-header">
                                  <h3 className="point-year-header-title">
                                    {yearData.title}
                                  </h3>
                                  <Image 
                                    src={arrowBottomWhite.src}
                                    alt=""
                                    width={30}
                                    height={30}
                                    className="point-year-header-icon"
                                  />
                                </div>
                                  <Image src={yearData.featuredImage.node.mediaItemUrl} alt='' width={1000} height={1000} />
                                  <div className={`point-year-info-block ${decade > 1989 && 'point-year-info-block-shift'}`}>
                                    <h3 className="point-year-info-block-year">{yearData.title}</h3>
                                    <p className="point-year-info-block-title">{yearData.timeLineFields.subtitle}</p>
                                    <p className="point-year-info-block-text">{yearData.timeLineFields.text}</p>
                                  </div>
                                </div >
                              )
                            }
                            if( prevSelectedPoint === decade || nextSelectedPoint === decade) {
                              return <div key={yearData.id} className="prev-next-wrapper-image">
                                  <Image 
                                    src={yearData.featuredImage.node.mediaItemUrl} 
                                    alt=''
                                    className="prev-next-wrapper"
                                    width={200}
                                    height={200}
                                  />
                                </div>
                            }
                            else {
                              return <div className="point-icon-wrapper" key={yearData.id}>
                                <Image 
                                  src={pointIcon.src} 
                                  alt='' 
                                  className="point-icon"
                                  width={30}
                                  height={30}
                                />
                              </div>
                            }
                          })
                        }
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
          prevImage={serverSecondIconImage.page.featuredImage.node.mediaItemUrl}
          nextImage={serverFourthIconImage.page.featuredImage.node.mediaItemUrl}
        />
      </main>
    </>
  );
}

// export async function getServerSideProps({}: NextPageContext) {
//   const posts: any = await wpgraphql.request(GetAllPosts);

//   return {
//     props: {posts},
//   }
// }
