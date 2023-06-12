import Image from "next/image";
import infoIcon from '../../assets/info-icon.svg';


type Props = {
  text: string
}

const InfoBlock: React.FC<Props> = ({
  text
}) => {
  return (
  <div className="info-block">
    <div className="info-block-image">
      <Image 
        src={infoIcon}
        alt=""
        width={250}
        height={250}
        className="info-block-image-icon"
      />
    </div>
    <div className="info-block-text">{text}</div>
  </div>
  )
}

export default InfoBlock;