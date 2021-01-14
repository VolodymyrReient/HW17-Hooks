import './App.css';
import Timer from "./Timer";
function App() {
  return (
    <div className="App">
      <Timer
      key={1} 
      time={10}
      step={1000}
      autostart={false}
      />
      <Timer
      key={2} 
      time={16}
      step={2000}
      autostart={true}
      />
    </div>
  );
}

export default App;
