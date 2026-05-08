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

alert("Thank you for registering as a donor! Your information has been saved.");
setFormData({
  fullName: "",
  email: "",
  phone: "",
  bloodGroup: "",
  age: "",
  city: "",
});


return (
  <div className="registration-page">

    <div className="registration-header">
      <h1>Become a Donor</h1>

      <p>
        Register now and help save lives.
        Every donation counts!
      </p>
    </div>


    <div className="registration-container">
  <form
    onSubmit={handleSubmit}
    className="registration-form"
  >

  </form>
</div>

<div className="form-group">
  <label htmlFor="fullName">
    Full Name
  </label>

  <input
    type="text"
    id="fullName"
    name="fullName"
    value={formData.fullName}
    onChange={handleChange}
    placeholder="Enter your full name"
    required
  />
</div>

<div className="form-group">
  <label htmlFor="email">
    Email
  </label>

  <input
    type="email"
    id="email"
    name="email"
    value={formData.email}
    onChange={handleChange}
    placeholder="Enter your email"
    required
  />
</div>

<div className="form-group">
  <label htmlFor="phone">
    Phone Number
  </label>

  <input
    type="tel"
    id="phone"
    name="phone"
    value={formData.phone}
    onChange={handleChange}
    placeholder="Enter your phone number"
    required
  />
</div>

<div className="form-group">
  <label htmlFor="bloodGroup">
    Blood Group
  </label>

  <select
    id="bloodGroup"
    name="bloodGroup"
    value={formData.bloodGroup}
    onChange={handleChange}
    required
  >
    <option value="">
      Select your blood group
    </option>

    <option value="O+">O+</option>
    <option value="O-">O-</option>
    <option value="A+">A+</option>
    <option value="A-">A-</option>
    <option value="B+">B+</option>
    <option value="B-">B-</option>
    <option value="AB+">AB+</option>
    <option value="AB-">AB-</option>
  </select>
</div>

<div className="form-group">
  <label htmlFor="age">
    Age
  </label>

  <input
    type="number"
    id="age"
    name="age"
    value={formData.age}
    onChange={handleChange}
    placeholder="Enter your age"
    required
  />
</div>

<div className="form-group">
  <label htmlFor="city">
    City
  </label>

  <input
    type="text"
    id="city"
    name="city"
    value={formData.city}
    onChange={handleChange}
    placeholder="Enter your city"
    required
  />
</div>

  </div>
);



