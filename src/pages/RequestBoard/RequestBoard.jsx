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

  // Filter data based on selected blood group
  const filteredData = active === "All" 
    ? data 
    : data.filter((item) => {
        const bloodGroup = item.bloodGroup || item.blood_group || "O+";
        return bloodGroup === active;
      })};