import React from 'react'

const Courses_section = () => {
  return (
    <div>

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
              <button className="btn hover:bg-gray-500 hover:text-white btn-dash text-accent">More</button>
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
              <button className="btn hover:bg-gray-500 hover:text-white btn-dash text-accent">More</button>
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
              <button className="btn hover:bg-gray-500 hover:text-white btn-dash text-accent">More</button>
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
              <button className="btn hover:bg-gray-500 hover:text-white btn-dash text-accent">More</button>
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
              <button className="btn hover:bg-gray-500 hover:text-white btn-dash text-accent">More</button>
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
              <button className="btn hover:bg-gray-500 hover:text-white btn-dash text-accent">More</button>
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
              <button className="btn hover:bg-gray-500 hover:text-white btn-dash text-accent">More</button>
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
              <button className="btn hover:bg-gray-500 hover:text-white btn-dash text-accent">More</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Courses_section