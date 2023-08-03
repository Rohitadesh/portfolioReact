import { Link } from "react-router-dom";
import name from "../componets/name.png"
const Home=()=>{
    return(
        <main className=' h-[93%] w-full 
      
      flex flex-col justify-center gap-10 items-center flex-wrap '>
      
            <div className=' h-[70%] w-[40%] shadow-xl rounded-2xl'>
                <img src={name} alt="name" className="h-full opacity-200 bg-remove"  />
            </div>
        
            <div className='border  h-[70%] w-[40%] flex flex-col
            flex-wrap justify-end rounded-xl'>
            <div className="h-[90%] w-full rounded-2xl shadow-xl flex flex-col justify-center align-center">
                
                <h1 className="text-md text-gray-500 text-left p-14 font-medium text-2xl"><strong >
                    I AM ADESHKUMAR S N 
                    <h1><strong>SOFTWARE DEVELOPER</strong></h1>
                    </strong> </h1>
            </div>
                
            <div className=' h-[10%] w-full flex 
            flex-col flex-wrap justify-center items-center   '>
                <button className=' w-[20%] rounded-xl '>CV</button>
                <Link to="https://github.com/Rohitadesh">Github</Link>
                {/* <button className='bg-slate-300 rounded-xl w-[20%]' onClick={}>Github</button> */}
            </div>
            </div>
        </main>
    )
}
export default Home;