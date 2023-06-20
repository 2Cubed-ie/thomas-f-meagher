import Image from "next/image";
import Link from "next/link";
import homeIcon from '../../assets/home-icon.svg';
import homeOrangeIcon from '../../assets/home-orange-icon.svg';


type Props = {
  orange?: boolean;
}

const Header: React.FC<Props> = ({orange = false}) => {
  return (
  <div className={`header ${orange ? 'header-orange' : ''}`}>
    <Link href="/">
      {!orange
      ? <Image src={homeIcon} alt="" />
      : <Image src={homeOrangeIcon} alt="" />}
      
      <h2>Home</h2>
    </Link>
  </div>
  )
}

export default Header;