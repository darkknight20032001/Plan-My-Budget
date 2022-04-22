import logo from "./logo.svg";
import "./App.css";
import myDatabase from "./Database/myDatabase";
function App() {
  return (
    <div className="App">
      {myDatabase.map((listItems) => {
        return (
          <>
            <li>{listItems.cityName}</li>
            <li>{listItems.gdbPerCapita}</li>
            <li>{listItems.humanFreedomIndex}</li>
            <li>{listItems.lifeExpectancy}</li>
          </>
        );
      })}
    </div>
  );
}

export default App;
