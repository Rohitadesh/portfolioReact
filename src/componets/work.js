import game from "../componets/game.png"
import joke from "../componets/joke.png"
import client from "../componets/bio.png"
import weather from "../componets/weather.png"
import {motion} from "framer-motion"
import AOS from 'aos'
import { useEffect } from "react"
const Work =() =>{
    useEffect(()=>{

        console.log(AOS);
        AOS.init({
            duration:3000
        });
        AOS.refresh();
    },[])
    return (
        <main data-aos="fade-down" className=' h-[93%] w-full overflow-y-auto grid grid-cols-2 row_grid  
        max-[640px]:flex max-[640px]:flex-wrap flex-row '>
            <div className='h-full w-full  flex flex-wrap flex-col justify-center items-center 
            max-[640px]:flex max-[640px]:flex-col max-[640px]:flex-wrap max-[640px]:h-[60%] '>
                <h1 className="md:hidden max-[640px]:text-3xl max-[640px]:text-black max-[640px]:mb-8 max-[640px]:font-semibold">WORK</h1>
                <motion.div className="h-[90%] w-[80%]  rounded-xl shadow-2xl max-[640px]:h-[80%] max-[640px]:w-[80%]"
                whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>

                    <img src={game} width={600}  alt="game"  className="h-full w-full rounded-xl object-fit max-[640px]:object-fit" loading="lazy" />
                </motion.div>
            </div>
            <div className='h-full w-full  flex flex-wrap flex-col justify-center items-center max-[640px]:h-[50%] max-[640px]:w-[90%] max-[640px]:ml-4
                '>
                <motion.div className="h-[90%] w-[80%] max-[620px]:h-[90%] max-[620px]:w-[90%] rounded-xl shadow-2xl "
                    whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 300, damping: 10 }}>
                        <p className="text-2xl text-center  max-[640px]:mt-8 font-semibold ">Game</p>
                    <p className="text-md text-gray-500 text-left p-10 font-medium max-[640px]:text-sm ">
                        This Is Rockpapercutter website used to obtain large amounts of 
                        data from websites.the game is between user and computer.     
                        This Project is Done By using HTML, css and JavaScript</p>

                    </motion.div>
            </div>
            <div className='h-full w-full  flex flex-wrap flex-col justify-center items-center max-[640px]:h-[55%] max-[640px]:w-[100%]'>
                <motion.div className="h-[90%] w-[80%]  rounded-xl shadow-2xl  "
                        whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 300, damping: 10 }}>
                        <img src={joke} width={600} height={110} alt="game" className="h-full w-full rounded-xl" loading="lazy" />
                </motion.div>
            </div>
            <div className='h-full w-full  flex flex-wrap flex-col justify-center items-center max-[640px]:h-[50%] max-[640px]:w-[100%]'>
                <motion.div className="h-[90%] w-[80%]  rounded-xl shadow-2xl  "
                    whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                            <p className="text-2xl text-center  max-[640px]:text-md max-[640px]:mt-8 font-semibold">JokeAPI</p>
                        <p className="text-md text-gray-500 text-left  max-[640px]:text-md  max-[640px]:pr-4 p-10 font-medium">
                            This Is Joke website generating random joke    
                            This Project is Done By using HTML, css and JavaScript
                        </p>
                    </motion.div>
            </div>
            <div className='h-full w-full  flex flex-wrap flex-col justify-center items-center max-[640px]:h-[50%] max-[640px]:w-[100%]'>
                <motion.div className="h-[90%] w-[80%]  rounded-xl shadow-2xl "
                    whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                    <img src={weather} width={600} height={110} alt="game" className="h-full w-full rounded-xl" loading="lazy" />
                </motion.div>
            </div>
            <div className='h-full w-full  flex flex-wrap flex-col justify-center items-center max-[640px]:h-[50%] max-[640px]:w-[100%]'>
                <motion.div className="h-[90%] w-[80%] rounded-xl shadow-2xl "
                    whileHover={{ scale: 1.1}} transition={{ type: "spring", stiffness: 300, damping: 10 }}>
                        <p className="text-2xl text-center max-[640px]:text-md max-[640px]:mt-4 font-semibold">ReactWeather</p>
                    <p className="text-md text-gray-500 text-left max-[640px]:text-md max-[640px]:pr-2 p-10  font-medium">
                        This Is ReactWeather website generating weather infromation currentcity and temperature    
                            This Project is Done By using React and OpenweatherApi
                        </p>

                </motion.div>  
            </div>
            <div className='h-full w-full  flex flex-wrap flex-col justify-center items-center max-[640px]:h-[50%] max-[640px]:w-[100%]'>
                <motion.div className="h-[90%] w-[80%]  rounded-xl shadow-2xl "
                    whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                    <img src={client} width={600} height={110} alt="game" className="h-full w-full rounded-xl" loading="lazy" />
                </motion.div>

            </div>
            <div className='h-full w-full border  flex flex-wrap flex-col justify-center items-center max-[640px]:h-[50%] max-[640px]:w-[100%]'>
                <motion.div className="h-[90%] w-[80%] rounded-xl overflow-y-auto shadow-2xl "
                    whileHover={{ scale: 1.1}} transition={{ type: "spring", stiffness: 300, damping: 10 }}>
                        <p className="text-2xl text-center  max-[640px]:text-md font-semibold">My Bio Backup</p>
                    <p className="text-md text-gray-500 text-left p-10 font-medium max-[620px]:text-md">
                        This is our client product .This is Application Available in Play Store Also.
                        This Product Provides A Secured Account In Cloud To Everyone To Access Medical 
                        Documents Such As MRI ReportCT Scan, X Ray, Lab Reports, Other Medical Tests, 
                        3D Imaging, Medical Prescriptions In Digital Format From The Original Issuers 
                        Of These Certificates The Project Will Be Hosted On Aws 
                        I Have Also Little Bit Knowledge About This In This Project I Have Been Be Worked On Backend Using Node Js And
                        Express Js And Mysql The Admin Side Of This Product Has Been Done By Be ..This Project Using Nunjucks Template, Tailwind Css , Html Javascript
                        </p>

                </motion.div>  
            </div>
        </main>)
}
export default Work;