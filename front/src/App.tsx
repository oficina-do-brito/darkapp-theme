import { GlobalStyle } from "./css/globalstyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";

export const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
