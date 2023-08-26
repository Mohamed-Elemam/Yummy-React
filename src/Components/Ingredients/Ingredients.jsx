import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


export default function Ingredients() {
 
  const [apiData, setApiData] = useState([]);
  
  async function getIngredient() {
    try {
      let { data } = await axios.get(
        import.meta.env.VITE_API_LINK_GET_ALL_INGREDIENTS
      );
      console.log(data);
      
      setApiData(data.meals);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getIngredient();
  }, []);

  return (
  


    <>

<div className="row">

 {apiData.map((ele , index )=>( 

   <div key = {index} style={{overflow:"hidden", cursor:"pointer" ,}} className="col-sm-12 col-md-6 col-lg-4 col-xl-3  my-2 text-center" onclick='chooseIngredient("${result.meals[i].strIngredient}")'>
   <Link to={`/ingredients/${ele.strIngredient}`}>
      <div className="county"> 
      <i className="fas fa-drumstick-bite"style={{fontSize:"64px"}}  ></i>

    <p style={{fontSize:"24.784px" , fontWeight:"500"}}>{ele.strIngredient}</p>
    <p  >{ele?.strDescription?.split(' ').slice(0,20).join(' ')}</p>
    </div>
    </Link>
    </div>
    
    ))} 
    </div>

      
    
    </>
  )
}
