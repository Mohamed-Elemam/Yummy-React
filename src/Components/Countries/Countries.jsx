import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import LoadingSpinner from "./../LoadingSpinner/LoadingSpinner";
export function Countries() {
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(false);

  async function getDishs() {
    try {
      setLoading(true);

      let { data } = await axios.get(
        import.meta.env.VITE_API_LINK_GET_ALL_COUNTRIES
      );
      setApiData(data.meals);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getDishs();
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }
  return (
    <>
      <div className="row">
        {apiData.map((ele, index) => (
          <Link
            to={`/countries/${ele.strArea}`}
            className="col-sm-12 col-md-6 col-lg-4 col-xl-3 text-center pointer"
            key={index}
          >
            <div className="county">
              <i
                className="fas fa-house-laptop"
                style={{ fontSize: "64px" }}
              ></i>
              <p style={{ fontSize: "24.784px", fontWeight: "500" }}>
                {ele.strArea}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
