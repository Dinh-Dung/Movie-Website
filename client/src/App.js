import {Route, Routes } from "react-router-dom";
import IndexPage from "./pages";
import BrowsePage from "./pages/browse";
import HomePage from "./pages/home";
import Userprofile from "./pages/userprofile";
import MoviePage from "./pages/movie";
import Auth from "./pages/auth";

function App() {
  return (
  <Routes>
    <Route path="/" element={<IndexPage />} />
    <Route path="/browse" element={<BrowsePage />} />
    <Route path="/homepage" element={<HomePage />}/>
    <Route path="/userprofile" element={<Userprofile />}/>
    <Route path="/moviepage" element={<MoviePage />}/>
    <Route path="/auth" element={<Auth />}/>
  </Routes>
  );
}

export default App;
