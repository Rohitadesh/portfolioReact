import {web,tools,frame,skill_set} from "./webtech"
const Skills =() =>{

    return(
        <div  className="h-full  w-full grid skills flex flex-wrap flex-row  
         max-[640px]:flex max-[640px]:flex-wrap max-[640px]: flex-row " >

            <div  className="h-full w-full  flex flex-wrap flex-col items-center justify-center
             
            max-[640px]:h-[22%]  max-[640px]:static  max-[640px]:flex max-[640px]:flex-wrap max-[640px]:flex-row
            max-[640px]:justify-center max-[640px]: items-center">

                    <div className="bg-gray-200 h-36 w-36  rounded-full shadow-lg hover:shadow-2xl
                    flex flex-wrap flex-col justify-center items-center hover:-translate-y-[10px] duration-300
                    max-[640px]:h-[100px]  max-[640px]:w-[100px] max-[640px]: ">
                        <h1 className="text-sm italic text-black">MySkills</h1>
                    </div>

            </div>


            <div className=" flex flex-wrap flex-col justify-center items-center gap-24  h-full w-full 
            border-solid max-[640px]:h-[24%]  
            max-[640px]:flex max-[640px]:flex-row max-[640px]:flex-wrap max-[640px]:gap-10">
                {
                    skill_set.map((element,index)=>{

                        return(
                            <div key={index} className="bg-gray-200 h-28 w-28  rounded-full shadow-xl hover:shadow-2xl 
                        flex flex-wrap flex-col  justify-center items-center hover:-translate-y-[10px] duration-300
                        max-[640px]:h-[90px]  max-[640px]:w-[90px]
                         ">
                            <h3 className="p-4 text-sm italic text-black
                            max-[640px]:text-xs">{element}</h3>
                        </div> ) 
                    })
                }

            </div>


            <div className="h-full w-full  flex flex-wrap flex-col justify-center items-center  
            max-[640px]:flex max-[640px]:flex-row max-[640px]:flex-wrap max-[640px]:justify-start 
             max-[640px]:h-[54%]  max-[640px]:w-[100%] ">

                <div className="h-[33%]  w-full flex flex-wrap flex-row gap-4 justify-center items-center
                 max-[640px]:w-[32%] max-[640px]:h-[100%]
                 ">
                {
                        web.map((web_element,web_index)=>{

                            return(
                                <div key={web_index} className="bg-gray-200 h-20 w-20 rounded-full  shadow-xl hover:shadow-2xl
                                    flex flex-wrap flex-col justify-center items-center hover:-translate-y-[10px] duration-300">
                                    <h2 className="text-sm italic text-black">{web_element}</h2>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="h-[34%] w-full    flex flex-wrap flex-col justify-center items-center gap-10 
                  max-[640px]:w-[34%]  max-[640px]:h-[100%] ">
                    {
                        frame.map((element_lib,lib_index)=>{
                            return(
                                <div  key={lib_index} className="bg-gray-200 h-20 w-20  rounded-full shadow-xl hover:shadow-2xl
                                    flex flex-wrap flex-row justify-center items-center hover:-translate-y-[10px] duration-300">
                                    <h2 className="text-sm italic text-black">{element_lib}</h2>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="h-[33%] w-full   flex flex-wrap flex-row gap-4 max-[640px]:flex max-[640px]:flex-row max-[640px]:gap-8 justify-center items-center
                 max-[640px]:w-[34%] max-[640px]:h-[100%] max-[640px]:gap-0 ">

                    {
                        tools.map((element_tools,index1)=>{
                            return(
                                <div key={index1} className="bg-gray-200 h-20 w-20  rounded-full  shadow-lg hover:shadow-2xl max-[640px]:mb-
                                shadow-2xl flex flex-wrap flex-row justify-center items-center hover:-translate-y-[10px] duration-300">
                                    <h2 className="text-sm italic text-black">{element_tools}</h2>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </div>

  
    )
}
export default Skills;