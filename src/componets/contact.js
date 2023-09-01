import { FaRegEnvelope } from "@react-icons/all-files/fa/FaRegEnvelope";
import{FaMapMarkerAlt} from "@react-icons/all-files/fa/FaMapMarkerAlt";
import {FaMobileAlt} from "@react-icons/all-files/fa/FaMobileAlt";
// import '@/images/contact.jpg'
import { useEffect } from "react";
import AOS from "aos";
const Contact= () =>{
    useEffect(()=>{

        console.log(AOS);
        AOS.init({
            duration:3000
        });
        AOS.refresh();
    },[])
    return(
       <div data-aos="fade-down"  className=" h-[92.8%] max-[600px]:h-[85%]  flex flex-col gap-2 flex-wrap justify-center items-center  ">
            {/* <div className="border border-solid bo0rder-black  h-[5%]"></div> */}
            <div className="bg-gray-200 shadow-xl max-[640px]:w-[78%]  max-[640px]:h-[50%] rounded-xl shadow-gray-500 border-pink-500 h-[75%] w-[35%] flex flex-wrap flex-col justify-center gap-12 items-center ">

                <div className="h-[10%] w-[70%] max-[430px]:h-[8%] max-[630px]:gap-2 max-[600px]:w-[78%] max-[630px]:flex max-[600px]:flex-row gap-1 flex flex-col flex-wrap justify-center items-center content-start -mt-6 rounded-md border border-solid border-black  ">
                    <span > <FaMobileAlt className="ml-1 max-[640px]:text-sm text-black" /></span><p className=" max-[630px]:mr-3  text-sm text-black ">+91-7259926393</p>
                </div>
               
                <div className="h-[10%] w-[70%]  gap-1  rounded-md max-[640px]:h-[8%] max-[640px]:w-[78%] 
                max-[600px]:flex-col    max-[640px]:items-center
                  border border-solid border-black flex flex-row  flex-wrap justify-center items-center ">
                    <span > <FaRegEnvelope className=" mt-0.5 max-[640px]:text-md max-[640px]:ml-2  text-black" /></span><p className=" text-black text-xs  max-[630px]:text-xs max-[630px]:mr-6 text-black ">adeshnagalikar2000@gmail.com</p>
                </div>
               
                <div className="h-[10%] w-[63%] max-[640px]:h-[7%] max-[640px]:w-[78%] gap-1 rounded-md border border-solid border-black flex flex-col gap-2 flex-wrap justify-center content-start items-center4
                max-[640px]:">
                    <span>
                        <FaMapMarkerAlt  className="ml-1 text-sm text-black max-[640px]:ml-8" />
                    </span><p className="text-sm  text-black">Hubbali, Karnataka</p>
                </div>
            
            </div>
            
            <div className=" shadow-xl max-[620px]:w-[30%] max-[620px]:  shadow-gray-500 border border-black opacity-50 flex flex-col flex-wrap justify-center items-center rounded-xl w-[12%] h-[10%]">
            
                <h1 className='text-black opacity-100 max-[640px]:text-black  opacity-100'>Contact</h1>
            
            </div>
            
           
       
       </div>
    )
}
export default Contact;