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
    const getAvatarColor = (name) => {
    const colors = [
      "#2563eb",
      "#7c3aed",
      "#d32f2f",
      "#ea580c",
      "#059669",
      "#0891b2",
    ];
    return colors[name.charCodeAt(0) % colors.length];
  };
  const getInitials = (name) => {
    return name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };
  return (
    <>
      <Navbar />
      <div className="container">
        <h1>
          Find a donor. <span>Right now.</span>
        </h1>
        <p className="subtitle">
          Search our network of verified donors to find a match instantly.
        </p>
        <div className="card">
          <div className="row">
            <div className="inputBox">
              <label>Blood Group</label>
              <select
                value={selectedBloodGroup}
                onChange={(e) => setSelectedBloodGroup(e.target.value)}
              >
                <option>Select blood group</option>
                <option>A+</option>
                <option>A-</option>
                <option>B+</option>
                <option>B-</option>
                <option>O+</option>
                <option>O-</option>
                <option>AB+</option>
                <option>AB-</option>
              </select>
            </div>
            <div className="inputBox">
              <label>City</label>
              <input
                type="text"
                placeholder="Enter city name"
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
              />
            </div>
          </div>
          <button className="btn" onClick={handleFindMatch}>
            🔍 Find Match
          </button>
        </div>
        {searched && (
          <div className="results-section">
            <h2 className="results-count">
              {filteredDonors.length} eligible donor{filteredDonors.length !== 1 ? "s" : ""} found
            </h2>
            <div className="donors-list">
              {filteredDonors.length > 0 ? (
                filteredDonors.map((donor, index) => (
                  <DonorCard
                    key={index}
                    name={donor.name || donor.fullName || "Unknown"}
                    bloodGroup={donor.bloodGroup || donor.blood_group || "O+"}
                    location={donor.city || donor.location || "Unknown"}
                    phone={donor.phone || "+91-XXXXXXXXXX"}
                    status={{
                      type: donor.available ? "available" : "wait",
                      text: donor.available ? "Available now" : "Will be available soon",
                    }}
                    initials={getInitials(donor.name || donor.fullName || "Unknown")}
                    color={getAvatarColor(donor.name || donor.fullName || "Unknown")}
                  />
                ))
              ) : (
                <div className="no-results">
                  <p>No donors found matching your criteria. Try different filters.</p>
                </div>
              )}
            </div>
          </div>
        )}
        <button className="plus">+</button>
      </div>
    </>
  );
}

export default MatchFinder;