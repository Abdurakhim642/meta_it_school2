import React from 'react'

const Subcribe_section = () => {
  return (
    <div>

    <div className="flex justify-center px-4 mt-10 mb-10">
        <div className="stats shadow-lg w-full lg:w-3/4 bg-gradient-to-r from-accent/10 to-primary/10 rounded-lg border-2 border-accent/30">
          <div className="stat place-items-center hover:bg-accent/5 transition-colors duration-300 cursor-pointer">
            <div className="stat-title text-lg font-semibold text-gray-400">Experience</div>
            <div className="stat-value text-4xl text-accent font-bold">9+</div>
            <div className="stat-desc text-sm text-gray-500 mt-2">From January 1st to February 1st</div>
          </div>

          <div className="stat place-items-center hover:bg-primary/5 transition-colors duration-300 cursor-pointer border-l-2 border-r-2 border-accent/20">
            <div className="stat-title text-lg font-semibold text-gray-400">Students</div>
            <div className="stat-value text-4xl text-secondary font-bold">2,500+</div>
            <div className="stat-desc text-sm text-secondary mt-2 font-semibold">↗︎ 85 (17%)</div>
          </div>

          <div className="stat place-items-center hover:bg-accent/5 transition-colors duration-300 cursor-pointer">
            <div className="stat-title text-lg font-semibold text-gray-400">Those who have found a job</div>
            <div className="stat-value text-4xl text-accent font-bold">1,200+</div>
            <div className="stat-desc text-sm text-gray-500 mt-2">↘︎ 28 (6%)</div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Subcribe_section