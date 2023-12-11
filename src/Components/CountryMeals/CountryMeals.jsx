import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Card/Card.jsx";
import { Link, useParams } from "react-router-dom";
import LoadingSpinner from "./../LoadingSpinner/LoadingSpinner";

export default function CountryMeals() {
  const [apiData, setApiData] = useState([]);
  const { id } = useParams();
  const [loading, setLoading] = useState(false);

  async function getCountryMeals(countryId) {
    try {
      setLoading(true);
      let { data } = await axios.get(
        import.meta.env.VITE_API_LINK_GET_COUNTRY_MEALS + countryId
      );
      setApiData(data.meals);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getCountryMeals(id);
  }, [id]);

  if (loading) {
    return <LoadingSpinner />;
  }
  return (
    <>
      <div className="row">
        <h2>{id} meals</h2>
        {apiData?.map((ele, index) => (
          <Link
            to={`/recipe/${ele.strMeal}`}
            key={index}
            className="col-sm-12 col-md-6 col-lg-4 col-xl-3 my-3"
          >
            <Card key={index} ele={ele} />
          </Link>
        ))}
      </div>
    </>
  );
}
