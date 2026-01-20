import React from 'react'

const Smm = () => {
  return (
    <div>
      <div className="p-4 text-gray-600 bg-indigo-50 flex flex-col items-center justify-center h-200 text-accent">
        <h1 className="mb-20 text-center text-5xl font-bold text-accent">SMM (Social Media Marketing):</h1>
        <ul className="flex place-content-center sm:grid-cols-2 gap-10 flex-wrap">
          <li className="flex">
            <div className="px-4 text-5xl font-extralight text-account">01.</div>
            <div>
              <div className="text-3xl font-bold text-accent">SMM Asoslari</div>
              <p className="max-w-xs py-2 text-sm text-indigo-900">
                SMM asoslari ijtimoiy media platformalarini tushunish, kontent yaratish, auditoriya bilan muloqot qilish va brendni targ‘ib qilishni o‘rgatadi.
              </p>
            </div>
          </li>
          <li className="flex">
            <div className="px-4 text-5xl font-extralight text-account">02.</div>
            <div>
              <div className="text-3xl font-bold text-accent">Kontent Yaratish</div>
              <p className="max-w-xs py-2 text-sm text-indigo-900">
                Kontent yaratish vizual va matnli materiallar tayyorlash, brend ovozini aniqlash va auditoriya uchun qiziqarli postlar yaratishni o‘rgatadi.
              </p>
            </div>
          </li>
          <li className="flex">
            <div className="px-4 text-5xl font-extralight text-account">03.</div>
            <div>
              <div className="text-3xl font-bold text-accent">Platformalar Bilan Ishlash</div>
              <p className="max-w-xs py-2 text-sm text-indigo-900">
                Platformalar bilan ishlash Facebook, Instagram, Twitter va LinkedIn kabi ijtimoiy media platformalarining xususiyatlari, algoritmlari va reklama vositalarini tushunishni o‘rgatadi.
              </p>
            </div>
          </li>
          <li className="flex">
            <div className="px-4 text-5xl font-extralight text-account">04.</div>
            <div>
              <div className="text-3xl font-bold text-accent">Auditoriya Tahlili</div>
              <p className="max-w-xs py-2 text-sm text-indigo-900">
                Auditoriya tahlili demografik ma’lumotlar, qiziqishlar va xulq-atvorni o‘rganish orqali maqsadli auditoriyani aniqlash va ularga mos kontent yaratishni o‘rgatadi.
              </p>
            </div>
          </li>
          <li className="flex">
            <div className="px-4 text-5xl font-extralight text-account">05.</div>
            <div>
              <div className="text-3xl font-bold text-accent">Reklama Kampaniyalari</div>
              <p className="max-w-xs py-2 text-sm text-indigo-900">
                Reklama kampaniyalari ijtimoiy media reklama vositalaridan foydalanish, byudjet belgilash, maqsadli auditoriyani tanlash va kampaniya samaradorligini o‘lchashni o‘rgatadi.
              </p>
            </div>
          </li>
          <li className="flex">
            <div className="px-4 text-5xl font-extralight text-account">06.</div>
            <div>
              <div className="text-3xl font-bold text-accent">Tahlil va Hisobot</div>
              <p className="max-w-xs py-2 text-sm text-indigo-900">
                Tahlil va hisobot ijtimoiy media ko‘rsatkichlarini kuzatish, tahlil qilish va hisobotlar tayyorlash orqali kampaniyalar samaradorligini
                baholashni o‘rgatadi.
              </p>
            </div>
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

export default Smm