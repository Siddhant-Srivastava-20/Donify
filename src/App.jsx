import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import MatchFinder from "./pages/MatchFinder/MatchFinder";
import RequestBoard from "./pages/RequestBoard/RequestBoard";
import DonorRegistry from "./pages/DonorRegistry/DonorRegistry";
import DonorRegistration from "./pages/DonorRegistration/DonorRegistration";

function App() {
  const [data, setData] = useState([]);
  const [donors, setDonors] = useState([]);
  useEffect(() => {
    fetch("https://backenderr.onrender.com/api/dataa")
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setData(result[0].requests);
        setDonors(result[0].donors);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/requests" element={<RequestBoard data={data} />} />
        <Route path="/donors" element={<DonorRegistry donors={donors} />} />
        <Route path="/find-match" element={<MatchFinder />} />
        <Route path="/register" element={<DonorRegistration />} />
      </Routes>
    </Router>
  );
}

export default App;