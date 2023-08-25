import  React, { useEffect, useState } from 'react' ;
import axios from 'axios'
import { Link } from 'react-router-dom';

export function Categories(){
  const [apiData, setApiData] = useState([]);
  const styles = {
    fontSize: '16px',
    // display: '-webkit-box',
    WebkitLineClamp: 3,
    // WebkitBoxOrient: 'vertical',
    overflow: 'hidden'
  };
 
  async function getCategories() {
    let {data} = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/categories.php`
    );
    setApiData(data.categories);
  }
    
  

  useEffect(() => {
    getCategories();
  }, []);
  
return(
<>
<div className="row">

{apiData?.map((ele )=>(
  
<Link className="col-sm-12 col-md-6 col-lg-4 col-xl-3 my-3" key={ele.idCategory} to={`/categories/${ele.strCategory}`} >
  <div className="food rounded-4">

      <div className=" ottar">
          <img src={ele.strCategoryThumb} alt="food"/ >
          <div className="innerself d-flex  align-items-center justify-content-center flex-column" style={{color:"#000", overflow:"hidden"}}>
              <p >{ele.strCategory}</p>
              <p style={styles}>{ele.strCategoryDescription?.split(" ").slice(0, 20).join(" ")}</p>
              
            </div>
      </div>
  </div>
</Link>

))}
</div>

</>

)
}
