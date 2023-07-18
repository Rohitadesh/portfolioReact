import {web,tools,frame} from "./webtech"
const About =()=>{
    return(
        <main className=' h-[93%] w-full
            flex flex-wrap flex-col  justify-center items-center overflow-scroll'>            
            
            <div className="h-[100%] -mb-20 w-[70%] rounded-2xl shadow-2xl
                flex f">
                {/* <div className="border w-[40%] border-solid border-sky-900 h-[20%]"></div> */}
                <div className="h-full  w-[30%]  ">
                    <div className=" flex flex-row justify-center items-center h-[61%]  w-full ">
                        <h1>AboutMe</h1>
                    </div>
                    <div className="h-[39%]  w-full  flex flex-col gap-2 flex-wrap justify-center items-center">
                        <h1>MySkills</h1>
                       
                    </div>
                </div>
                <div className="h-full w-[80%] " >
                    
                    <div className="h-[65%] w-full  flex flex-col items-center justify-center">
                        <p>Hi iam Adesh S.N Welcome to my Website i am software Development who trivies on designing and creating exceptional web experiences for users.
                            With a strong foundation in HTML, CSS, and JavaScript. Additionaly i have done MYSQL, Firebox,firestore
                            With an insatiable hunger for learning, I continuously seek opportunities to expand my skill set and apply my knowledge to achieve personal growth and contribute to organizational goals. Let's collaborate and create remarkable web experiences together!"
                        </p>
                         
                    </div>

                    <div className="h-[40%] w-full  ">
                    
                        <div className="h-[30%] w-full  flex flex-wrap flex-row justify-start gap-6 items-center ">
                         <h1>WebTechnologies:</h1>
                         {web.map((elem,ind)=>{ 
                            return <h6 key={ind} className="">{elem}</h6>
                         })}
                        
                        </div>
                    
                        <div className="h-[35%] w-full -mt-0 flex flex-wrap flex-row justify-start gap-6 items-center">
                        <h1>FrameWorks/Libries:</h1>
                        {
                            frame.map((elem,id)=>{
                                return <h6 key={id}>{elem}</h6>
                            })
                        }
                        </div>
                        <div className="h-[20%] w-full  gap-2 flex flex-row justify-start  items-center ">
                            <h1>Tools:</h1>
                            {tools.map((elem,id)=>{
                                return <h6 key={id}>{elem}</h6>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}



export default About;