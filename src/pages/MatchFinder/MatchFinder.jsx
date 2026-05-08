import { useEffect, useState } from "react";
import "./MatchFinder.css";
import Navbar from "../../components/Navbar/Navbar";
import DonorCard from "../../components/DonorCard/DonorCard";

function MatchFinder() {
  const [allDonors, setAllDonors] = useState([]);
  const [filteredDonors, setFilteredDonors] = useState([]);
  const [selectedBloodGroup, setSelectedBloodGroup] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [searched, setSearched] = useState(false);

  useEffect(() => {
    fetch("https://backenderr.onrender.com/api/dataa")
      .then((response) => response.json())
      .then((result) => {
        console.log("Donors data:", result);
        const donors = result[0]?.donors || result[0]?.data || [];
        setAllDonors(donors);
      })
      .catch((error) => {
        console.log("Error fetching donors:", error);
      });
  }, []);


}