import React from 'react';
import { FaArrowUpLong } from "react-icons/fa6";

function Landingpage() {
  return (
    <div className='w-full h-screen bg-zinc-900 pt-1'>
        <div className='textstructure mt-40 px-20'>
            {["We Create", "Eye Opening", "Presentations"].map((item, index)=>{
                return (
                     <div className='masker '> 
                     <div className='w-fit flex items-end overflow-hidden'>
                        {index === 1 &&(<div className='mr-[1vw] w-[9vw]  h-[6.5vw]  -bottom-[1vw] relative bg-red-500'></div>)}
                        <h1 className='flex item-center uppercase text-[7.5vw] h-full leading-[6.5vw] tracking-tighter font-["Test_Founders_Grotesk "] font-medium'>{item}

                        </h1>
                    </div>
            </div>
            );
            })}  
        </div>
        <div className='border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center py-5 px-20'>
            {["For public and private companies", "From the first pitch to IPO"].map((item,index) => (<p className='text=md font-light tracking-tight leading-none'>{item}</p>
        ))}

        <div className='start flex items-center gap-2'>
            <div className='px-5 py-2 border-[2px] border-zinc-500 font-light text-md uppercase rounded-full'>Start The Project
               
                </div>
                <div className='w-10 h-10 flex items-center justify-center border-[2px] border-zinc-500 rounded-full'>
                    <span className='rotate-[45deg]'> 
                    <FaArrowUpLong /> 
                        </span>           
              
                </div>
            </div>
        </div>

    </div>
  );
}

export default Landingpage  