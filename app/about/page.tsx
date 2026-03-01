"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main className="about-page min-h-screen font-body bg-[var(--cafe-cream)]">

      {/* HEADER SECTION */}
      <div className="w-full bg-cafe-brown py-28 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-white"
        >
          About Us
        </motion.h1>
      </div>

      {/* CONTENT WRAPPER */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 py-16 space-y-16">

      {/* Company Profile */} <section className="text-center mt-12"> <h2 className="text-2xl sm:text-3xl font-semibold text-cafe-brown"> Profil Syarikat </h2> </section>

        {/* Story */}
        <section className="space-y-6 text-lg leading-relaxed text-justify">
          <p>
            Fine Cafe ialah sebuah kafe berkonsep moden dan santai yang beroperasi di bawah Fine Ways Group. Konsep Fine Cafe 
            diinspirasikan daripada minat pemiliknya yang gemar travel dan mencuba pelbagai makanan dari serata dunia. Inspirasi 
            ini diterjemahkan ke dalam menu dan suasana kafe, membawa pengalaman makan yang unik dan pelbagai citarasa kepada pelanggan.
          </p>

          <p>
            Pemilik Fine Cafe juga merupakan usahawan berpengalaman dengan beberapa syarikat lain dalam bidang pelancongan dan perkhidmatan, 
            membawakan kepakaran dalam pengurusan, inovasi dan pengalaman pelanggan yang berkualiti ke dalam setiap aspek operasi kafe.
          </p>

          <p>
            Fine Cafe menawarkan pelbagai pilihan menu, termasuk hidangan Western, masakan tempatan (Local), dan citarasa Indonesia. 
            Setiap hidangan disediakan menggunakan bahan segar dan berkualiti bagi memastikan rasa yang konsisten dan memuaskan. 
            Pelanggan boleh menikmati signature drinks, pastri freshly baked, serta hidangan panas yang menjadi kegemaran ramai.
          </p>

          <p>
            Selain ruang kafe yang selesa, Fine Cafe menekankan pengalaman pelanggan yang menyenangkan dengan layanan mesra dan 
            suasana santai, sambil membawa sedikit “feel” pengembaraan dari seluruh dunia.
          </p>
        </section>

        {/* Separator line */}
        <div className="border-t-2 border-[#A0522D] my-8"></div>

        {/* Mission */}
        <section className="flex flex-col md:flex-row items-start space-y-6 md:space-y-0 md:space-x-12 xl:space-x-24">
          <img 
            src="/images/cappuccino.jpg" 
            alt="Mission Icon" 
            className="w-120 h-120 object-cover mx-auto md:mx-0"
          />
          <div className="space-y-4 flex-1 md:pl-12 lg:pl-16">
            <h3 className="text-3xl font-semibold text-cafe-brown text-center w-full mb-7">
              Misi
            </h3>
            <ul className="list-disc pl-6 space-y-3 text-lg leading-relaxed">
              <li>Menyediakan makanan dan minuman yang terbaik dengan harga berpatutan.</li>
              <li>Memberikan pengalaman pelanggan yang selesa dan profesional.</li>
              <li>Membangunkan jenama tempatan yang kukuh melalui inovasi dan kualiti.</li>
            </ul>
          </div>
        </section>

        {/* Separator line */}
        <div className="border-t-2 border-[#A0522D] my-8"></div>

        {/* Vision */}
        <section className="flex flex-col md:flex-row items-start space-y-6 md:space-y-0 md:space-x-12 xl:space-x-24">
          <img 
            src="/images/cappuccino.jpg" 
            alt="Vision Icon" 
            className="w-120 h-120 object-cover mx-auto md:mx-0"
          />
          <div className="space-y-4 flex-1 md:pl-12 lg:pl-16">
            <h3 className="text-3xl font-semibold text-cafe-brown text-center w-full mb-7">
              Visi
            </h3>
            <p className="text-lg leading-relaxed">
              Menjadi kafe pilihan utama komuniti dengan hidangan berkualiti tinggi dan layanan mesra.
            </p>
          </div>
        </section>

      </section> 
    </main>
  );
}
