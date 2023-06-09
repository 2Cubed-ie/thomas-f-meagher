import Image from "next/image";
import signLogo from '../../assets/sign.svg';
import bgPrev from '../../assets/bgPrev.png';
import bgNext from '../../assets/bgNext.png';
import Link from "next/link";

// console.log('window.screen.width', window.screen.width);
// console.log('window.screen.width', window.screen.height)

const Footer = ({prev = false, next = false}) => {
  return (
    <div className="footer-block">
      <div className="footer-block-left">
        {prev &&
        <Link href="/second">
          <Image src={bgPrev} alt='' />
          PREVIOUS
        </Link>
        }
        
      </div>
      <div className="footer-block-center">
        <Image src={signLogo} alt='' className="footer-logo" />
      </div>
      <div className="footer-block-right">
      {prev &&
        <Link href="/fourth">
          NEXT
          <Image src={bgNext} alt='' />
        </Link>
      }
      </div>
    </div>
  )
}

export default Footer;