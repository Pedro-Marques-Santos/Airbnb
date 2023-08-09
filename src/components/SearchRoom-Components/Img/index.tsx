import { Container } from "./styles";

interface IImg {
  title: string;
  img: string;
}

export function Img({ title, img }: IImg) {
  return (
    <Container>
      <h1>
        {title}
        <span>.</span>
      </h1>
      <img src={img} alt="Room" />
    </Container>
  );
}
