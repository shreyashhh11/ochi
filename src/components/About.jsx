import React from 'react'

function About() {
  return (
    <div className='w-full p-20 bg-[#CDEA68] text-black' >
        <h1 className='font-["Neue_Montreal"] text-[4vw] leading-[4.5vw] tracking-tight'>Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell products, explain complex ideas, and hire great people.

        </h1>
        <div className='w-full flex gap-5 border-t-[1px] pt-10 mt-20 border-[#a1b562]'>
            <div className='w-1/2 '> 
                <h1 className='text-7xl'>Our Approch:</h1>
                <button className='flex gap-10 uppercase items-center px-10 py-6 bg-zinc-900 mt-10 rounded-full text-white'>Read More
                       <div className='w-2 h-2 bg-zinc-100 rounded-full'></div>
                    </button> 
            </div>
            <div className="w-1/2 h-[70vh] rounded-3xl bg-[#CDEA68] overflow-hidden">
      <img
        className="w-full h-full object-cover rounded-3xl"
        src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg"
        srcSet="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg 1x, https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg 2x"
        alt="image description"
      />
    </div>
        </div>
    </div>
  )
}

export default About