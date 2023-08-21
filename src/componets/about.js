import {web,tools,frame} from "./webtech"
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
        <div className="h-[93%] w-full  overflow-y-auto flex flex-row flex-wrap 
            justify-center items-center gap-4 ">
            
            <div className="mt-8 h-[70%] w-[90%] border-solid
                flex flex-wrap">


                {/* about rounded */}
                <div className=" h-full w-[30%] flex flex-wrap flex-col justify-center items-center ">

                    <div className=" h-36 w-36 rounded-full shadow-2xl shadow-gray-500 
                         flex flex-col items-center justify-center">
                        <h1 className="text-sm italic">AboutMe</h1>
                    </div>
                </div>

                {/* arrow */}
     

                {/* content */}
                <div className=" ml-12 h-full w-[43%] flex flex-wrap shadow-gray-500 flex-col justify-center items-center shadow-2xl rounded-3xl">

                        <p  className="p-6 text-base italic"> 
                            "Hi i am Adesh S. N Welcome to My Website i am <strong> Software Development</strong> with foundation in HTML,CSS and JavaScript. Additionaly i  have learnt  MYSQL, Express JS .
                            I continuously seek opportunities to expand my skill set and apply my knowledge to achieve personal growth and contribute to organizational goals. Work experiences in Smart MedTech. 
                            Let's collaborate and create remarkable web experiences together !"
                        </p>
            
                </div>

                </div>

            {/* technology */}

            <div className="h-[90%] w-[90%] flex flex-wrap mt-6">
               
               
                <div className="h-full w-[28%]  flex flex-wrap flex-col justify-center items-center">

                    <div className="h-36 w-36  rounded-full shadow-gray-500
                    flex flex-wrap flex-col justify-center items-center shadow-2xl">
                        <h1 className="text-sm italic">MySkills</h1>
                    </div>

                </div>
                <div className="h-full w-[28%]  flex flex-wrap flex-row justify-center gap-8 items-center">

                    <div className="h-28 w-28  rounded-full shadow-gray-500
                        flex flex-wrap flex-col  justify-center items-center shadow-2xl">
                            <h3 className="p-4 text-sm italic">Web Technology</h3>
                    </div>

                    <div className="h-28 w-28  rounded-full shadow-gray-500
                        flex flex-wrap flex-col justify-center items-center shadow-2xl">
                            <h1 className="p-2 text-sm italic">FrameWorks</h1>
                            {/* <h1>/]</h1> */}
                            <h1>Libries</h1>
                    </div>

                    <div className="h-28 w-28  rounded-full 
                        flex flex-wrap flex-col justify-center items-center shadow-gray-500 shadow-2xl">
                            <h1>Tools</h1>
                    </div>
                </div>
                <div className="h-full w-[44%]  flex flex-wrap flex-row justify-center gap-8 items-center">

                    <div className="h-[30%] w-full  flex flex-wrap flex-row justify-center gap-6 items-center ">
                        {
                            web.map((web_element)=>{

                                return(
                                    <div className="h-20 w-20 rounded-full shadow-gray-500
                                         shadow-2xl flex flex-wrap flex-col justify-center items-center ">
                                        <h2 className="text-sm italic">{web_element}</h2>
                                    </div>
                                )
                            })
                        }
                    </div>

                    <div className="h-[30%] w-full  flex flex-wrap flex-row justify-center gap-6 items-center ">
                        {
                            frame.map((element_lib)=>{
                                return(
                                    <div className="h-20 w-20  rounded-full shadow-gray-500
                                        shadow-2xl flex flex-wrap flex-row justify-center items-center">
                                        <h2 className="text-sm italic">{element_lib}</h2>
                                    </div>
                                )
                            })
                        }
                    </div>

                    <div className="h-[24%] w-full  flex flex-wrap flex-col justify-center items-center">
                        {
                            tools.map((element_tools)=>{
                                return(
                                    <div className="h-20 w-20  rounded-full  shadow-xl shadow-gray-500
                                       shadow-2xl flex flex-wrap flex-row justify-center items-center">
                                        <h2 className="text-sm italic">{element_tools}</h2>
                                    </div>
                                )
                            })
                        }
                    </div>

                </div>
            </div>
            <div className="h-[75%] w-[90%]  flex flex-wrap">

                <div className="h-full w-[25%]  flex flex-wrap flex-col justify-center items-center gap-12">

                    <div className="h-28 w-28  rounded-full flex flex-wrap flex-col justify-center items-center shadow-gray-500 shadow-2xl">
                        <h1 className="text-sm italic">EXPERIENCES</h1>
                    </div>

                    <div className="h-28 w-28  rounded-full flex flex-wrap flex-col justify-center items-center shadow-gray-500 shadow-2xl">

                        <h1 className="text-sm italic">EDUCATION</h1>
                    </div>


                </div>

                <div className="h-full w-[27%]  flex flex-wrap flex-col justify-center items-center gap-12">

                    <div className="h-28 w-28 b rounded-full flex flex-wrap flex-col justify-center items-center shadow-gray-500 shadow-2xl">
                        <h1 className="text-sm italic">2022-present</h1>
                    </div>

                    <div className="h-28 w-28  rounded-full flex flex-wrap flex-col justify-center items-center shadow-gray-500 shadow-2xl">
                        <h1 className="text-sm italic">COLLEGE</h1>
                    </div>
                </div>
                
                <div className="h-full gap-12 w-[48%]  flex flex-wrap flex-col justify-center items-center">

                        <div className="h-[30%] w-full flex flex-wrap flex-row justify-center items-center">

                            <div className="h-24 w-36 rounded-2xl shadow-2xl flex flex-wrap flex-col justify-center items-center shadow-gray-500 "  >
                                <h1 className="text-sm italic p-1">Front-End Developer at SamarthMeditech Pvt Ltd</h1>
                            </div>

                        </div>

                        <div className="h-[30%] w-full  flex flex-wrap flex-col justify-center items-center">
                            <div className="h-24 w-36 rounded-2xl shadow-2xl  flex flex-wrap flex-col justify-center items-center shadow-gray-500">
                                <h1 className="text-sm italic p-4">KLE INSTITUE OF TECHNOLOGY</h1>
                            </div>

                        </div>

                </div>

            </div>


        </div>
    )
}



export default About;