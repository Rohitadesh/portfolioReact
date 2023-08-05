import game from "../componets/game.png"
import joke from "../componets/joke.png"
import client from "../componets/bio.png"
import {motion} from "framer-motion"
const Work =() =>{
    // const scroll=useScroll()
    return (
        <main className=' h-[93%] w-full overflow-scroll'>
            <div className="h-[60%] w-full  flex flex-row  gap-8 mb-2">
                <motion.div className="h-full w-[48%] border border-solid border-black rounded-xl shadow-xl ml-2"
                whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>

                    <img src={game} width={600}  alt="game"  className="h-full w-full rounded-xl object-fit" />
                </motion.div>
                
                <motion.div className="h-full w-[46%] border border-solid border-black rounded-xl shadow-xl"
                whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 300, damping: 10 }}>
                <p className="text-md text-gray-500 text-left p-10 font-medium">
                    <p className="text-2xl text-center   font-semibold">Game</p>
                    This Is Rockpapercutter website used to obtain large amounts of 
                    data from websites.the game is between user and computer.     
                    This Project is Done By using HTML, css and JavaScript</p>

                </motion.div>
            </div>
            <div className="h-[60%] w-full flex flex-row gap-8 mb-2">
                <motion.div className="h-full w-[48%] border border-solid border-black rounded-xl shadow-xl ml-2"
                whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 300, damping: 10 }}>
                    <img src={joke} width={600} height={110} alt="game" className="h-full w-full rounded-xl"  />
                </motion.div>
                
                <motion.div className="h-full w-[46%] border border-solid border-black rounded-xl"
                whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                    <p className="text-md text-gray-500 text-left p-10 font-medium">
                        <p className="text-2xl text-center   font-semibold">JokeAPI</p>
                        This Is Joke website generating random joke    
                        This Project is Done By using HTML, css and JavaScript
                    </p>
                </motion.div>  
            </div>
            <div className="h-[60%] w-full flex flex-row gap-8 mb-2">
                <motion.div className="h-full w-[48%] border border-solid border-black rounded-xl shadow-xl ml-2"
                whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                    <img src={client} width={600} height={110} alt="game" className="h-full w-full rounded-xl" />
                </motion.div>
                
                <motion.div className="h-full w-[46%] border border-solid border-black rounded-xl overflow-scroll"
                whileHover={{ scale: 1.1}} transition={{ type: "spring", stiffness: 300, damping: 10 }}>
                <p className="text-md text-gray-500 text-left p-10 font-medium">
                    <p className="text-2xl text-center   font-semibold">My Bio Backup</p>
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