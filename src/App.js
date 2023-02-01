
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ShoppingContextProvider } from "./context/ShoppingContext";
import { ThemeContextProvider } from "./context/ThemeContext";
import ArtAndCraft from "./pages/ArtAndCraft";
import DetailsPage from "./pages/DetailsPage";
import Fashion from "./pages/Fashion";
import LandingPage from "./pages/LandingPage";


function App() {

  return (
    <ShoppingContextProvider>
      <ThemeContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/fashion" element={<Fashion />} />
            <Route path="/details-page" element={<DetailsPage />} />
            <Route path="/art-craft" element={<ArtAndCraft />} />
          </Routes>
        </BrowserRouter>
      </ThemeContextProvider>
    </ShoppingContextProvider>


  );
}

export default App;
