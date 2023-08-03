import {web,tools,frame} from "./webtech"
const About =()=>{
    return(
        <main className=' h-[93%] w-full
            flex flex-wrap flex-col  justify-center items-center overflow-scroll'>            
            
            <div className="h-[140%] -mb-20 w-[90%]  
                flex f">
                {/* <div className="border w-[40%] border-solid border-sky-900 h-[20%]"></div> */}
                <div className="h-full  w-[20%] ">
                    <div className=" flex flex-row justify-center items-center h-[61%]  w-full ">
                        <h1>AboutMe</h1>
                    </div>
                    <div className="h-[38%]  w-full  flex flex-col gap-2 flex-wrap justify-center items-center">
                        <h1>MySkills</h1>
                       
                    </div>
                </div>
                <div className="h-full w-[80%]  " >
                    
                    <div className="h-[55%] w-full flex flex-col flex-wrap justify-center items-center ">
                        <p style={{fontSize:'0.7 rem'}} > 
                            "Hi i am Adesh S. N Welcome to My Website i am <strong> Software Development</strong> with foundation in HTML,CSS and JavaScript  .  Additionaly i  have learnt  MYSQL, Express JS .
                            I continuously seek opportunities to expand my skill set and apply my knowledge to achieve personal growth and contribute to organizational goals. 
                            Work experiences in Smart MedTech. Let's collaborate and create remarkable web experiences together !"
                        </p>
                         
                    </div>

                    <div className="h-[40%] w-full flex flex-col flex-wrap justify-end items-center 
                        ">
                    
                        <div className="h-[20%] w-full  flex flex-wrap flex-row justify-start gap-6 items-center  ">
                         <h1>WebTechnologies:</h1>
                         {web.map((elem,ind)=>{ 
                            return <h6 key={ind} className="w-[12%] rounded-xl 
                            flex flex-col flex-wrap justify-center items-center bg-gray-300">{elem}</h6>
                         })}
                        
                        </div>
                    
                        <div className="h-[25%] w-full  -mt-0 flex flex-wrap flex-row justify-start gap-6 items-center">
                        <h1>FrameWorks/Libries:</h1>
                        {
                            frame.map((elem,id)=>{
                                return <h6 key={id} className="w-[13%] flex flex-col flex-wrap justify-center items-center rounded-xl bg-gray-300">{elem}</h6>
                            })
                        }
                        </div>
                        <div className="h-[20%] w-full   gap-2 flex flex-row justify-start  items-center ">
                            <h1>Tools:</h1>
                            {
                                tools.map((elem,id)=>{
                                    return <h6 key={id} className="w-[12%] flex flex-col flex-wrap justify-center items-center rounded-xl bg-gray-300">{elem}</h6>
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}



export default About;