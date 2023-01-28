import GridProducts from "./pages/GridProducts";
import { Routes, Route } from "react-router-dom";
import FavoritesPage from "./pages/FavoritesPage";
import ProductInCart from "./pages/ProductInCart";

function App() {
  return (
    <Routes>
      <Route path="/" element={<GridProducts />} />
      <Route path="/favorite" element={<FavoritesPage />} />
      <Route path="/productInCart" element={<ProductInCart />} />
    </Routes>
  );
}

export default App;
