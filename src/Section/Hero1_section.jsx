import React from 'react'

const Hero1_section = () => {
  return (
    <div>

    <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://minfin.com.ua/img/2024/134129297/018fa79144b4a3a0b365a14caf3c713a.jpeg)",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-6xl font-bold text-accent">Meta IT School</h1>
            <p className="mb-5 text-2xl">
              Meta IT School is a center for teaching modern IT skills, preparing young people for programming, technology, creative thinking, and future professions.
            </p>
            <button className="btn hover:text-white btn-dash text-accent bg-accent-content text-xl">Start the course</button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Hero1_section