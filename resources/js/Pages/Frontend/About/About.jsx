import React from 'react'
import MainLayout from '@/Layouts/MainLayout'
import { Head } from '@inertiajs/react'

function About() {
  return (
    <>
      <MainLayout>
        <Head title="About Us" />

        <main className="bg-slate-50">
          <section className="relative overflow-hidden bg-slate-950">
            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1800&auto=format&fit=crop"
              alt="" className="absolute inset-0 w-full h-full object-cover opacity-35" />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-blue-950/85 to-slate-900/25"></div>

            <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-20">
              <div className="grid lg:grid-cols-12 gap-10 items-end">
                <div className="lg:col-span-8 text-white">
                  <span
                    className="inline-flex items-center gap-2 bg-white/15 px-4 py-2 rounded-full text-sm font-semibold">
                    <i className="fa-solid fa-building-columns"></i>
                    SGCSM | About Us
                  </span>

                  <h1 className="mt-5 text-4xl md:text-6xl font-black leading-tight uppercase">
                    About Us
                  </h1>

                  <p className="mt-5 text-lg md:text-xl text-blue-50 max-w-2xl">
                    Sanjay Gandhi Computer Saksharta Mission Trust has been registered under the Public Trust
                    Act 1882, (Reg.No.2327) from Govt
                  </p>
                </div>

              </div>
            </div>
          </section>

          <section className="py-14 md:py-16">
            <div className="max-w-7xl mx-auto px-6">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                <section className="lg:col-span-12">

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    <div className="lg:col-span-8 text-lg">
                      <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome to SGCSM</h2>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        Sanjay Gandhi Computer Saksharta Mission Trust (Reg. No. 2327) is registered under
                        the
                        Public Trust Act, 1882 (Govt. of NCT of Delhi). We operate in education and training
                        programmes and are ISO 9001:2015 certified. While the government has taken major
                        steps
                        to promote computer education, NGOs are essential to broaden access. Our surveys
                        show
                        that awareness of computers reaches even remote areas, but many people cannot afford
                        higher fees charged by private centres or hold misconceptions about learning
                        technology. SGCSM's aim is to make computer literacy affordable and accessible to
                        all.
                      </p>
                    </div>
                    <div className="lg:col-span-4">
                      <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=400&auto=format&fit=crop"
                        alt="Students learning on computers" loading="lazy"
                        className="w-full h-auto rounded-lg shadow-lg" />
                    </div>
                  </div>
                </section>

                <section className="lg:col-span-12">

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    <div className="lg:col-span-4">
                      <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=400&auto=format&fit=crop"
                        alt="Students learning on computers" loading="lazy"
                        className="w-full h-auto rounded-lg shadow-lg" />
                    </div>
                    <div className="lg:col-span-8 text-lg">
                      <h2 className="text-3xl font-bold text-gray-900 mb-2">Our Mission</h2>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        Sanjay Gandhi Computer Saksharta Mission Trust (Reg. No. 2327) is registered under
                        the
                        Public Trust Act, 1882 (Govt. of NCT of Delhi). We operate in education and training
                        programmes and are ISO 9001:2015 certified. While the government has taken major
                        steps
                        to promote computer education, NGOs are essential to broaden access. Our surveys
                        show
                        that awareness of computers reaches even remote areas, but many people cannot afford
                        higher fees charged by private centres or hold misconceptions about learning
                        technology. SGCSM's aim is to make computer literacy affordable and accessible to
                        all.
                      </p>
                    </div>

                  </div>
                </section>


                <section className="lg:col-span-12">

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                    <div className="lg:col-span-8 text-lg">
                      <h2 className="text-3xl font-bold text-gray-900 mb-2">Our Vision</h2>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        Strengthen the development of associated learning centre as a proactive role model for high quality and learner centric computer literacy programme & be the most admired institute among the nation's premier institute for examination and certification in the field of Information Technology Education & Development
                      </p>
                    </div>

                    <div className="lg:col-span-4">
                      <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=400&auto=format&fit=crop"
                        alt="Students learning on computers" loading="lazy"
                        className="w-full h-auto rounded-lg shadow-lg" />
                    </div>

                  </div>
                </section>

              </div>
            </div>
          </section>
        </main>

      </MainLayout>
    </>
  )
}

export default About