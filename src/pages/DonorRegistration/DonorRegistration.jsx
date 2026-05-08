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



  </div>
);



