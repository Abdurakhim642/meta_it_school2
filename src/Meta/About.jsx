import React from 'react'

const About = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-base-100 to-base-200">
            <div className="container mx-auto px-4 py-16">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-6xl font-bold text-accent mb-8 text-center">About Meta IT School</h1>

                    <div className="w-full h-150 bg-white rounded-lg shadow-2xl p-8 mb-8 border-l-4 border-accent overflow-x-auto">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">Bizning kurslarimiz!</h2>
                        <p className="text-lg text-gray-600 leading-relaxed mb-6 list-item">
                            Meta IT School zamonaviy IT bilimlarini o'rgatuvchi markaz bo'lib, yoshlarni dasturlash, texnologiya, kreativ fikrlash va kelajak kasblariga tayyorlaydi.
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed list-item">
                            🎓 Nimani o‘rgatadi? <br />

                            Markazda quyidagi sohalar bo‘yicha o‘quv dasturlari mavjud deb e’lon qilinadi: <br />

                            Frontend dasturlash (HTML, CSS, JavaScript) — veb-saytning foydalanuvchi qismiga kod yozish. <br />

                            Backend dasturlash — server, ma’lumotlar bazasi va ilova logikasini yaratish. <br />

                            Python, Android, PHP kabi dasturlash tillari. <b></b>

                            Grafik dizayn, UI/UX, 3Ds Max kabi kreativ yo‘nalishlar. <br />

                            Robototexnika va Junior IT kurslari (bolalar uchun ham). <br /><br />
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed list-item">
                            🧠 Nimalar o‘rgatiladi va format <br />

                            Kurslar bo‘yicha: <br />

                            Frontend (HTML, CSS, JavaScript) <br />

                            Python dasturlash <br />

                            Android <br />

                            PHP <br />

                            Grafik dizayn, UI/UX, 3Ds Max <br />

                            Web & mobile loyihalar bilan mashqlar <br />
                            Telegram kanaldagi postlar kurs nomlarini shu yo‘nalishlarda ko‘rsatadi. <br />

                            📌 Shuningdek markaz bolalar uchun junior IT yo‘nalishlari va robototexnika bo‘yicha videolar/takliflar ham tarqatgan. <br /><br />
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed list-item">
                            💡 Ta’lim formati va imkoniyatlar <br />

                            Kurslar bootcamp shaklida, amaliyotga yo‘naltirilgan tarzda olib boriladi. <br />

                            O‘quvchilarga sertifikatlar (diplomlar) beriladi va bitiruvchilar orasidan muvaffaqiyatga erishganlar haqida muxlislar e’lon qilinadi. <br />

                            Kritik texnologiyalar bo‘yicha bilimlar bilan bir qatorda freelancing bo‘yicha yo‘nalishlar ham o‘rgatiladi (masofaviy ishlash ko‘nikmalari). <br />

                            Kurs davomida co‑working zonasi, Wi‑Fi va networking imkoniyatlari ham taqdim etilishi haqida xabarlar mavjud. <br /><br />
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed list-item">
                            👨‍🏫 Mentorlar va natijalar <br />

                            Markazda ta’lim beruvchi ustozlar ichida tajribali dasturchilar borligi aytiladi (masalan Bunyod Khurvaliev kabi). Bitiruvchilar chet eldagi kompaniyalar va freelancer bozorida ham faoliyat yuritgan ko‘nikmaga ega bo‘lishga chaqiriladi. <br /><br />
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed list-item">
                            📍 Manzil va reyting <br />

                            Markaz Andijon shahrida, Milliy Tiklanish ko‘chasi 11V manzilida joylashganligi haqida tashqi manbalar ko‘rsatadi. Ta’lim markazi lokal darajada yaxshi reytingga ega — mijozlar sharhlari 4.8–4.9 ball atrofida baholangan. <br /><br />
                        </p>
                        <p className='text-lg text-gray-600 leading-relaxed list-item'>
                            📌 Kimlar uchun? <br />

                            Boshlovchi va o‘rta darajadagi dasturchilar, <br />

                            Talabalar va bitiruvchilar, <br />

                            Freelancer bo‘lib ishlashni xohlovchilar, <br />

                            Yoshlar va hatto bolalar uchun junior IT yo‘nalishlari kurslari mavjud. <br /> <br />
                        </p>
                        <p className='text-lg text-gray-600 leading-relaxed list-item'>
                            📞 Aloqa <br />

                            Ko‘pincha markaz Telegram, Instagram va YouTube orqali faoliyat yuritadi va u erda kurslar, maslahatlar va texnologik mavzular bo‘yicha ma’lumotlar beriladi. <br /><br />
                        </p>
                        <p className='text-lg text-gray-600 leading-relaxed list-item'>
                            Murojat uchun: <br />
                            Telegram: @metaitschool_admin <br />
                            Instagram: @metaitschool <br />
                            YouTube: @metaitschool <br />
                            Telefon: +998-(94)‑154‑44‑88
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-accent/10 rounded-lg p-6 hover:shadow-lg transition-shadow">
                            <div className="text-4xl mb-3">🎯</div>
                            <h3 className="text-xl font-bold text-accent mb-2">The goal</h3>
                            <p className="text-gray-600">Training qualified personnel in the IT sector</p>
                        </div>
                        <div className="bg-primary/10 rounded-lg p-6 hover:shadow-lg transition-shadow">
                            <div className="text-4xl mb-3">🚀</div>
                            <h3 className="text-xl font-bold text-primary mb-2">Innovation</h3>
                            <p className="text-gray-600">Using the latest technologies</p>
                        </div>
                        <div className="bg-secondary/10 rounded-lg p-6 hover:shadow-lg transition-shadow">
                            <div className="text-4xl mb-3">👥</div>
                            <h3 className="text-xl font-bold text-secondary mb-2">Team</h3>
                            <p className="text-gray-600">Creating a close and friendly environment</p>
                        </div>
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

export default About