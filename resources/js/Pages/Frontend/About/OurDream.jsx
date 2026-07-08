import { Head } from '@inertiajs/react'
import React from 'react'
import MainLayout from '@/Layouts/MainLayout'
import {faBuildingColumns} from "@fortawesome/free-solid-svg-icons";

function OurDream() {
  return (
    <MainLayout>
      <Head title="Our Dream" />

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
                  SGCSM | Our Dream
                </span>
                <h1 className="mt-5 text-4xl md:text-6xl font-black leading-tight uppercase">
                  Our Dream
                </h1>
              </div>
            </div>
          </div>
        </section>
        <section className="py-14 md:py-5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <section className="lg:col-span-12">
                <p className="text-gray-700 leading-relaxed mb-4 text-lg text-justify">
                  Today, the computer is indispensable, and its presence has become very important and
                  necessary in our daily life, and it has become easier for us to do many operations and
                  activities.some big Institution run their computer programme in higher charges. Due to which
                  the middle class families of our societies cannot afford the load of their charges. Our aim
                  is to make everyone Computer Literacy to every nook and corner of the society at nominal
                  charges.

                  Strengthen the development of associated learning centre as a proactive role model for high
                  quality and learner centric computer literacy programme & be the most admired institute
                  among the nation's premier institute for examination and certification in the field of
                  Information Technology Education & Development
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

export default OurDream