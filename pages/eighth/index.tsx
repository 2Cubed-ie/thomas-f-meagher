import Head from 'next/head';
import Footer from '@/components/Footer/Footer';
import seventhPageIcon from '../../assets/seventhPageIcon.png';
import tenthPageIcon from '../../assets/ninthPageIcon.png';
import Header from '@/components/Header/Header';
import CarouselEighth from '@/components/Carousel-eighth/CarouselEighth';
import InfoBlock from '@/components/InfoBlock/InfoBlock';
import { wpgraphql } from "@/lib/wpgrapghql";
import { NextPageContext } from 'next';
import { GET_FEATURED_IMAGE_NINTH_PAGE, GET_FEATURED_IMAGE_SEVENTH_PAGE, GET_POSTS } from '@/gql/queries';
import { useEffect, useState } from 'react';
import Ninth from '../ninth';

export async function getServerSideProps({}: NextPageContext) {
  const posts: any = await wpgraphql.request(GET_POSTS);
  const iconImageSeventh: any = await wpgraphql.request(GET_FEATURED_IMAGE_SEVENTH_PAGE);
  const iconImageNinth: any = await wpgraphql.request(GET_FEATURED_IMAGE_NINTH_PAGE);

  return {
    props: {posts, iconImageSeventh, iconImageNinth},
  }
}

const Eighth = ({posts: serverPosts, iconImageSeventh, iconImageNinth}: any) => {
  const [currentMagazine, setCurrentMagazine] = useState();

  useEffect(() => {
    document.body.style.background = 'white';
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

      <main className="eighth-page" >
      <Header />

      {!currentMagazine
      ? <>
          <div>
            <CarouselEighth magazines={serverPosts.posts.nodes} setCurrentMagazine={setCurrentMagazine} />
          </div>

          <div className="eighth-page-wrapper-info-block">
            <InfoBlock text={'Click on the page to read the insert'} />
          </div>
      </>
      : <>
        <div className="eighth-page-wrapper-ninth">
          <Ninth currentMagazine={currentMagazine} setCurrentMagazine={setCurrentMagazine} />
        </div>

        <div className="eighth-page-wrapper-info-block-magazine">
            <InfoBlock text={'Swipe Left or right to see the next Page'} />
          </div>
        </>
      }

        <Footer 
          prevLink={'/seventh'}
          nextLink={'/tenth'}
          prevImage={iconImageSeventh.page.featuredImage.node.mediaItemUrl}
          nextImage={iconImageNinth.page.featuredImage.node.mediaItemUrl}
        />
      </main>
    </>
  );
}

export default Eighth;
