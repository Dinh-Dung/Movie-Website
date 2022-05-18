import { BrowserRouter, Route, Routes } from "react-router-dom";
import IndexPage from "./pages";
import BrowsePage from "./pages/browse";
function App() {
  return (
  <Routes>
    <Route path="/" element={<IndexPage />} />
    <Route path="/browse" element={<BrowsePage />} />
  </Routes>
  );
}

export default App;
