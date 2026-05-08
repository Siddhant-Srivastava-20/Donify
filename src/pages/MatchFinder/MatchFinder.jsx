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
    const handleFindMatch = () => {
    setSearched(true);
    let filtered = allDonors;
    if (selectedBloodGroup && selectedBloodGroup !== "Select blood group") {
      filtered = filtered.filter(
        (donor) =>
          donor.bloodGroup === selectedBloodGroup ||
          donor.blood_group === selectedBloodGroup
      );
    }
    if (selectedCity) {
      filtered = filtered.filter(
        (donor) =>
          donor.city?.toLowerCase().includes(selectedCity.toLowerCase()) ||
          donor.location?.toLowerCase().includes(selectedCity.toLowerCase())
      );
    }
    setFilteredDonors(filtered);
  };
}