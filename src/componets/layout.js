import { Outlet } from "react-router-dom";
import Navbar from "./navbar"


const Layout =()=>{
    return(
        <div  className="myimage h-screen w-screen max-[640px]:overflow-auto max-[635px]:h-screen w-screen" style={{loading:"lazy"}}>
            <Navbar />
            <Outlet />  
        </div>
    )
}
export default Layout;