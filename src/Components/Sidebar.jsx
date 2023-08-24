import React, {  useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { VscChromeClose } from "react-icons/vsc";
import { VscMenu } from "react-icons/vsc";


export function Sidebar() {
  const [isopen, setIsOpen] = useState(true);

  function closeSidebar() {
setIsOpen (!isopen)
  }
 
  
const menuItems= [
  //TODO remove icon: ' a'
{path: "/" , name: "Home" ,icon: ' a'},
{path: "/search" , name: "Search" ,icon: ' a'},
{path: "/categories" , name: "Categories" ,icon: ' a'},
{path: "/countries" , name: "Countries" ,icon: ' a'},
{path: "/ingredients" , name: "Ingredients" ,icon: ' a'},
{path: "/contactUs" , name: "ContactUs" ,icon: ' a'},
]
  return (
    <>
      <div className="sidebar">
      {/* <div  > */}
        <div className="innerbar "  style={{width: isopen ? "0px" :"200px" }}>
          <ul className="nav nav-pills flex-column my-5 mx-3" >
<li>
{menuItems.map((ele , index)=> (
  <NavLink to={ele.path} className="nav-link " aria-current="page" key ={index} onClick={closeSidebar} >
                {ele.name}
              </NavLink>
))}
</li>
          </ul>
          <hr />
  {/* TODO ?? */}
          
          {/* <div className="px-4 my-3">
            <div>
              <i className="fa-brands fa-facebook-f"></i>
              <i className="fa-brands fa-twitter mx-3"></i>
              <i className="fas fa-globe"></i>
            </div>
            <p>Copyright © 2023 All Rights Reserved.</p>
          </div> */}
        </div>

        <div
          className="outterbar bg-light text-black d-flex  justify-content-between flex-column"
onClick={closeSidebar}       >
          <div>
            <img src={logo} className="my-5" alt="logo" />
          </div>
          <div>
            <i className={` fs-1 mb-5 fs-2 mx-2  ` }>
           {isopen?  <VscMenu/> :  <VscChromeClose/>}
            </i>
         
          </div>
  {/* TODO remove those  */}

          <div className="mx-2 px-2 my-5">
            <i className="fas fa-globe"></i>
            <i className="fas fa-share-nodes"></i>
          </div>
        </div>
      </div>
    </>
  );
}
