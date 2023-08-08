import { useState } from "react";
import { Header } from "../../components/Header";
import { ListHause } from "../../components/ListHause";
import { Footer } from "../../components/Footer";
import { ModalSearch } from "../../components/ModalSearch";

export function Home() {
  const [stateModalSearch, setStateModalSearch] = useState(false);

  function handleOnpenModalSearch() {
    setStateModalSearch(true);
  }

  function handleCloseModalSearch() {
    setStateModalSearch(false);
  }

  return (
    <>
      <Header
        openModalSearch={handleOnpenModalSearch}
        closeModalSearch={handleCloseModalSearch}
      />
      <ListHause />
      <Footer />
      <ModalSearch
        isOpen={stateModalSearch}
        closeModalSearch={handleCloseModalSearch}
      />
    </>
  );
}
