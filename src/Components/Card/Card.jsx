import React from 'react'

export default function Card({ele }) {
  return (
   <>
    <div  >
      
          <div className="food rounded-4">
            <div className=" meal-card">
              <img src={ele.strMealThumb} alt="food" />
              <div className=" card-layer" style={{ color: "#000" }}>
                <p> {ele.strMeal} </p>
              </div>
            </div>
          </div>
        </div>
   </>
  )
}
