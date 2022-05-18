import {Route, Routes } from "react-router-dom";
import IndexPage from "./pages";
import BrowsePage from "./pages/browse";
import HomePage from "./pages/home";
function App() {
  return (
  <Routes>
    <Route path="/" element={<IndexPage />} />
    <Route path="/browse" element={<BrowsePage />} />
    <Route path="/homepage" element={<HomePage />}/>
  </Routes>
  );
}

export default App;
