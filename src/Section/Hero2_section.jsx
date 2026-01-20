import React from 'react'

const Hero2_section = () => {
  return (
    <div>

    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={meta}
          className="max-w-svh rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-7xl font-bold text-accent">About Us!</h1>
          <p className=" text-2xl py-6">
            Meta IT School provides education in an innovative environment, providing students with practical skills, independent thinking, and in-depth mastery of modern technologies, effectively preparing them for future careers.
          </p>
          <button className="btn hover:bg-gray-500 hover:text-white btn-dash text-accent text-3xl pb-1">More</button>
        </div>
      </div>
    </div>

    </div>
  )
}

export default Hero2_section