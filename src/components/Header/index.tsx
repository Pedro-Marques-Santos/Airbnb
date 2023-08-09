import { Container } from "./styles";
import logo from "../../assets/logo.png";
import { Search } from "../Search";

import { useNavigate } from "react-router-dom";

interface HeaderProps {
  openModalSearch: () => void;
  closeModalSearch: () => void;
}

export function Header({ openModalSearch, closeModalSearch }: HeaderProps) {
  const navegate = useNavigate();

  function goHomePage() {
    navegate("/");
  }

  return (
    <Container>
      <div className="logo">
        <img src={logo} alt="logo" onClick={goHomePage} />
      </div>
      <Search
        openModalSearch={openModalSearch}
        closeModalSearch={closeModalSearch}
      />
    </Container>
  );
}
