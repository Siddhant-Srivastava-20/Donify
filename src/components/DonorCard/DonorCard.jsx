import "./DonorCard.css";

const DonorCard = ({
  name,
  bloodGroup,
  city,
  phone,
}) => {

  const initials = name
    ?.split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2);

  return (
    <div className="donor-card">
      <div className="donor-top">
        <div className="donor-avatar">
          {initials}
        </div>
        <div className="donor-details">
          <div className="donor-name-row">
            <h3>{name}</h3>
            <span className="donor-blood-group">
              {bloodGroup}
            </span>
          </div>
          <p className="donor-city">
            📍 {city}
          </p>
          <p className="donor-status">
            ● Eligible to donate
          </p>
          <p className="donor-phone">
            {phone}
          </p>
        </div>
      </div>
      <button className="donor-call-btn">
        📞 Call
      </button>
    </div>
  );
};

export default DonorCard;