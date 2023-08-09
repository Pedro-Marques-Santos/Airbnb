import { IntroductionMyRoom } from "../IntroductionMyRoom";
import { LargText } from "../IntroductionMyRoom/styles";
import { Container } from "./styles";

interface IAboutRoom {
  largtext: string;
  introduction: string;
  peoploimg: string;
  bedrooms: number;
  beds: number;
  bathrooms: number;
}

export function AboutRoom({
  largtext,
  introduction,
  peoploimg,
  bedrooms,
  beds,
  bathrooms,
}: IAboutRoom) {
  return (
    <Container>
      <IntroductionMyRoom
        introduction={introduction}
        peoploimg={peoploimg}
        bedrooms={bedrooms}
        beds={beds}
        bathrooms={bathrooms}
      />
      <LargText>{largtext}</LargText>
    </Container>
  );
}
