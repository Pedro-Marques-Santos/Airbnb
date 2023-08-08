import { Container } from "./styles";
import logo from "../../assets/logo.png";
import { Search } from "../Search";

interface HeaderProps {
  openModalSearch: () => void;
  closeModalSearch: () => void;
}

export function Header({ openModalSearch, closeModalSearch }: HeaderProps) {
  return (
    <Container>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <Search
        openModalSearch={openModalSearch}
        closeModalSearch={closeModalSearch}
      />
    </Container>
  );
}
