import { Image, ImageProps } from "@chakra-ui/react";
import bullsEye from "../assets/bulls-eye.png";
import thumbsUp from "../assets/thumbs-up.png";
import meh from "../assets/meh.png";

interface Props {
  rating: number;
}
const Emoji = ({ rating }: Props) => {
  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh" },
    4: { src: thumbsUp, alt: "recommended" },
    5: { src: bullsEye, alt: "Exceptional" },
  };
  return <Image {...emojiMap[rating]} boxSize="25px" marginTop={1} />;
};

export default Emoji;
