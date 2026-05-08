import { useState } from "react";
import "./DonorRegistry.css";
import DonorCard from "../../components/DonorCard/DonorCard";
import Navbar from "../../components/Navbar/Navbar";

export default function DonorRegistry({ donors }) {

  const [selectedGroup, setSelectedGroup] = useState("All");

  const filteredDonors =
    selectedGroup === "All"
      ? donors
      : donors.filter(
          (donor) => donor.bloodGroup === selectedGroup
        );

  return (
    <>
      <Navbar />
      <div className="registry">
        <div className="top-banner">
          <div className="banner-left">
            <span className="banner-icon">♡</span>
            <div>
              <h3>Save a life. Register as a donor today.</h3>
              <p>Your donation can save up to 3 lives.</p>
            </div>
          </div>
          <button className="register-btn">
            Register Now
          </button>
        </div>
        <h1>Verified Donors</h1>
        <p className="sub">
          Connect with eligible blood donors in your area
        </p>
        <div className="filters">
          {["All", "A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"].map(
            (group, index) => (
              <button
                key={index}
                className={`filter-btn ${selectedGroup === group ? "active" : ""}`}
                onClick={() => setSelectedGroup(group)}
              >
                {group}
              </button>
            )
          )}
        </div>
        <div className="grid">
          {filteredDonors.map((donor, index) => (
            <DonorCard
              key={index}
              name={donor.name}
              bloodGroup={donor.bloodGroup}
              city={donor.city}
              phone={donor.phone}
            />
          ))}
        </div>
        <div className="floating-btn">
          +
        </div>
      </div>
    </>
  );
}