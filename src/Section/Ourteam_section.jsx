import React from 'react'

const Ourteam_section = () => {
  return (
    <div>

    <div className="mx-auto grid max-w-7x1 gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3 bg-white p-5 items-center justify-center">
              <div className='max-w-2x1'>
                  <h2 className='text-3xl font-bold tracking-tight text-accent sm:text-4xl'>Our team</h2>
                  <p className='mt-6 text-lg leading-8 text-gray-600'>Our team consists of experienced professionals who implement high-quality, innovative, and reliable projects using modern technologies.</p>
              </div>
              <ul role='list' className='grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2'>
                <li>
                  <div className="flex items-center gap-x-6">
                    <img className="h-20 w-20 rounded-full object-cover " src={meta} alt=""/>
                    <div><h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">Bunyod Khurvaliyev</h3><p className="text-sm font-semibold leading-6 text-accent">Fullstake-developer / CEO</p></div></div>
                </li>
                <li>
                  
                  <div className="flex items-center gap-x-6">
                    <img className="h-20 w-20 rounded-full object-cover " src="https://thumbs.dreamstime.com/b/handsome-man-hair-style-beard-beauty-face-portrait-fashion-male-model-black-hair-high-resolution-handsome-man-125031765.jpg" alt=""/>
                    <div><h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">Hojiakbar Qambarov</h3><p className="text-sm font-semibold leading-6 text-accent">Frontend-and-Backend-developer / CEO</p></div></div>
                </li>
                <li>
                  <div className="flex items-center gap-x-6">
                    <img className="h-20 w-20 rounded-full object-cover " src={Domla3} alt=""/>
                    <div><h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">Xurshidbek Madaminov</h3><p className="text-sm font-semibold leading-6 text-accent">Frontend-developer / CEO</p></div></div>
                </li>
                <li>
                  <div className="flex items-center gap-x-6">
                    <img className="h-20 w-20 rounded-full object-cover " src={Domla4} alt=""/>
                    <div><h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">Muhammadnosir Erkinov</h3><p className="text-sm font-semibold leading-6 text-accent">Frontend-developer / CEO</p></div></div>
                </li>
              </ul>
            </div>
    

    </div>
  )
}

export default Ourteam_section