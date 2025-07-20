import React from 'react'
import monitorSectionImg from '../assets/monitor-card.webp'
import { FaArrowRight } from "react-icons/fa";

const MonitorSection = () => {
  return (
    <div>
       <section className='max-w-7xl mx-auto px-4 py-16 md:py-24'>
              <div className='flex flex-col md:flex-row item-center justify-between '>
      
                  {/* left col */}
      
      
      
                  <div className='md:w-1/2 w-full'>
                      <p  className='text-green-500 font-semibold'>MONITOR</p>
                      <h2 className='text-3xl md:text-4xl font-bold text-neutral-900 mt-4 mb-6 md:w-4/5'>Introducing best mobile carousels
                      </h2>
      
                      <p className='text-gray-600 mb-8'>Take control of your time and boost productivity with our intelligent scheduling systwem. Automate appointments, manage team availability, and deliver exceptional customer experiences through seamless calender management.</p>
      
                      <a href="#" className='text-blue-500 font-semibold flex items-center gap-2 hover:gap-4 transition-all'>
                          Explore scheduling features
                          <FaArrowRight className='sixe-8'/>
                      </a>
      
                  </div>
                  {/* Right col */}
                  <div className='md:w-1/2 1-full'>
                      <img src={monitorSectionImg} alt="schedule image" className='w-full h-auto' />
                  </div>
              </div>
          </section>
    </div>
  )
}

export default MonitorSection
