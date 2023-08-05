import { Outlet } from "react-router-dom";
import Navbar from "./navbar"


const Layout =()=>{
    return(
        <div className="myimage h-screen w-screen  ">
            <Navbar />
            <Outlet />  
        </div>
    )
}
export default Layout;