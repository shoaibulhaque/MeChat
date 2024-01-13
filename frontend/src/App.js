import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Login from "./components/Login";
import Messenger from "./components/Messenger";
import ProtectRoute from "./components/ProtectRoute";
import Register from "./components/Register";
import LandingPage from "./components/LandingPage"; // import the LandingPage component

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/messenger/login" element={<Login />} />
          <Route path="/messenger/register" element={<Register />} /> 
          <Route path="/messenger" element={<ProtectRoute> <Messenger /> </ProtectRoute> } />
          <Route path="/" element={<LandingPage />} /> // add a new Route for the LandingPage
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;