import {Link} from 'react-router-dom'
import { motion } from "framer-motion"
const Navbar= ()=>{
    const label=[{path:"/",place:"HOME"},
    {path:"/about",place:"ABOUT"},{path:"/work",place:"WORK"},{path:"/contact",place:"CONTACT"}]
    return(
        <> 
            <div className="h-[7%] w-full ">
                    <motion.div initial={{ scale: 0 }}
                        animate={{ rotate: 0, scale: 1 }}
                        transition={{
                            type: "spring",
                            stiffness: 260,
                            damping: 20
                        }} >
                        <ul className="flex flex-wrap flex-row justify-center items-center gap-16">

                            {label.map((element,index)=>{
                                return(
                                    <li key={index}><Link to={element.path}>{element.place}</Link></li> 
                                    
                                )
                            })}

                         </ul>
                    </motion.div>
                    
                   
            </div>
        </>
    )}
        
export default Navbar;