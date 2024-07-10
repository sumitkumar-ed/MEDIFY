import Nav from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";
import StyledEngineProvider from "@mui/material/StyledEngineProvider";

import "./App.css";

function App() {
  // const [data, setData] = useState{()};
  return (
    <StyledEngineProvider injectFirst>
      <div className="app-container">
        <Nav />
        <div className="app-content">
          <Outlet />
          {/* <Outlet context={{ data: {topAlbums, newAlbums, songs} }} /> */}
        </div>
        <Footer />
      </div>
    </StyledEngineProvider>
  );
}

export default App;
