import { useLocation } from "react-router-dom";
import './Details.css'; 

const Details = () => {
  const { state } = useLocation();
  const country = state?.data;

  if (!country) {
    return <p>No country data available.</p>;
  }

  return (
    <div className="details">
      <h2>Country Details</h2>
      <p><strong>Name:</strong> {country.name.common}</p>
      <p><strong>Region:</strong> {country.region}</p>
      <p><strong>Population:</strong> {country.population}</p>
      <p><strong>Capital:</strong> {country.capital ? country.capital[0] : "N/A"}</p>
      <p><strong>Subregion:</strong> {country.subregion}</p>
      <img src={country.flags.svg} alt={`Flag of ${country.name.common}`} width="200" />
    </div>
  );
};

export default Details;
