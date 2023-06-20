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

const Seventh = () => {

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
              src={leftImage}
              alt=''
              className="seventh-page-main-left-img"
            />
            <div className="seventh-page-main-left-caption">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Suspendisse convallis ac arcu ac mattis. 
                Aliquam at blandit massa.
              </p>
            </div>
          </div>

          <div className="seventh-page-main-center">
            <Image
              src={centerImage}
              alt=''
              className="seventh-page-main-center-img"
            />
          </div>

          <div className="seventh-page-main-right">
            <h2 className="seventh-page-main-right-title">
              Seventh
            </h2>
            <p className="seventh-page-main-right-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse convallis ac arcu ac mattis. Aliquam at blandit massa. Duis ac ligula eget justo ornare scelerisque sed eget dolor. Sed ullamcorper quam at sapien lacinia, nec venenatis elit rutrum. Duis fringilla velit a semper laoreet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam vitae hendrerit diam. Duis purus mi, congue id efficitur in, eleifend ornare urna. Phasellus vehicula purus at leo malesuada vestibulum.
            </p>
            
            <p className="seventh-page-main-right-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse convallis ac arcu ac mattis. Aliquam at blandit massa. Duis ac ligula eget justo ornare scelerisque sed eget dolor. Sed ullamcorper quam at sapien lacinia, nec venenatis elit rutrum. Duis fringilla velit a semper laoreet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam vitae hendrerit diam. Duis purus mi, congue id efficitur in, eleifend ornare urna. Phasellus vehicula purus at leo malesuada vestibulum.
            </p>
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
