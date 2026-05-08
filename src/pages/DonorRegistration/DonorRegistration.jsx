import { useState } from "react";
import "./DonorRegistration.css";

const DonorRegistration = () => {

};

export default DonorRegistration;

const [formData, setFormData] = useState({
  fullName: "",
  email: "",
  phone: "",
  bloodGroup: "",
  age: "",
  city: "",
});

const handleChange = (e) => {
  const { name, value } = e.target;

  setFormData({
    ...formData,
    [name]: value,
  });
};

const handleSubmit = (e) => {
  e.preventDefault();

  console.log("Donor Registration Data:", formData);
};