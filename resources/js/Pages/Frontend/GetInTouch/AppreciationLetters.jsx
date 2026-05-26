import React from 'react'
import MainLayout from '@/Layouts/MainLayout'
import { Head } from '@inertiajs/react'

function AppreciationLetters() {
  return (
     <MainLayout>
            <Head title="Appreciation Letters" /> 
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
                    SGCSM | Appreciation Letters
                  </span>

                  <h1 className="mt-5 text-4xl md:text-6xl font-black leading-tight uppercase">
                    Appreciation Letters
                  </h1>

                </div>

              </div>
            </div>
          </section>
 
        </main>
        </MainLayout>
  )
}

export default AppreciationLetters