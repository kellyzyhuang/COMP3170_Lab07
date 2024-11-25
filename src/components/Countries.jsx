import { useEffect, useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import './Countries.css'; 

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/name/kingdom");
        const data = await response.json();
        setCountries(data);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchCountries();
  }, []);

  const handleSelect = (event) => {
    const selectedCountry = countries.find((country) => country.cca2 === event.target.value);
    if (selectedCountry) {
      navigate(`/countries/${selectedCountry.cca2}`, { state: { data: selectedCountry } });
    }
  };

  return (
    <div className="countries">
      <h1>World Kingdoms</h1>
      <label htmlFor="country-select">Choose a country:</label>
      <select id="country-select" onChange={handleSelect}>
        <option value="">Select a country</option>
        {countries.map((country) => (
          <option key={country.cca2} value={country.cca2}>
            {country.name.common}
          </option>
        ))}
      </select>
      <Outlet />
    </div>
  );
};

export default Countries;
