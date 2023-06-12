import Image from "next/image";
import signLogo from '../../assets/sign.svg';
import Link from "next/link";
import arrowRight from '../../assets/arrow-right.svg';
import arrowLeft from '../../assets/arrow-left.svg';

// console.log('window.screen.width', window.screen.width);
// console.log('window.screen.width', window.screen.height)
type Props = {
  prevLink?: string,
  nextLink?: string,
  prevImage?: string,
  nextImage?: string
}

const Footer: React.FC<Props> = ({
  prevLink = '/', 
  nextLink = '/',
  prevImage = '',
  nextImage = ''
}) => {
  return (
    <div className="footer-block">
      <div className="footer-block-left">
        {prevLink.length > 1 &&
        <Link href={prevLink}>
          <Image 
            src={prevImage}
            alt=''
            width={255}
            height={255}
          />
            PREVIOUS
          <Image
            className="footer-block-right-left"
            src={arrowLeft}
            width={70}
            height={70}
            alt=""
          /> 
        </Link>
        }
        
      </div>
      <div className="footer-block-center">
        <Image src={signLogo} alt='' className="footer-logo" />
      </div>
      <div className="footer-block-right">
      {nextLink.length > 1 &&
        <Link href={nextLink}>
          NEXT
          <Image 
            src={nextImage} 
            alt=''
            width={255}
            height={255}
          />
          <Image
            className="footer-block-right-arrow"
            src={arrowRight}
            width={70}
            height={70}
            alt=""
          /> 
        </Link>
      }
      </div>
    </div>
  )
}

export default Footer;