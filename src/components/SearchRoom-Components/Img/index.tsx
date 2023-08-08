import { Container } from "./styles";

import img1 from "../../../assets/img2.png";

export function Img() {
  return (
    <Container>
      <h1>
        Cozy, peaceful and private room with<span>.</span>
      </h1>
      <img src={img1} alt="Room" />
    </Container>
  );
}
