import { FaRegEnvelope } from "@react-icons/all-files/fa/FaRegEnvelope";
import{FaMapMarkerAlt} from "@react-icons/all-files/fa/FaMapMarkerAlt";
import {FaMobileAlt} from "@react-icons/all-files/fa/FaMobileAlt";
// import '@/images/contact.jpg'

const Contact= () =>{
    
    return(
       <div className="h-[92.8%] max-[600px]:h-[85%]  flex flex-col gap-2 flex-wrap justify-center items-center  ">
            {/* <div className="border border-solid bo0rder-black  h-[5%]"></div> */}
            <div className="shadow-xl max-[600px]:w-[70%] max-[600px]:h-[47%] max-[600px]:h-[75%] rounded-xl shadow-gray-500 border-pink-500 h-[75%] w-[35%] flex flex-wrap flex-col justify-center gap-12 items-center ">

                <div className="h-[10%] w-[63%] max-[600px]:w-[60%] max-[600px]:flex max-[600px]:flex-row gap-1 flex flex-col flex-wrap justify-center items-center content-start -mt-6 rounded-md border border-solid border-black  ">
                    <span > <FaMobileAlt className="ml-1 min-[320px]:text-xs" /></span><p className="   text-sm ">+91-7259926393</p>
                </div>
               
                <div className="h-[10%] w-[64%]  gap-1  rounded-md max-[600px]:h-[18%] max-[600px]:w-[60%] 
                max-[600px]:flex-col max-[600px]:justify-center   max-[600px]:items-center
                  border border-solid border-black flex flex-col content-start flex-wrap justify-center items-center ">
                    <span > <FaRegEnvelope className="ml-1 sm:text-xs" /></span><p className="text-sm max-[600px]:text-xs">adeshnagalikar2000@gmail.com</p>
                </div>
               
                <div className="h-[10%] w-[63%] max-[620px]:h-[7%]gap-1 rounded-md border border-solid border-black flex flex-col flex-wrap justify-center content-start items-center ">
                    <span>
                        <FaMapMarkerAlt  className="ml-1 text-sm" />
                    </span><p className="text-sm p-2 ">Hubbali, Karnataka</p>
                </div>
            
            </div>
            
            <div className=" shadow-xl max-[620px]:w-[20%] max-[620px]:  shadow-gray-500 border border-black opacity-50 flex flex-col flex-wrap justify-center items-center rounded-xl w-[12%] h-[10%]">
            
                <h1>Contact</h1>
            
            </div>
            
           
       
       </div>
    )
}
export default Contact;