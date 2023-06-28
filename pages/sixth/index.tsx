import Head from 'next/head';
import Footer from '@/components/Footer/Footer';
import fifthPageIcon from '../../assets/fifthPageIcon.png';
import seventhPageIcon from '../../assets/seventhPageIcon.png';
import playIcon from '../../assets/play-icon.svg';
import pauseIcon from '../../assets/pause-icon.svg';
import Header from '@/components/Header/Header';
import { useRef, useState } from 'react';
import Image from 'next/image';
import { GET_SIXTH_PAGE_DATA } from '@/gql/queries';
import { NextPageContext } from 'next';
import { wpgraphql } from '@/lib/wpgrapghql';

export async function getServerSideProps({}: NextPageContext) {
  const data: any = await wpgraphql.request(GET_SIXTH_PAGE_DATA);

  return {
    props: {data},
  }
}

const Sixth = ({data: serverData}: any) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<any>(null);
  
  return (
    <>
      <Head>
        <title>Thomas F Meagher</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <main className="sixth-page" >
      <Header orange={true}/>

      <div className="sixth-page-video-block">
        <div className="sixth-page-wrapper-video">
        <video 
          className="sixth-page-video"
          src="/video/kennedy.mp4"
          height={700}
          width={700}
          controls
          ref={videoRef}
        />
        </div>
        <div className="video-start-stop-btn-wrapper">
          {isPlaying 
          ? (
            <button onClick={() => {
              setIsPlaying(!isPlaying);
              videoRef.current.pause();
            }}
            className="video-start-stop-btn"
            >
              <Image 
                src={pauseIcon.src}
                alt="" 
                height={60}
                width={60}
              />
            </button>
          ) 
          : (
            <a 
              onClick={() => {
                setIsPlaying(!isPlaying);
                videoRef.current.play();
              }}
              className="video-start-stop-btn"
            >
              <Image 
                src={playIcon.src}
                alt="" 
                height={60}
                width={60}
              />
            </a>
          )}
          <h2>{serverData.page.sixthPage.textNextToPlayButton}</h2>
        </div>

        <div className="sixth-page-video-block-caption">
          <p>
          {serverData.page.sixthPage.topRightText}
          </p>
        </div>
      </div>
      
      <Footer 
        prevLink={'/fifth'} prevImage={fifthPageIcon.src.toString()}
        nextLink={'/seventh'} nextImage={seventhPageIcon.src.toString()}
      />
      </main>
    </>
  );
}

export default Sixth;
