import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import LoadingSpinner from "./../LoadingSpinner/LoadingSpinner";

export function Categories() {
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState("");

  const styles = {
    fontSize: "16px",
    WebkitLineClamp: 3,
    overflow: "hidden",
  };

  async function getCategories() {
    try {
      setLoading(true);
      let { data } = await axios.get(
        import.meta.env.VITE_API_LINK_GET_ALL_CATEGORIES
      );
      setApiData(data.categories);
    } catch (error) {
      apiError(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getCategories();
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <div className="row">
        <p className="text-bg-danger text-center">{apiError}</p>
        {apiData?.map((ele) => (
          <Link
            className="col-sm-12 col-md-6 col-lg-4 col-xl-3 my-3"
            key={ele.idCategory}
            to={`/categories/${ele.strCategory}`}
          >
            <div className="food rounded-4">
              <div className=" meal-card">
                <img src={ele.strCategoryThumb} alt="food" />
                <div
                  className="card-layer d-flex  align-items-center justify-content-center flex-column"
                  style={{ color: "#000", overflow: "hidden" }}
                >
                  <p>{ele.strCategory}</p>
                  <p style={styles}>
                    {ele.strCategoryDescription
                      ?.split(" ")
                      .slice(0, 20)
                      .join(" ")}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
