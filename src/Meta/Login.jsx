import React, { useState } from 'react'

const Login = () => {
  const [isLogin, setIsLogin] = useState(true)

  return (
    <div>
      <div className="min-h-screen bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center px-4 py-20">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-2xl shadow-2xl p-8 border-t-4 border-accent">
            <h1 className="text-4xl font-bold text-center text-accent mb-2">Meta IT School</h1>
            <p className="text-center text-gray-600 mb-8">Welcome to our platform!</p>

            <div className="flex gap-4 mb-8">
              <button
                onClick={() => setIsLogin(true)}
                className={`flex-1 py-2 rounded-lg font-semibold transition-all cursor-pointer ${isLogin
                    ? 'bg-accent text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
              >
                Enter
              </button>
              <button
                onClick={() => setIsLogin(false)}
                className={`flex-1 py-2 rounded-lg font-semibold transition-all cursor-pointer ${!isLogin
                    ? 'bg-accent text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
              >
                List
              </button>
            </div>

            {isLogin ? (
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                  <input type="email" placeholder="your@email.com" className="text-black w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-accent focus:outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
                  <input type="password" placeholder="Password" className="text-black w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-accent focus:outline-none" />
                </div>
                <button className="w-full bg-accent text-white py-2 rounded-lg font-semibold hover:shadow-lg transition-all cursor-pointer">Enter</button>
              </form>
            ) : (
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Name</label>
                  <input type="text" placeholder="Name" className="text-black w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-accent focus:outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                  <input type="email" placeholder="your@email.com" className="text-black w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-accent focus:outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
                  <input type="password" placeholder="Password" className="text-black w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-accent focus:outline-none" />
                </div>
                <button className="w-full bg-accent text-white py-2 rounded-lg font-semibold hover:shadow-lg transition-all cursor-pointer">Register</button>
              </form>
            )}

            <p className="text-center text-gray-600 mt-6 text-sm">
              {isLogin ? "Don't have an account? " : 'Do you have an account? '}
              <button onClick={() => setIsLogin(!isLogin)} className="text-accent font-semibold hover:underline">
                {isLogin ? 'Register' : 'Login'}
              </button>
            </p>
          </div>
        </div>
      </div>
      <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
        <nav>
          <h6 className="footer-title text-accent">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title text-accent">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title text-accent">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
        <form>
          <h6 className="footer-title text-accent">Newsletter</h6>
          <fieldset className="w-80">
            <label>Enter your email address</label>
            <div className="join">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered join-item" />
              <button className="btn hover:bg-gray-500 hover:text-white btn-dash text-accent rounded-r-field">Subscribe</button>
            </div>
          </fieldset>
        </form>
      </footer>

      <footer className="footer sm:footer-horizontal bg-base-200 text-neutral-content items-center p-4">
        <aside className="grid-flow-col items-center">
          <svg
            width="36"
            height="36"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
            className="fill-current">
            <path
              d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
          </svg>
          <p>Meta IT School LC. © {new Date().getFullYear()} - All right reserved</p>
        </aside>
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <a className='text-2xl hover:-translate-y-2 duration-300 hover:text-blue-400' href='https://t.me/metaitschool'>
            <i class="fa-brands fa-telegram"></i>
          </a>
          <a className='text-2xl hover:-translate-y-2 duration-300 hover:text-purple-400' href='https://www.instagram.com/metaitschool'>
            <i class="fa-brands fa-instagram"></i>
          </a>
          <a className='text-2xl hover:-translate-y-2 duration-300 hover:text-red-500' href='https://www.youtube.com/@metaitschool'>
            <i class="fa-brands fa-youtube"></i>
          </a>
        </nav>
      </footer>
    </div>
  )
}

export default Login