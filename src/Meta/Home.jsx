import React from 'react'
import meta from './meta.jpg'
import Domla3 from './Domla3.jpg'
import Domla4 from './Domla4.jpg'
import { Link } from 'react-router-dom'

const Home = () => {
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
            <Link to="/login" className="btn hover:text-white btn-dash text-accent bg-accent-content text-xl">Start the course</Link>
          </div>
        </div>
      </div>


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
      <Link to="/about" className="btn hover:bg-gray-500 hover:text-white btn-dash text-accent text-3xl pb-1">More</Link>
    </div>
  </div>
</div>


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


      <h1 className="text-5xl font-bold text-accent text-center mt-10">Our available courses</h1>

      <div className="cards flex items-center justify-evenly flex-wrap mt-10">


        <div className="card bg-base-100 w-96 shadow-sm">
          <figure>
            <img
              src="https://itvdn.blob.core.windows.net/cbs-images/cbs-images-b2b92135-f68d-433a-b40d-f01c41a1eecb.png"
              alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-accent">Frontend</h2>
            <p>Frontend programming is a field focused on creating user interfaces, design, animation, speed, and usability today.</p>
            <div className="card-actions justify-end">
              <Link to='/frontend' className="btn hover:bg-gray-500 hover:text-white btn-dash text-accent">More</Link>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-sm">
          <figure>
            <img className='object-cover'
              src="https://img.freepik.com/free-vector/backend-technology-concept-with-glowing-lines-background_1017-28405.jpg"
              alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-accent">Backend</h2>
            <p>Backend programming is an important area of ​​modern technology that ensures server, database, security, and stable system operation.</p>
            <div className="card-actions justify-end">
              <Link to='/backend' className="btn hover:bg-gray-500 hover:text-white btn-dash text-accent">More</Link>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-sm">
          <figure>
            <img className='object-cover'
              src="https://i2.res.24o.it/images2010/S24/Documenti/2025/11/18/Immagini/Ritagli/AdobeStock-U10858262130kGm-1440x752@IlSole24Ore-Web.jpeg"
              alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-accent">Cyber-Security</h2>
            <p>Cyber-security is a continuing professional field that protects information systems, prevents hacker attacks, and ensures data security.</p>
            <div className="card-actions justify-end">
              <Link to='/cyber' className="btn hover:bg-gray-500 hover:text-white btn-dash text-accent">More</Link>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-sm">
          <figure>
            <img className='object-cover'
              src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/smm-social-media-marketing-video-logo-design-template-f44806400b911ba493a1b7096ec07b2f_screen.jpg?ts=1670973377"
              alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-accent">SMM</h2>
            <p>SMM is an effective modern direction for developing a brand, communicating with the audience, and conducting marketing strategies on social networks.</p>
            <div className="card-actions justify-end">
              <Link to='/smm' className="btn hover:bg-gray-500 hover:text-white btn-dash text-accent">More</Link>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-sm">
          <figure>
            <img className='object-cover'
              src="https://www.appzoc.com/wp-content/uploads/2024/08/Android_thumb800.jpg"
              alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-accent">Android</h2>
            <p>Android programming is fast at creating mobile applications, increasing functionality, and developing user-friendly solutions.</p>
            <div className="card-actions justify-end">
              <Link to='/androit' className="btn hover:bg-gray-500 hover:text-white btn-dash text-accent">More</Link>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-sm">
          <figure>
            <img
              src="https://media.designrush.com/articles/778133/conversions/Hero-image---GDP-preview.jpg"
              alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-accent">Graphic design</h2>
            <p>Graphic design effectively conveys information through visual content creation, color harmony, composition, and creative ideas.</p>
            <div className="card-actions justify-end">
              <Link to='/grophic' className="btn hover:bg-gray-500 hover:text-white btn-dash text-accent">More</Link>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-sm">
          <figure>
            <img className='object-cover'
              src="https://t3.ftcdn.net/jpg/07/04/49/46/360_F_704494662_tO6610fg8bp5HvzQxji3h1HQqZQ3twAJ.jpg"
              alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-accent">3Ds Max</h2>
            <p>3Ds Max is used in the professional field to create three-dimensional modeling, animation, and realistic design projects.</p>
            <div className="card-actions justify-end">
              <Link to='/max' className="btn hover:bg-gray-500 hover:text-white btn-dash text-accent">More</Link>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-sm">
          <figure>
            <img className='object-cover'
              src="https://img.freepik.com/free-photo/home-made-robot-desk_23-2148863420.jpg?semt=ais_hybrid&w=740&q=80"
              alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-accent">Robotics</h2>
            <p>ARobotics is an innovative modern technological direction that combines automation, mechanics, electronics, and programming to create intelligent robotic systems.</p>
            <div className="card-actions justify-end">
              <Link to='/robotics' className="btn hover:bg-gray-500 hover:text-white btn-dash text-accent">More</Link>
            </div>
          </div>
        </div>
      </div>



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

export default Home
