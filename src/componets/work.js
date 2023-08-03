import game from "../componets/game.png"
import joke from "../componets/joke.png"
import client from "../componets/bio.png"
const Work =() =>{
    return (
        <main className=' h-[93%] w-full overflow-auto '>
            <div className="h-[60%] w-full  flex flex-row  gap-2 mb-2">
                <div className="h-full w-[50%] border border-solid border-black rounded-xl shadow-xl">

                    <img src={game} width={600}  alt="game"  className="h-full rounded-xl object-fit" />
                </div>
                <div className="h-full w-[50%] border border-solid border-black rounded-xl shadow-xl">
                <p className="text-md text-gray-500 text-left p-10 font-medium">
                    <p className="text-2xl text-center   font-semibold">Game</p>
                    This Is Rockpapercutter website used to obtain large amounts of 
                    data from websites.the game is between user and computer.     
                    This Project is Done By using HTML, css and JavaScript</p>

                </div>
            </div>
            <div className="h-[60%] w-full flex flex-row gap-2 mb-2">
                <div className="h-full w-[50%] border border-solid border-black rounded-xl shadow-xl">
                    <img src={joke} width={600} height={110} alt="game" className="h-full rounded-xl"  />
                </div>
                <div className="h-full w-[50%] border border-solid border-black rounded-xl">
                <p className="text-md text-gray-500 text-left p-10 font-medium">
                    <p className="text-2xl text-center   font-semibold">JokeAPI</p>
                    This Is Joke website generating random joke    
                    This Project is Done By using HTML, css and JavaScript</p>
                </div>  
            </div>
            <div className="h-[60%] w-full flex flex-row gap-2 mb-2">
                <div className="h-full w-[50%] border border-solid border-black rounded-xl shadow-xl">
                    <img src={client} width={600} height={110} alt="game" className="h-full rounded-xl" />
                </div>
                <div className="h-full w-[50%] border border-solid border-black rounded-xl overflow-hidden">
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

                </div>  
            </div>

            


            {/* <div className="h-[50vh] sticky top-[15vw]  text-center w-[40vw] border-solid border-black border">
                <p className="text-2xl text-center p-10 font-semibold">Web Scraping</p>
                <p className="text-xl text-gray-500 text-left p-10 font-medium">
                    This Is Web scraping website used to obtain large amounts of 
                    data from websites. Most of this data is unstructured data in an HTML 
                    format. Web Scrapers can extract all the data on particular sites or the
                    specific data that a user wants. Ideally, it’s best if you specify the
                    data you want so that the web scraper only extracts that data quickly.     
                    This Project is Done By using Python, Jinja template , Beautiful Soup , and Jquery</p>
            </div>
            <div className="h-[50vh] ">

                {/* <Image src={scraping2} width={600} height={100} alt="game"/> */}
            {/* </div> */}
        </main>)
}
export default Work;