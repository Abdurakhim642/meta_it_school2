import React from 'react'

const Frontend = () => {
  return (
    <div>

    {/* <!-- component -->
<!-- This is an example component --> */}


<div className="p-4 text-gray-600 bg-indigo-50 flex flex-col items-center justify-center h-200 text-accent">
	<h1 className="mb-20 text-center text-5xl font-bold text-accent">Frontend web developer:</h1>

	<ul className="flex place-content-center sm:grid-cols-2 gap-10 flex-wrap">
		<li className="flex">
			<div className="px-4 text-5xl font-extralight text-account">01.</div>
			<div>
				<div className="text-3xl font-bold text-accent">HTML (Markup)</div>
				<p className="max-w-xs py-2 text-sm text-indigo-900">HTML veb sahifa tuzilishini yaratadi, kontentni tartiblaydi, semantik teglar orqali SEO, accessibility, formalar, linklar, rasmlar va brauzerlar bilan to‘g‘ri ishlashni ta’minlaydi, asosiy texnologiya hisoblanadi frontend.</p>
			</div>
		</li>
		<li className="flex">
			<div className="px-4 text-5xl font-extralight text-account">02.</div>
			<div>
				<div className="text-3xl font-bold text-accent">CSS (Styling)</div>
				<p className="max-w-xs py-2 text-sm text-indigo-900">CSS dizayn va joylashuvni boshqaradi, ranglar, shriftlar, animatsiyalar, Flexbox, Grid yordamida responsive, chiroyli va foydalanuvchiga qulay interfeyslar yaratishni ta’minlaydi, zamonaviy veb loyihalar uchun muhim texnologiya.
				</p>
			</div>
		</li>
		<li className="flex">
			<div className="px-4 text-5xl font-extralight text-account">03.</div>
			<div>
				<div className="text-3xl font-bold text-accent">JavaScript (Asosiy til)</div>
				<p className="max-w-xs py-2 text-sm text-indigo-900">JavaScript sahifaga interaktivlik qo‘shadi, hodisalar, DOM, mantiq, API, async jarayonlar orqali dinamik, tezkor va foydalanuvchi bilan ishlovchi funksiyalarni yaratadi, frontend dasturlash asosiy qismi hisoblanadi til.
				</p>
			</div>
		</li>
		<li className="flex">
			<div className="px-4 text-5xl font-extralight text-account">04.</div>
			<div>
				<div className="text-3xl font-bold text-accent">Git & GitHub</div>
				<p className="max-w-xs py-2 text-sm text-indigo-900">Git va GitHub kodlarni versiyalash, jamoada ishlash, branch, commit, merge jarayonlarini boshqarish, xatolarni kuzatish va loyihalarni xavfsiz saqlashga yordam beradi, zamonaviy dasturlashda muhim vosita hisoblanadi.
				</p>
			</div>
		</li>
    <li className="flex">
			<div className="px-4 text-5xl font-extralight text-account">05.</div>
			<div>
				<div className="text-3xl font-bold text-accent">REACT</div>
				<p className="max-w-xs py-2 text-sm text-indigo-900">React komponentlarga asoslangan kutubxona bo‘lib, state va props yordamida tezkor, qayta foydalaniladigan, katta va murakkab interfeyslarni samarali boshqarishni ta’minlaydi, zamonaviy frontend ilovalar yaratishda keng qo‘llaniladi.
				</p>
			</div>
		</li>
    <li className="flex">
			<div className="px-4 text-5xl font-extralight text-account">06.</div>
			<div>
				<div className="text-3xl font-bold text-accent">Build Tools</div>
				<p className="max-w-xs py-2 text-sm text-indigo-900">Build tools loyihani yig‘ish, optimizatsiya, modullarni boshqarish, kodni tekshirish va tez ishga tushirish uchun npm, Vite yoki Webpackdan foydalanadi, professional frontend ishlab chiqishda juda zarur.
				</p>
			</div>
		</li>
    <li className="flex">
			<div className="px-4 text-5xl font-extralight text-account">07.</div>
			<div>
				<div className="text-3xl font-bold text-accent">UI / UX Asoslari</div>
				<p className="max-w-xs py-2 text-sm text-indigo-900">UI va UX asoslari foydalanuvchi tajribasini yaxshilash, qulay navigatsiya, tushunarli dizayn, rang uyg‘unligi va samarali interfeys yaratishga qaratilgan, dizaynerlar va frontend dasturchilar uchun muhim bilimlar.
				</p>
			</div>
		</li>
    <li className="flex">
			<div className="px-4 text-5xl font-extralight text-account">08.</div>
			<div>
				<div className="text-3xl font-bold text-accent">BOOTSTRAP</div>
				<p className="max-w-xs py-2 text-sm text-indigo-900">Bootstrap tayyor komponentlar va grid tizimi orqali tezkor, responsive dizayn yaratish imkonini beruvchi mashhur CSS framework hisoblanadi, kichik va katta loyihalar uchun qulay yechim hisoblanadi.
				</p>
			</div>
		</li>
    <li className="flex">
			<div className="px-4 text-5xl font-extralight text-account">09.</div>
			<div>
				<div className="text-3xl font-bold text-accent">Teilwind css</div>
				<p className="max-w-xs py-2 text-sm text-indigo-900">Tailwind CSS utility-first yondashuv asosida yozilib, klasslar yordamida tez, moslashuvchan va dizaynga boy interfeyslar yaratishga imkon beradi, zamonaviy frontend dasturchilar orasida juda mashhur hisoblanadi hozirda.
				</p>
			</div>
		</li>
    <li className="flex">
			<div className="px-4 text-5xl font-extralight text-account">10.</div>
			<div>
				<div className="text-3xl font-bold text-accent">DiasyUI</div>
				<p className="max-w-xs py-2 text-sm text-indigo-900">DaisyUI Tailwind CSS ustiga qurilgan bo‘lib, tayyor komponentlar orqali chiroyli dizaynni tez va oson amalga oshirishga yordam beradi, frontend loyihalar ishlab chiqishda qulay kutubxona hisoblanadi.
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
            <i className="fa-brands fa-telegram"></i>
          </a>
          <a className='text-2xl hover:-translate-y-2 duration-300 hover:text-purple-400' href='https://www.instagram.com/metaitschool'>
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a className='text-2xl hover:-translate-y-2 duration-300 hover:text-red-500' href='https://www.youtube.com/@metaitschool'>
            <i className="fa-brands fa-youtube"></i>
          </a>
        </nav>
      </footer>

    </div>
  )
}

export default Frontend