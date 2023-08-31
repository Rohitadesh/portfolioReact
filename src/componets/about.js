
import Skills from "./skill";
import { useEffect } from "react";
import AOS from "aos";
const About =()=>{
    useEffect(()=>{

        console.log(AOS);
        AOS.init({
            duration:3000
        });
        AOS.refresh();
    },[])
    return(
        <div data-aos="fade-down"  className="h-[93%] w-full  overflow-y-auto  max-[640px]:w-[100%]  overflow-hidden
        grid boxes " >
        
           <div className="h-full w-full flex flex-wrap flex-row items-center justify-center gap-20 boxes 
                flex flex-col flex-wrap justify-center items-center 
                pr-18">
                <div  className=" h-32 w-32 rounded-full shadow-2xl shadow-gray-500 
                         flex flex-col items-center justify-center  max-[640px]:h-[90px] max-[640px]:w-[90px] ">
                        <h1 className="text-sm italic text-black">AboutMe</h1>
                </div>

                <div className=" h-[70%] w-[42%]  flex flex-wrap shadow-gray-500 flex-col justify-center items-center shadow-2xl rounded-3xl  
                 max-[640px]:w-[250px]  max-[640px]:h-[50%] max-[640px]:pl-2 ">
                        <p  className="p-6 text-base italic  max-[630px]:text-xs text-black"> 
                            "Hi i am Adesh S. N Welcome to My Website i am a <strong> Software Developer</strong> with foundation in HTML, CSS and JavaScript. Additionaly i  have learnt  MYSQL, Express JS .
                            I continuously seek opportunities to expand my skill set and apply my knowledge to achieve personal growth and contribute to organizational goals. Work experiences in Smart MedTech. 
                            Let's collaborate and create remarkable web experiences together !"
                        </p>
            
                </div>

           </div>
           
            <Skills />


           <div className="h-[120%] w-full  grid skills 
       
           max-[640px]:flex max-[640px]:flex-wrap ">
                
            <div className="h-full w-full  border-solid flex flex-wrap flex-col justify-center items-center gap-8 
                 max-[640px]:h-[25%] 
               ">
                    <div className="h-28 w-28  rounded-full flex flex-wrap flex-col justify-center items-center shadow-gray-500 shadow-2xl 
                    max-[640px]:w-[90px] max-[640px]:h-[90px]">
                        <h1 className="text-sm italic text-black ">EXPERIENCE</h1>
                    </div>

                    <div className="h-28 w-28  rounded-full flex flex-wrap flex-col justify-center items-center shadow-gray-500 shadow-2xl mt-12 
                    max-[640px]:mb-9  max-[640px]:w-[90px]">

                        <h1 className="text-sm italic text-black">EDUCATION</h1>
                    </div>
            </div>
            <div className="h-full w-full  border-solid flex flex-wrap flex-col justify-center items-center gap-8 
             max-[640px]:h-[25%]">
                    <div className="h-28 w-28 b rounded-full flex flex-wrap flex-col justify-center items-center shadow-gray-500 shadow-2xl">
                        <h1 className="text-sm italic text-black">2022-present</h1>
                    </div>

                    <div className="h-28 w-28  rounded-full flex flex-wrap flex-col justify-center items-center shadow-gray-500 shadow-2xl">
                        <h1 className="text-sm italic text-black">COLLEGE</h1>
                    </div>
            </div>
            <div className="h-full w-full  border-solid flex flex-wrap flex-col justify-center items-center gap-10
            max-[640px]:h-[25%] ">

                    <div className="h-24 w-36 rounded-2xl shadow-2xl flex flex-wrap flex-col justify-center items-center shadow-gray-500 "  >
                        <h1 className="text-sm italic p-1 text-black">Front-End Developer at SamarthMeditech Pvt Ltd</h1>
                    </div>

                    <div className="h-24 w-36 rounded-2xl shadow-2xl  flex flex-wrap flex-col justify-center items-center shadow-gray-500">
                        <h1 className="text-sm italic p-4 text-black">KLE INSTITUE OF TECHNOLOGY Hubli</h1>
                    </div>





            </div>
            


           </div>
        

        </div>
    )
}



export default About;