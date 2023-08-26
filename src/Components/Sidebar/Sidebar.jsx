import React, {  useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from '../../../public/logo.png';
import { VscChromeClose } from "react-icons/vsc";
import { VscMenu } from "react-icons/vsc";


export function Sidebar() {
  const [isopen, setIsOpen] = useState(true);

  function closeSidebar() {
setIsOpen (!isopen)
  }
 
  
const menuItems= [
{path: "/" , name: "Home"},
{path: "/search" , name: "Search"},
{path: "/categories" , name: "Categories"},
{path: "/countries" , name: "Countries"},
{path: "/ingredients" , name: "Ingredients"},
{path: "/contactUs" , name: "ContactUs"},
]
  return (
    <>
      <div className="sidebar ">
        <div className="innerbar d-flex flex-column justify-content-between"  style={{width: isopen ? "0px" :"240px" }}>
          <ul className="nav nav-pills flex-column my-5 mx-3" >
<li>
{menuItems.map((menuItem , index)=> (
  <NavLink to={menuItem.path} className="nav-link " aria-current="page" key ={index} onClick={closeSidebar}  >
                {menuItem.name}
              </NavLink>
))}
</li>
          </ul>
          
          <div className="px-4 my-3">
            <div>
              <i className="fa-brands fa-facebook-f"></i>
              <i className="fa-brands fa-twitter mx-3"></i>
              <i className="fas fa-globe"></i>
            </div>
            <p>Copyright © 2023 All Rights Reserved.</p>
          </div>
        </div>

        <div
          className="outterbar bg-light text-black d-flex  justify-content-between flex-column"
 >
          <Link to={'/'}>
            <img src={logo} className="my-5" alt="logo" />
          </Link>
          <div>
            <i className={` fs-1 mb-5 fs-2 mx-2  ` } onClick={closeSidebar}      >
           {isopen?  <VscMenu/> :  <VscChromeClose/>}
            </i>
         
          </div>

          <div className="mx-2 px-2 my-5">
            <i className="fas fa-globe"></i>
            <i className="fas fa-share-nodes"></i>
          </div>
        </div>
      </div>
    </>
  );
}
