import logo from "./logo.svg";
import "./App.css";

function App() {
  const FetchingMyData = async () => {
    const data = await fetch(
      `https://api.maptiler.com/maps/uk-openzoomstack-outdoor/?key=cSJNl4Z5hbInI0xsLNsJ#4.0/54.00000/-3.00000`
    );
    const newData = await data.json();
    console.log(newData);
  };
  return (
    <div className="App">
      <h1 onClick={FetchingMyData}>Hackonomist</h1>
    </div>
  );
}

export default App;
