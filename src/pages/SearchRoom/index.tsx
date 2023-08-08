import { useState } from "react";
import { Header } from "../../components/Header";
import { Container } from "./styles";
import { ModalSearch } from "../../components/ModalSearch";
import { Img } from "../../components/SearchRoom-Components/Img";
import { AboutRoom } from "../../components/SearchRoom-Components/AboutRoom-Components/AboutRoom";
import { CardCheckin } from "../../components/SearchRoom-Components/CardCheckin";
import { Footer } from "../../components/Footer";

export function SearchRoom() {
  const [stateModalSearch, setStateModalSearch] = useState(false);

  function handleOnpenModalSearch() {
    setStateModalSearch(true);
  }

  function handleCloseModalSearch() {
    setStateModalSearch(false);
  }

  return (
    <Container>
      <Header
        openModalSearch={handleOnpenModalSearch}
        closeModalSearch={handleCloseModalSearch}
      />
      <Img />
      <AboutRoom />
      <CardCheckin />
      <Footer />
      <ModalSearch
        isOpen={stateModalSearch}
        closeModalSearch={handleCloseModalSearch}
      />
    </Container>
  );
}
