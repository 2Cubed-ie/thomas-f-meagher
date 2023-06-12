import Image from "next/image";
import Link from "next/link";
import homeIcon from '../../assets/home-icon.svg';



const Header: React.FC = () => {
  return (
  <div className="header">
    <Link href="/">
      <Image src={homeIcon} alt="" />
      <h2>Home</h2>
    </Link>
  </div>
  )
}

export default Header;