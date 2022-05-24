import {Route, Routes } from "react-router-dom";
import IndexPage from "./pages";
import BrowsePage from "./pages/browse";
import HomePage from "./pages/home";
import UserProfile from "./pages/userprofile";
function App() {
  return (
  <Routes>
    <Route path="/" element={<IndexPage />} />
    <Route path="/browse" element={<BrowsePage />} />
    <Route path="/homepage" element={<HomePage />}/>
    <Route path="/userprofile" element={<UserProfile/>}></Route>
  </Routes>
  );
}

export default App;
