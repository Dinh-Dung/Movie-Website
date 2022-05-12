
import './App.css';
import Navigation from './components/Home/Header/Navigation/Navigation.jsx'
import Banner from './components/Home/Banner/Banner';
function App() {
  return (
    <div className="App">
      <header className="Header">
          <Navigation />
        </header>
      <Banner/>
    </div>
  );
}

export default App;
