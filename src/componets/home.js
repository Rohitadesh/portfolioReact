const Home=()=>{
    return(
        <main className='border border-solid border-blue-500 h-[93%] w-full 
      
      flex flex-col justify-center gap-10 items-center flex-wrap '>
      
            <div className='border border-solid border-sky-500 h-[70%] w-[40%]'>

            </div>
        
            <div className='border border-solid border-rose-500 h-[70%] w-[40%] flex flex-col
            flex-wrap justify-end rounded-xl'>

            <div className='border border-solid border-black h-[10%] w-full flex 
            flex-col flex-wrap justify-center items-center   '>
                <button className=' w-[20%] bg-slate-300 rounded-xl '>CV</button>
                <button className='bg-slate-300 rounded-xl w-[20%]'>Github</button>
            </div>
            </div>
        </main>
    )
}
export default Home;