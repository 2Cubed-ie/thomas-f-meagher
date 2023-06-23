// @ts-ignore
import Head from 'next/head';
import Footer from '@/components/Footer/Footer';
import photo from '../../assets/slider-3.webp';
import president from '../../assets/higgins.png';
import seventhPageIcon from '../../assets/seventhPageIcon.png';
import tenthPageIcon from '../../assets/ninthPageIcon.png';
import Header from '@/components/Header/Header';
import HTMLFlipBook from 'react-pageflip';
import Image from 'next/image';
import React, { useRef } from 'react';
import { NextPageContext } from 'next';
import { wpgraphql } from '@/lib/wpgrapghql';
import { GET_POSTS } from '@/gql/queries';

export async function getServerSideProps({}: NextPageContext) {
  const posts: any = await wpgraphql.request(GET_POSTS);

  return {
    props: {posts},
  }
}


const contentPageSixth = [
  {id: 1, name: 'Micheal D Higgins', position: 'President', words: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra aliquam leo, vel vestibulum leo tempor eu. Mauris dolor erat, convallis et aliquet et, efficitur mollis eros. Cras fringilla, ligula convallis ultricies accumsan, dui lacus malesuada mauris.', photo: president},
  {id: 2, name: 'Katie Taylor2', position: 'gold medal winner at the olympic games', words: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra aliquam leo, vel vestibulum leo tempor eu. Mauris dolor erat, convallis et aliquet et, efficitur mollis eros. Cras fringilla, ligula convallis ultricies accumsan, dui lacus malesuada mauris.', photo: president},
  {id: 3, name: 'Katie Taylor3', position: 'gold medal winner at the olympic games', words: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra aliquam leo, vel vestibulum leo tempor eu. Mauris dolor erat, convallis et aliquet et, efficitur mollis eros. Cras fringilla, ligula convallis ultricies accumsan, dui lacus malesuada mauris.', photo: photo},
  {id: 4, name: 'Katie Taylor4', position: 'gold medal winner at the olympic games', words: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra aliquam leo, vel vestibulum leo tempor eu. Mauris dolor erat, convallis et aliquet et, efficitur mollis eros. Cras fringilla, ligula convallis ultricies accumsan, dui lacus malesuada mauris.', photo: photo},
  {id: 5, name: 'Katie Taylor5', position: 'gold medal winner at the olympic games', words: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra aliquam leo, vel vestibulum leo tempor eu. Mauris dolor erat, convallis et aliquet et, efficitur mollis eros. Cras fringilla, ligula convallis ultricies accumsan, dui lacus malesuada mauris.', photo: photo},
  {id: 6, name: 'Katie Taylor6', position: 'gold medal winner at the olympic games', words: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra aliquam leo, vel vestibulum leo tempor eu. Mauris dolor erat, convallis et aliquet et, efficitur mollis eros. Cras fringilla, ligula convallis ultricies accumsan, dui lacus malesuada mauris.', photo: photo},
  {id: 7, name: 'Katie Taylor7', position: 'gold medal winner at the olympic games', words: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra aliquam leo, vel vestibulum leo tempor eu. Mauris dolor erat, convallis et aliquet et, efficitur mollis eros. Cras fringilla, ligula convallis ultricies accumsan, dui lacus malesuada mauris.', photo: photo},
  {id: 8, name: 'Katie Taylor8', position: 'gold medal winner at the olympic games', words: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra aliquam leo, vel vestibulum leo tempor eu. Mauris dolor erat, convallis et aliquet et, efficitur mollis eros. Cras fringilla, ligula convallis ultricies accumsan, dui lacus malesuada mauris.', photo: photo},
  {id: 9, name: 'Katie Taylor9', position: 'gold medal winner at the olympic games', words: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra aliquam leo, vel vestibulum leo tempor eu. Mauris dolor erat, convallis et aliquet et, efficitur mollis eros. Cras fringilla, ligula convallis ultricies accumsan, dui lacus malesuada mauris.', photo: photo},
];

// eslint-disable-next-line react/display-name
const PageCover = React.forwardRef((props: any, ref: any) => {
  return (
    <div className="page page-cover" ref={ref} data-density="--soft">
      <div className="page-content">
        <h2>{props.children}</h2>
      </div>
    </div>
  );
});

// eslint-disable-next-line react/display-name
const Page = React.forwardRef((props: any, ref: any) => {
  return (
    <>
      <div className="page" ref={ref}>
        <div className="page-content">
          <h2 className="page-header">Page header - {props.number}</h2>
          <div className="page-image"></div>
          <div className="page-text">{props.children}</div>
          <div className="page-footer">{props.number + 1}</div>
        </div>
      </div>
    </>
  );
});

const Ninth = ({posts: serverPosts}: any) => {

  console.log('serverPosts', serverPosts);

  const combinedRegex = /data="([^"]+)"|src="([^"]+)"/g;

// Extract the links using the combined regex
  const linkMatches = serverPosts.posts.nodes[0].content.match(combinedRegex);
  const links = linkMatches ? linkMatches.map((match: string) => match.split(/data=|src=/)[1].slice(1, -1)) : [];


console.log('links', links);
  
  const bookRef = useRef(null);



  return (
    <>
      <Head>
        <title>Thomas F Meagher</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
      </Head>

      <main className="ninth-page" >
        <Header />

        <div className="ninth-page-main" >
        {/* @ts-ignore */}
          {/* <HTMLFlipBook width={1200} height={1200} showCover={false}>
          <PageCover number="0">
              <Image
                src={contentPageSixth[2].photo.src}
                // width={300}
                // height={500}
                fill
                alt=''
                />
          </ PageCover>
            <Page number="0">
              <Image
                src={contentPageSixth[2].photo.src}
                // width={300}
                // height={500}
                fill
                alt=''
                />
            </Page>
            <Page number="1" >
              <Image
                src={contentPageSixth[1].photo.src}
                // width={300}
                // height={500}
                fill
                alt=''
              />
            </Page>
            <Page number="2">
              <Image
                src={contentPageSixth[2].photo.src}
                // width={300}
                // height={500}
                fill
                alt=''
              />
            </Page>
            <Page number="3">
              <Image
                src={contentPageSixth[3].photo.src}
                // width={300}
                // height={500}
                fill
                alt=''
              />
            </Page>
            <Page number="4">
              <Image
                src={contentPageSixth[4].photo.src}
                // width={300}
                // height={500}
                fill
                alt=''
              />
            </Page>
            <Page number="5">
              <Image
                src={contentPageSixth[5].photo.src}
                // width={300}
                // height={500}
                fill
                alt=''
              />
            </Page>
            <Page number="6">
              <Image
                src={contentPageSixth[6].photo.src}
                // width={300}
                // height={500}
                fill
                alt=''
              />
            </Page>

            <Page number={contentPageSixth.length + 1} style={{backgorundColor: 'red'}} showCover={false} >
            <Image
                src={contentPageSixth[6].photo.src}
                // width={300}
                // height={500}
                fill
                alt=''
              />
            </Page>
          </HTMLFlipBook> */}
          {/* @ts-ignore */}
          <HTMLFlipBook
            width={550}
            height={733}
            size="stretch"
            minWidth={315}
            maxWidth={1000}
            minHeight={400}
            maxHeight={1533}
            maxShadowOpacity={0.5}
            showCover={false}
            mobileScrollSupport={true}
            // onFlip={this.onPage}
            // onChangeOrientation={this.onChangeOrientation}
            // onChangeState={this.onChangeState}
            className="magazine"
            // ref={(el) => (this.flipBook = el)}
          >

            {/* <Page data-density="--soft" number={0}>
                <Image
                  src={contentPageSixth[1].photo.src}
                  // width={300}
                  // height={500}
                  fill
                  alt=''
                  />
            </Page>
            <Page number={1}>
              <Image
                  src={contentPageSixth[2].photo.src}
                  // width={300}
                  // height={500}
                  fill
                  alt=''
                  />
            </Page>
            <Page number={2}><Image
                  src={contentPageSixth[1].photo.src}
                  // width={300}
                  // height={500}
                  fill
                  alt=''
                  />
            </Page>
            <Page number={3}><Image
                  src={contentPageSixth[1].photo.src}
                  // width={300}
                  // height={500}
                  fill
                  alt=''
                  />
            </Page>
            <Page number={4}><Image
                  src={contentPageSixth[2].photo.src}
                  // width={300}
                  // height={500}
                  fill
                  alt=''
                  />
            </Page>
            <Page number={5}>
              <Image
                src={contentPageSixth[1].photo.src}
                // width={300}
                // height={500}
                fill
                alt=''
              />
            </Page>

            <PageCover number={6}>
              <Image
                src={contentPageSixth[2].photo.src}
                // width={300}
                // height={500}
                fill
                alt=''
              />
            </PageCover>
            <PageCover number={7}>
              <Image
                src={contentPageSixth[2].photo.src}
                // width={300}
                // height={500}
                fill
                alt=''
              />
            </PageCover> */}
            {links.map((link: string, index: number) => (
              
                <Page number={index} key={link}>
                  <Image
                    src={link}
                    // width={300}
                    // height={500}
                    fill
                    alt=''
                  />
                </Page>
              
            ))}

          </HTMLFlipBook>


          {/* <HTMLFlipBook width={500} height={500}>
            <div className="demoPage">
              <Image
                src={contentPageSixth[1].photo.src}
                width={500}
                height={500}
                alt=''
              />
            </div>

            <div className="demoPage">
              <Image
                src={contentPageSixth[2].photo.src}
                width={500}
                height={500}
                alt=''
              />
            </div>

            <div className="demoPage">
              <Image
                src={contentPageSixth[3].photo.src}
                width={500}
                height={500}
                alt=''
              />
            </div>

            <div className="demoPage">
              <Image
                src={contentPageSixth[4].photo.src}
                width={500}
                height={500}
                alt=''
              />
            </div>
          </HTMLFlipBook> */}
        </div>
        
        <Footer 
          prevLink={'/seventh'} prevImage={seventhPageIcon.src.toString()}
          nextLink={'/tenth'} nextImage={tenthPageIcon.src.toString()}
        />
      </main>
    </>
  );
}

export default Ninth;
