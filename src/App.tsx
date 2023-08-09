import { GlobalStyle } from "./styles/global";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { SearchRoom } from "./pages/SearchRoom";
import { MyRoomsProvider } from "./context/MyRooms";

export function App() {
  return (
    <MyRoomsProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
        <Routes>
          <Route path="searchroom" element={<SearchRoom />}></Route>
        </Routes>
      </BrowserRouter>
      <GlobalStyle />
    </MyRoomsProvider>
  );
}
