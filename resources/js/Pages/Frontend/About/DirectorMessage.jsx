import React from 'react'
import MainLayout from '@/Layouts/MainLayout'
import { Head } from '@inertiajs/react'
import { FaPen } from 'react-icons/fa'

function DirectorMessage() {
  return (
    <MainLayout>
      <Head title="Director's Message" />


      <main class="bg-slate-50">
        <section class="relative overflow-hidden bg-slate-950">
          <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1800&auto=format&fit=crop"
            alt="" class="absolute inset-0 w-full h-full object-cover opacity-35" />
          <div class="absolute inset-0 bg-gradient-to-r from-slate-950 via-blue-950/85 to-slate-900/25"></div>

          <div class="relative max-w-7xl mx-auto px-6 py-16 md:py-20">
            <div class="grid lg:grid-cols-12 gap-10 items-end">
              <div class="lg:col-span-8 text-white">
                <span
                  class="inline-flex items-center gap-2 bg-white/15 px-4 py-2 rounded-full text-sm font-semibold">
                  <i class="fa-solid fa-building-columns"></i>
                  SGCSM | Director's Message
                </span>

                <h1 class="mt-5 text-4xl md:text-6xl font-black leading-tight uppercase">
                  Director's Message
                </h1>
              </div>

            </div>
          </div>
        </section>

        <section class="py-14 md:py-5 text-lg">
          <div class="max-w-7xl mx-auto px-6">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <section class="lg:col-span-12">
                {/* Decorative Background */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-blue-100 rounded-full blur-3xl opacity-40"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-indigo-100 rounded-full blur-2xl opacity-40"></div>

                {/* English Content */}
                <div className="relative z-10 space-y-6">
                  <div className="bg-gray-50 border-l-4 border-blue-500 rounded-2xl p-6 shadow-sm hover:shadow-md transition duration-300">
                    <p className="text-gray-700 leading-8 text-lg">
                      Information Technology has become the fastest-growing industry in today’s world,
                      providing thousands of employment opportunities to well-trained professionals.
                      India has achieved remarkable growth in this field and is now recognized as a
                      global technology power. Information Technology is shaping the future and
                      transforming every aspect of human life.
                    </p>
                  </div>

                  <div className="bg-gray-50 border-l-4 border-indigo-500 rounded-2xl p-6 shadow-sm hover:shadow-md transition duration-300">
                    <p className="text-gray-700 leading-8 text-lg">
                      Our Mission (SGCSM) is committed to providing quality computer education with
                      the support of various State and Central Government initiatives at affordable
                      fees for every individual belonging to lower and middle-class families.
                    </p>
                  </div>

                  <div className="bg-gray-50 border-l-4 border-purple-500 rounded-2xl p-6 shadow-sm hover:shadow-md transition duration-300">
                    <p className="text-gray-700 leading-8 text-lg">
                      I sincerely wish to fulfill the dream of computer education across India. I am
                      confident that our students can successfully meet every challenge and demand of
                      the professional world. We focus not only on education but also on the overall
                      personality development of students, because becoming a good human being is the
                      first step towards becoming truly successful.
                    </p>
                  </div>

                  <div className="text-center py-4">
                    <p className="text-xl font-semibold text-indigo-700 italic">
                      “Wishing all students a bright future and great success in life.”
                    </p>
                  </div>
                </div>

                {/* Hindi Section */}
                <div className="relative z-10 mt-12">
                  <div className="space-y-6">
                    <div className="bg-orange-50 border-l-4 border-orange-500 rounded-2xl p-6 shadow-sm hover:shadow-md transition duration-300">
                      <p className="text-gray-700 leading-9 text-lg">
                        सूचना प्रौद्योगिकी आज के समय में सबसे तेजी से बढ़ने वाला उद्योग बन गया है,
                        जो प्रशिक्षित पेशेवरों को हजारों रोजगार प्रदान कर रहा है। भारत ने इस क्षेत्र
                        में उल्लेखनीय प्रगति की है और विश्व में एक तकनीकी शक्ति के रूप में उभर रहा है।
                        सूचना प्रौद्योगिकी मानव जीवन के हर पहलू को बदलने का कार्य कर रही है।
                      </p>
                    </div>

                    <div className="bg-orange-50 border-l-4 border-amber-500 rounded-2xl p-6 shadow-sm hover:shadow-md transition duration-300">
                      <p className="text-gray-700 leading-9 text-lg">
                        हमारा मिशन (SGCSM) राज्य एवं भारत सरकार की विभिन्न योजनाओं की सहायता से
                        समाज के निम्न एवं मध्यम वर्ग के प्रत्येक व्यक्ति तक कम शुल्क में कंप्यूटर
                        शिक्षा पहुंचाने के लिए समर्पित है।
                      </p>
                    </div>

                    <div className="bg-orange-50 border-l-4 border-yellow-500 rounded-2xl p-6 shadow-sm hover:shadow-md transition duration-300">
                      <p className="text-gray-700 leading-9 text-lg">
                        मैं पूरे भारत में कंप्यूटर शिक्षा के सपने को साकार करने का प्रयास कर रहा हूं।
                        मुझे विश्वास है कि हमारे छात्र हर चुनौती और अवसर का सामना करने में सक्षम होंगे।
                        हम विद्यार्थियों के संपूर्ण व्यक्तित्व विकास पर विशेष ध्यान देते हैं क्योंकि
                        सबसे पहले एक अच्छा इंसान बनना आवश्यक है।
                      </p>
                    </div>

                    <div className="text-center py-4">
                      <p className="text-xl font-semibold text-orange-700 italic">
                        “मैं सभी विद्यार्थियों के उज्ज्वल भविष्य एवं सफलता की कामना करता हूं।”
                      </p>
                    </div>
                  </div>
                </div>

                {/* Signature */}
                <div className="relative z-10 mt-12 flex justify-end">
                  <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-5 rounded-2xl shadow-lg">
                    <div className="flex items-center gap-3">
                      <FaPen className="text-xl" />
                      <div>
                        <p className="font-bold text-lg tracking-wide">
                          R.C. CHAURASIA
                        </p>
                        <p className="text-sm text-blue-100">
                          Chairman, SGCSM
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

              </section>
            </div>
          </div>
        </section>
      </main>

    </MainLayout>
  )
}

export default DirectorMessage