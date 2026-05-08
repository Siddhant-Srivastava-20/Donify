import { useState } from "react";
import "./DonorRegistration.css";

const DonorRegistration = () => {
  // Form state - stores user input
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    bloodGroup: "",
    age: "",
    city: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }};