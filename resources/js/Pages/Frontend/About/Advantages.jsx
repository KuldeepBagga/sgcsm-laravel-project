import React from 'react'
import MainLayout from '@/Layouts/MainLayout'
import { Head } from '@inertiajs/react'

function Advantages() {
  return (
    <MainLayout>
      <Head title="Advantages" />

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
                  SGCSM | Advantages
                </span>
                <h1 className="mt-5 text-4xl md:text-6xl font-black leading-tight uppercase">
                  Advantages
                </h1>
              </div>
            </div>
          </div>
        </section>

        <section class="py-14 md:py-5">
          <div class="max-w-7xl mx-auto px-6">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <section class="lg:col-span-12 text-lg text-justify">
                <p class="text-gray-700 leading-relaxed">
                  Provides IT & Computer education at every doorstep in rural areas and is committed to educating all capable and needy people to help them develop a high level of IT & Computer knowledge. The programs enable students to develop the knowledge and skills needed to build a better future.
                </p>
                <p>
                 <h4 className='text-xl font-bold py-3'>Career Opportunities</h4>
                  The SGCSM program is rigorous and aims to prepare candidates for challenging careers. It equips students with a diverse range of skills and knowledge. The exposure and training ensure that candidates meet the requirements of potential employers.
                </p>

                <p>
                  <h4 className='text-xl font-bold py-3'>Value for Time and Money</h4>
                  The SGCSM IT & Computer programs offer excellent value for both time and money. Students can pursue short-term certificate and diploma programs through a flexible learning approach. The short-duration programs provide immediate benefits that can be appreciated in a short period of time.
                </p>
              </section>
            </div>
          </div>
        </section>
      </main>
    </MainLayout>
  )
}

export default Advantages