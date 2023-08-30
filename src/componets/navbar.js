import {Link} from 'react-router-dom'
// import { motion } from "framer-motion"
// import { Bars3Icon,XMarkIcon} from '@heroicons/react/24/solid'
// import { useState } from 'react'
const Navbar= ()=>{
    // let [isopen,setopen]=useState(false)
    const label=[{path:"/",place:"HOME"},
    {path:"/about",place:"ABOUT"},{path:"/work",place:"WORK"},{path:"/contact",place:"CONTACT"}]
    return(
        <> 
            <div className="h-[7%] w-full max-[630px]:h-[7%] overflow-hidden">
                    <div className='h-full w-full  max-[640px]:hidden flex flex-wrap flex- items-center justify-center '>
                            <ul className='h-[80%]  w-[60%] flex flex-wrap flex-row justify-center items-center gap-24'>
                            {
                                label.map((element,index)=>{
                                    return (
                                        <li key={index} className='text-black '><Link to={element.path}>{element.place}</Link></li>
                                    )
                                })
                            }
                            </ul>       
                    </div>


                    
                    <div className="min-[640px]:hidden dropdown dropdown-right ml-2">
                        <label className="btn btn-circle swap swap-rotate bg-slate-100 opacity-100 border-hidden">
  
                            {/* this hidden checkbox controls the state */}
                            <input type="checkbox" />
                            
                            {/* hamburger icon */}
                            <svg className="swap-off fill-current " xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/></svg>
                            
                            {/* close icon */}
                            <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"/></svg>
                            
                            </label>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-slate-100 opacity-100 rounded-box w-80 flex flex-row flex-wrap justify-start
                         
                            ">
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