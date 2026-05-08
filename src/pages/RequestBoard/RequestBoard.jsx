import { useState } from "react";
import "./RequestBoard.css";
import RequestCard from "../../components/RequestCard/RequestCard";
import Navbar from "../../components/Navbar/Navbar";

export default function RequestBoard({ data }) {
  const bloodFilters = [
    "All",
    "A+",
    "A-",
    "B+",
    "B-",
    "O+",
    "O-",
    "AB+",
    "AB-",
  ];

  const [active, setActive] = useState("All");
  const filteredData = active === "All" 
    ? data 
    : data.filter((item) => {
        const bloodGroup = item.bloodGroup || item.blood_group || "O+";
        return bloodGroup === active;
      });

  return (
    <>tw
      <Navbar />
      <div className="request-board">
        <div className="header">
          <h1>Blood Requests</h1>
          <p>Find patients who need blood donations urgently</p>
        </div>
        <div className="filters">
          {bloodFilters.map((group) => (
            <button
              key={group}
              onClick={() => setActive(group)}
              className={`filter-btn ${
                active === group ? "active" : ""
              }`}
            >
              {group}
            </button>
          ))}
        </div>

        <div className="cards-container">
          {filteredData.map((item, index) => {
            console.log("Item data:", item);
            return (
              <RequestCard
                key={index}
                bloodGroup={item.bloodGroup || item.blood_group || "O+"}
                name={item.name || item.patientName || item.patient_name || item.fullName || `Patient ${index + 1}`}
                hospital={item.hospital || item.hospital_name || item.hospitalName || "AIIMS"}
                city={item.city || "Delhi"}
                time={item.time || item.createdAt || "10 min ago"}
                units={item.units || item.unitsNeeded || 2}
                urgency={item.urgency || item.priority || "critical"}
              />
            );
          })}
        </div>

        <button className="floating-btn">+</button>
      </div>
    </>
  );
}import { useState } from "react";
import "./RequestBoard.css";
import RequestCard from "../../components/RequestCard/RequestCard";
import Navbar from "../../components/Navbar/Navbar";

export default function RequestBoard({ data }) {
  const bloodFilters = [
    "All",
    "A+",
    "A-",
    "B+",
    "B-",
    "O+",
    "O-",
    "AB+",
    "AB-",
  ];

  const [active, setActive] = useState("All");

  // Filter data based on selected blood group
  const filteredData = active === "All" 
    ? data 
    : data.filter((item) => {
        const bloodGroup = item.bloodGroup || item.blood_group || "O+";
        return bloodGroup === active;
      });

      return (
    <>
      <Navbar />

      <div className="request-board">
        {/* HEADER */}
        <div className="header">
          <h1>Blood Requests</h1>
          <p>Find patients who need blood donations urgently</p>
        </div>

        {/* FILTERS */}
        <div className="filters">
          {bloodFilters.map((group) => (
            <button
              key={group}
              onClick={() => setActive(group)}
              className={`filter-btn ${
                active === group ? "active" : ""
              }`}
            >
              {group}
            </button>
          ))}
        </div>

        {/* CARDS GRID */}
        <div className="cards-container">
          {filteredData.map((item, index) => {
            console.log("Item data:", item); // Debug log to see data structure
            return (
              <RequestCard
                key={index}
                bloodGroup={item.bloodGroup || item.blood_group || "O+"}
                name={item.name || item.patientName || item.patient_name || item.fullName || `Patient ${index + 1}`}
                hospital={item.hospital || item.hospital_name || item.hospitalName || "AIIMS"}
                city={item.city || "Delhi"}
                time={item.time || item.createdAt || "10 min ago"}
                units={item.units || item.unitsNeeded || 2}
                urgency={item.urgency || item.priority || "critical"}
              />
            );
          })}
        </div>

        {/* FLOAT BUTTON */}
        <button className="floating-btn">+</button>
      </div>
    </>
  );
}