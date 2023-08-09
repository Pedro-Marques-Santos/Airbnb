import { ContentList } from "../ContentList";
import { Container, ItemMain } from "./styles";

import { useNavigate } from "react-router-dom";

import { useContext } from "react";
import { IProducts, MyRoomsContext } from "../../context/MyRooms";

export function List() {
  const navegate = useNavigate();

  const { products, selectProduct } = useContext(MyRoomsContext);

  function goPageSearchRoom(product: IProducts) {
    selectProduct(product);
    navegate("/searchroom");
  }

  return (
    <Container>
      {products.map((product) => {
        return (
          <ItemMain onClick={() => goPageSearchRoom(product)}>
            <ContentList
              img={product.img}
              type={product.supehost ? "superhost" : ""}
              tagAv={product.avaliation}
              leg={product.title}
              legTitle={product.initialabouthome}
            />
          </ItemMain>
        );
      })}
    </Container>
  );
}
