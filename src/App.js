import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import TripsList from "./components/TripsList";
import TripDetail from "./components/TripDetail";
import { Route, Routes } from "react-router-dom";
import SearchBar from "./components/SearchBar";
import NotFound from "./components/NotFound";
import TripItem from "./components/TripItem";

function App() {
  return (
    <div id="page-top">
      <Nav />

      <Routes>
        <Route path="*" Component={NotFound} />
        <Route path="/Home" Component={Home} />
        <Route path="/SearchBar" Component={SearchBar} />
        <Route path="/TripsList" Component={TripsList} />
        <Route path="/TripDetail/:slug" Component={TripDetail} />
      </Routes>
    </div>
  );
}

export default App;
