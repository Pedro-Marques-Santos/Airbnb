/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext, ReactNode, useEffect, useState } from "react";
import roomsData from "../data/rooms";

interface MyRoomsProviderProps {
  children: ReactNode;
}

type TMyRoomsContextProps = {
  products: IProducts[];
  selectProduct: (product: IProducts) => void;
  myProduct: IProducts | null;
};

export interface IProducts {
  id: number;
  title: string;
  supehost: boolean;
  initialabouthome: string;
  img: string;
  avaliation: string;
  introduction: string;
  peaplo: string;
  about: string;
  price: number;
  bedrooms: number;
  beds: number;
  bathrooms: number;
}

export const MyRoomsContext = createContext<TMyRoomsContextProps>(
  {} as TMyRoomsContextProps
);

export function MyRoomsProvider({ children }: MyRoomsProviderProps) {
  const [products, setProducts] = useState<IProducts[]>(roomsData);
  const [myProduct, setMyProduct] = useState<IProducts | null>(null);

  function selectProduct(product: IProducts) {
    setMyProduct(product);
  }

  return (
    <MyRoomsContext.Provider value={{ products, selectProduct, myProduct }}>
      {children}
    </MyRoomsContext.Provider>
  );
}
