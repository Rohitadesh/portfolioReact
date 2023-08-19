import { FaRegEnvelope } from "@react-icons/all-files/fa/FaRegEnvelope";
import{FaMapMarkerAlt} from "@react-icons/all-files/fa/FaMapMarkerAlt";
import {FaMobileAlt} from "@react-icons/all-files/fa/FaMobileAlt";
// import '@/images/contact.jpg'

const Contact= () =>{
    
    return(
       <div className=" h-[92.8%] flex flex-col gap-2 flex-wrap justify-center items-center  ">
            {/* <div className="border border-solid border-black  h-[5%]"></div> */}
            <div className="shadow-xl    rounded-xl shadow-gray-500 border-pink-500 h-[75%] w-[40%] flex flex-wrap flex-col justify-center gap-12 items-center ">
               
                <div className="h-[10%] w-[63%] gap-1 flex flex-col flex-wrap justify-center items-center content-start -mt-6 rounded-md border border-solid border-black  ">
                    <span > <FaMobileAlt className="ml-1" /></span>+91-7259926393
                </div>
               
                <div className="h-[10%] w-[66%] gap-1  rounded-md  border border-solid border-black flex flex-col content-start flex-wrap justify-center items-center ">
                    <span > <FaRegEnvelope className="ml-1" /></span>adeshnagalikar2000@gmail.com
                </div>
               
                <div className="h-[10%] w-[63%] gap-1 rounded-md border border-solid border-black flex flex-col flex-wrap justify-center content-start items-center ">
                    <span>
                        <FaMapMarkerAlt  className="ml-1" />
                    </span>Hubbali, Karnataka
                </div>
            
            </div>
            
            <div className=" shadow-xl shadow-gray-500 border border-black opacity-50 flex flex-col flex-wrap justify-center items-center rounded-xl w-[12%] h-[10%]">
            
                <h1>Contact</h1>
            
            </div>
            
           
       
       </div>
    )
}
export default Contact;