import { Container, Img, Introduction, Space } from "./styles";

interface IIntroductionMyRoom {
  introduction: string;
  peoploimg: string;
  bedrooms: number;
  beds: number;
  bathrooms: number;
}

export function IntroductionMyRoom({
  introduction,
  peoploimg,
  bedrooms,
  beds,
  bathrooms,
}: IIntroductionMyRoom) {
  return (
    <Container>
      <Introduction>
        <h1>{introduction}</h1>
        <h2>
          <span>{bedrooms} bedrooms</span>
          <Space>-</Space>
          <span>{beds} beds</span>
          <Space>-</Space>
          <span>{bathrooms} bathrooms</span>
        </h2>
      </Introduction>
      <Img>
        <img src={peoploimg} alt="person" />
      </Img>
    </Container>
  );
}
