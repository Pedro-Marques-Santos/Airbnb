import { IntroductionMyRoom } from "../IntroductionMyRoom";
import { LargText } from "../IntroductionMyRoom/styles";
import { Container } from "./styles";

export function AboutRoom() {
  return (
    <Container>
      <IntroductionMyRoom />
      <LargText>
        Maravilhosa casa em frente ao mar. Praia de Maresias. A casa conta com
        vários ambientes aconchegantes, amplas salas, área de jogos, piscina,
        área gourmet com churrasqueira, cozinha totalmente equipada. Uma casa
        com total interação e vista para o mar para lazer completo da família.
      </LargText>
    </Container>
  );
}
