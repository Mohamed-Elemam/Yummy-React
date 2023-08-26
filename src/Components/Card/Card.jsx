import React from 'react'

export default function Card({ele }) {
  return (
   <>
    <div className="" >
      
          <div className="food rounded-4">
            <div className=" ottar">
              <img src={ele.strMealThumb} alt="food" />
              <div className=" innerself" style={{ color: "#000" }}>
                <p> {ele.strMeal} </p>
              </div>
            </div>
          </div>
        </div>
   </>
  )
}
