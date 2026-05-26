import React from 'react'
import MainLayout from '@/Layouts/MainLayout'
import { Head } from '@inertiajs/react'

function MissionVision() {
  return (
    <MainLayout>
      <Head title="Mission & Vision" />

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
                  SGCSM | Mission & Vision
                </span>

                <h1 className="mt-5 text-4xl md:text-6xl font-black leading-tight uppercase">
                  Mission & Vision
                </h1>
              </div>
            </div>
          </div>
        </section>


        <section className="py-14 md:py-5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <section className="lg:col-span-12">
                <p className="text-lg text-gray-700 leading-relaxed mb-4 text-justify">
                  1) To encourage young & competent people to opt for social entrepreneurship in educational &
                  Training sector and to bring the skill gap in India by offering skill based training at
                  affordable cost.
                  <br />

                  2) To create & nature a learning and knowledge based environment, conductive to pursuit of
                  Quality education which would transform a socially responsible generation to act on their
                  professional values & beliefs.
                  <br />

                  3) To bring about their overall personality development, fostering a caring & creative
                  environment that emphasizes, Physical, social & intellectual development.
                  <br />

                  4) To instill a sense of understanding, remarkable resilience & enduring adaptation to
                  diverse, competitive and dynamic society.100% Computer Literate nation by 2020- After
                  achieving independence, India has still been grappling with the enormous problem of
                  illiteracy though it was well understood that literacy was the road we must take to become a
                  developed nation, getting there has been indeed tough. Agreed that the population has grown
                  considerably over these decades, but nearly 60 years have passed and yet the age old problem
                  persists. The government has been diligently working at it by launching numerous programs
                  not just at urban and semi-urban areas, but more so at the grass-roots level. The strong
                  vision and implementation has been an inspiration to many ensuring that very soon India will
                  emerge as a literate nation.
                  <br />
                </p>
              </section>
            </div>
          </div>
        </section>
      </main>

    </MainLayout>
  )
}

export default MissionVision