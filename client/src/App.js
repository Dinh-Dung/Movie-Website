import {Route, Routes } from "react-router-dom";
import IndexPage from "./pages";
import BrowsePage from "./pages/browse";
import HomePage from "./pages/home";
import MoviePage from "./pages/movie";
import SignIn from "./pages/signin";
import SignUp from "./pages/signup";

function App() {
  return (
  <Routes>
    <Route path="/" element={<IndexPage />} />
    <Route path="/browse" element={<BrowsePage />} />
    <Route path="/homepage" element={<HomePage />}/>
    <Route path="/moviepage" element={<MoviePage />}/>
    <Route path="/signin" element={<SignIn />}/>
    <Route path="/signup" element={<SignUp />}/>
  </Routes>
  );
}

export default App;
