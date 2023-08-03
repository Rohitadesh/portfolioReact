import {Link} from 'react-router-dom'
const Navbar= ()=>{

    return(
        <> 
            <div className="h-[7%] w-full border-solid border-black border ">
                <ul className="flex flex-wrap flex-row justify-center items-center gap-16">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/work">Works</Link></li>
                    <li><Link to="/contact">contact</Link></li>
                    
                </ul>
            </div>
        </>
    )}
        
export default Navbar;