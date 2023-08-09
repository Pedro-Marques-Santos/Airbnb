import { useState } from "react";
import { Header } from "../../components/Header";
import { Container, MyError } from "./styles";
import { ModalSearch } from "../../components/ModalSearch";
import { Img } from "../../components/SearchRoom-Components/Img";
import { AboutRoom } from "../../components/SearchRoom-Components/AboutRoom-Components/AboutRoom";
import { CardCheckin } from "../../components/SearchRoom-Components/CardCheckin";
import { Footer } from "../../components/Footer";
import { MyRoomsContext } from "../../context/MyRooms";

import { useNavigate } from "react-router-dom";

import { useContext } from "react";

export function SearchRoom() {
  const navegate = useNavigate();

  const [stateModalSearch, setStateModalSearch] = useState(false);
  const { myProduct } = useContext(MyRoomsContext);

  function handleOnpenModalSearch() {
    setStateModalSearch(true);
  }

  function handleCloseModalSearch() {
    setStateModalSearch(false);
  }

  function goHomePage() {
    navegate("/");
  }

  if (!myProduct) {
    return (
      <Container>
        <Header
          openModalSearch={handleOnpenModalSearch}
          closeModalSearch={handleCloseModalSearch}
        />
        <MyError>
          choose a room on the homepage to access room information on that page:
        </MyError>
        <h6 onClick={goHomePage}>Home page</h6>
        <ModalSearch
          isOpen={stateModalSearch}
          closeModalSearch={handleCloseModalSearch}
        />
      </Container>
    );
  }

  return (
    <Container>
      <Header
        openModalSearch={handleOnpenModalSearch}
        closeModalSearch={handleCloseModalSearch}
      />
      <Img title={myProduct!.title} img={myProduct!.img} />
      <AboutRoom
        largtext={myProduct!.about}
        introduction={myProduct!.introduction}
        peoploimg={myProduct!.peaplo}
        bedrooms={myProduct!.bedrooms}
        beds={myProduct!.beds}
        bathrooms={myProduct!.bathrooms}
      />
      <CardCheckin price={myProduct!.price} />
      <Footer />
      <ModalSearch
        isOpen={stateModalSearch}
        closeModalSearch={handleCloseModalSearch}
      />
    </Container>
  );
}
