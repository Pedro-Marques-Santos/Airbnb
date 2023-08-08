import { Container, Img, Introduction, Space } from "./styles";

import img from "../../../../assets/person1.png";

export function IntroductionMyRoom() {
  return (
    <Container>
      <Introduction>
        <h1>Espaço inteiro: Casa (hospedado por Hian)</h1>
        <h2>
          <span>5 quartos</span>
          <Space>-</Space>
          <span>10 camas</span>
          <Space>-</Space>
          <span>7 banheiros</span>
        </h2>
      </Introduction>
      <Img>
        <img src={img} alt="person" />
      </Img>
    </Container>
  );
}
