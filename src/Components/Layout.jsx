import  React from 'react' ;
import { Sidebar } from './Sidebar';
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