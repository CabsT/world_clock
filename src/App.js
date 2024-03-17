import "./App.css";
import WorldClock from "./WorldClock";

function App() {
  return (
    <div className="App">
      <WorldClock />
      <footer className="text-center">
        This project was coded by Charné Teichert and hosted as{" "}
        <a href="https://github.com/CabsT/world_clock" target="_blank">
          open-sourced on Github
        </a>
      </footer>
    </div>
  );
}

export default App;
