import  React from 'react' ;
import { Sidebar } from '../Sidebar/Sidebar.jsx';
import { Outlet } from 'react-router-dom';


export function Layout(){


return(
<>
 <Sidebar/>
<div className="container py-5">

    <Outlet/>
</div>
</>

)

}