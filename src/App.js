import logo from "./assets/app/logo.png";
import brand from "./assets/app/brand.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Updated</h1>
      <img src={logo} alt="logo" />
      <img src={brand} alt="brand"  width={100}/>
    </div>
  );
}

export default App;
