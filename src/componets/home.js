import { Link } from "react-router-dom";
// import {useEffect}from 'react';
import name from "../componets/name.png"
import {motion}  from "framer-motion"
import { useEffect } from "react";
import AOS from 'aos'
const Home=()=>{
  useEffect(()=>{

    console.log(AOS);
    AOS.init({
        duration:3000
    });
    AOS.refresh();
},[])
    return(
        <main data-aos="fade-down" className=' h-[93%] w-full max-[640px]:h-[93%]
        max-[640px]:flex max-[640px]:flex-col max-[640px]:flex-wrap max-[640px]:justify-center max-[640px]:items-center
      
      flex flex-col justify-center gap-10 items-center flex-wrap overflow-hidden'>
      
           
            <motion.div
      className="h-[50%] w-[40% max-[640px]:h-[30%]"
      animate={{
        scale: [1, 2, 2,1],
        rotate: [0, 0, 180, 180, 0],
        borderRadius: ["0%", "0%", "50%", "50%", "0%"]
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        times: [0,  0.2, 0.5, 0.8, 1],
        repeat: Infinity,
        repeatDelay: 1
      }}>
      
                <img src={name} alt="name" className="h-full opacity-200 bg-remove"  />
      
      </motion.div>
            
        
            <div className='  h-[70%] w-[40%] flex flex-col max-[640px]:h-[40%] max-[640px]:w-[80%]
            flex-wrap justify-end rounded-full'>
            <div className="bg-gray-200 h-[90%] w-full rounded-2xl shadow-xl flex flex-col justify-center align-cent">
                
                <h1 className="text-md text-gray-500 text-left p-14 font-medium text-2xl max-[640px]:text-sm"><strong >
                    I AM ADESHKUMAR S N 
                    <h1 ><strong>SOFTWARE DEVELOPER</strong></h1>
                    </strong> </h1>
            </div>
                
            <div className=' h-[10%] w-full flex 
            flex-col flex-wrap justify-center items-center '>
                <Link to="https://github.com/Rohitadesh">Github</Link>
                {/* <button className='bg-slate-300 rounded-xl w-[20%]' onClick={}>Github</button> */}
            </div>
            </div>
        </main>
    )
}
export default Home;