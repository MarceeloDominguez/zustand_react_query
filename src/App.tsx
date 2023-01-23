import GridProducts from "./pages/GridProducts";
import { Routes, Route } from "react-router-dom";
import FavoritesPage from "./pages/FavoritesPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<GridProducts />} />
      <Route path="/favorite" element={<FavoritesPage />} />
    </Routes>
  );
}

export default App;
