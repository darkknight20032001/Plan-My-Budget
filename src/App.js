import "./App.css";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import HomePage from "./Components/Pages/HomePage";
import MainPage from "./Components/Pages/MainPage";
function App() {
  return (
    <div className="App">
    <BrowserRouter>
      
<Routes>
  <Route path="/" element={<HomePage />} />
  <Route path="/mainPage" element={<MainPage />} />
</Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
