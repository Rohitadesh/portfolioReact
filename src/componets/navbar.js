import {Link} from 'react-router-dom'
// import { motion } from "framer-motion"
// import { Bars3Icon,XMarkIcon} from '@heroicons/react/24/solid'
// import { useState } from 'react'
const Navbar= ()=>{
    // let [isopen,setopen]=useState('')
    const label=[{path:"/",place:"HOME"},
    {path:"/about",place:"ABOUT"},{path:"/work",place:"WORK"},{path:"/contact",place:"CONTACT"}]
    return(
        <> 
            <div className="h-[7%] w-full max-[630px]:h-[7%] overflow-hidden">
                    <div className='h-full w-full  max-[640px]:hidden flex flex-wrap flex- items-center justify-center '>
                            <ul className='h-[80%]  w-[60%] flex flex-wrap flex-row justify-center items-center gap-24 '>
                            {
                                label.map((element,index)=>{
                                    return (
                                        <li key={index} className='text-black text-sm'><Link to={element.path}>{element.place}</Link></li>
                                    )
                                })
                            }
                            </ul>       
                    </div>


                    
                    <div className="min-[640px]:hidden dropdown dropdown-right ml-2">
                       
  
                         
                        <ul tabIndex={0} className=" menu p-2 shadow  opacity-100 rounded-box w-80 flex flex-row flex-wrap justify-start
                            ml-3 border border-solid opacity-50">
                            {/* <l1><a>home</a></l1> */}
                            {
                                label.map((element,index)=>{
                                    return (
                                        <li key={index} ><Link to={element.path} className='text-xs text-black'>{element.place}</Link></li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                
                    
                   
            </div>
        </>
    )}
        
export default Navbar;