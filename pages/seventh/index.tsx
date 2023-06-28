import Head from 'next/head';
import Footer from '@/components/Footer/Footer';
import photo from '../../assets/slider-3.webp';
import president from '../../assets/higgins.png';
import sixthPageIcon from '../../assets/sixthPageIcon.png';
import eighthPageIcon from '../../assets/eighthPageIcon.png';
import Header from '@/components/Header/Header';
import Image from 'next/image';
import centerImage from '../../assets/7-center-image.png'
import leftImage from '../../assets/7-left-image.png'
import { wpgraphql } from '@/lib/wpgrapghql';
import { NextPageContext } from 'next';
import { GET_SEVENTH_PAGE_DATA } from '@/gql/queries';
import DOMPurify from 'isomorphic-dompurify';

export async function getServerSideProps({}: NextPageContext) {
  const data: any = await wpgraphql.request(GET_SEVENTH_PAGE_DATA);

  return {
    props: {data},
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

const Seventh = ({data: serverData}: any) => {

  return (
    <>
      <Head>
        <title>Thomas F Meagher</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
      </Head>

      <main className="seventh-page" >
        <Header />

        <div className="seventh-page-main">
          <div className="seventh-page-main-left">
            <Image
              src={serverData.page.seventhPageFields.leftTopImage.mediaItemUrl}
              width={700}
              height={700}
              alt=''
              className="seventh-page-main-left-img"
            />
            <div className="seventh-page-main-left-caption">
              <p>
                {serverData.page.seventhPageFields.leftTopText}
              </p>
            </div>
          </div>

          <div className="seventh-page-main-center">
            <Image
              src={serverData.page.seventhPageFields.centerImage.mediaItemUrl}
              alt=''
              className="seventh-page-main-center-img"
              width={1186}
              height={1186}
            />
          </div>

          <div className="seventh-page-main-right">
            <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(serverData.page.seventhPageFields.rightText) }} />
          </div>
        </div>
        
        <Footer 
          prevLink={'/sixth'} prevImage={sixthPageIcon.src.toString()}
          nextLink={'/eighth'} nextImage={eighthPageIcon.src.toString()}
        />
      </main>
    </>
  );
}

export default Seventh;
