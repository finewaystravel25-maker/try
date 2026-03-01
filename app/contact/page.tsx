"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa"; 

export default function ContactPage() {
  return (
    <main className="about-page min-h-screen font-body bg-[var(--cafe-cream)]">

      {/* HEADER SECTION */}
      <div className="w-full bg-cafe-brown py-24 text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold tracking-wide"
        >
          Contact Us
        </motion.h1>
      </div>

      {/* GOOGLE MAP + RESERVATION */}
      <section className="px-6 sm:px-10 mt-12">
        <div className="w-full h-80 sm:h-96 md:h-[500px] rounded-xl overflow-hidden shadow-lg mx-auto max-w-5xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.4812398939584!2d103.88942427571202!3d1.4833784611305658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da6ab7ccf070af%3A0x4773d775cab85397!2s26%2C%20Jalan%20Seharum%205%2C%20Taman%20Bukit%20Dahlia%2C%2081700%20Pasir%20Gudang%2C%20Johor%20Darul%20Ta%27zim!5e0!3m2!1sen!2smy!4v1764318417965!5m2!1sen!2smy"
            width="100%"
            height="100%"
            loading="lazy"
            allowFullScreen
            title="Fine Cafe Location"
            className="border-0"
          ></iframe>
        </div>

        {/* RESERVATION BUTTON */}
        <div className="flex justify-center mt-12">
          <a
            href="https://wa.link/xur6xt"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-block px-8 py-3 sm:px-10 sm:py-4 rounded-xl font-heading font-semibold text-xl text-white
              bg-gradient-to-br from-orange-500 to-cafe-brown 
              hover:scale-105 hover:from-cafe-brown hover:to-orange-500 
              transition-transform duration-300 shadow-lg
            "
          >
            Make a Reservation
          </a>
        </div>
      </section>

      {/* GET IN TOUCH SECTION */}
      <div className="text-center mb-10 px-6 mt-20"> 
        <h2 className="text-3xl font-heading font-bold text-cafe-brown">
          Get in Touch
        </h2>

        <p className="text-gray-700 max-w-xl mx-auto mt-2 mb-8">
          Have questions about our menu, services, or location? We're happy to help. Feel free to reach out!
        </p>

      {/* CONTACT ROW */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-4xl mx-auto md:pl-35">
        {/* PHONE */}
        <div className="flex flex-col items-center text-center">
          <Phone className="w-10 h-10 text-cafe-brown mb-3" />
          <h3 className="font-semibold text-lg">Phone</h3>
          <p className="text-gray-700">+60 11 1119 9761</p>
        </div>

        {/* EMAIL */}
        <div className="flex flex-col items-center text-center">
          <Mail className="w-10 h-10 text-cafe-brown mb-3" />
          <h3 className="font-semibold text-lg">Email</h3>
          <p className="text-gray-700">finecafe9@gmail.com</p>
        </div>

        {/* LOCATION */}
        <div className="flex flex-col items-center text-center">
          <MapPin className="w-10 h-10 text-cafe-brown mb-3" />
          <h3 className="font-semibold text-lg">Location</h3>
          <p className="text-gray-700">Taman Bukit Dahlia, Pasir Gudang, Johor</p>
        </div>
      </div>
      </div>

      {/* OPERATING HOURS */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-12 mb-20 px-6"
      >
      <h2 className="text-2xl font-heading font-bold text-cafe-brown mb-4 text-center">
        Operating Hours
      </h2>

      <ul className="text-gray-700 text-base sm:text-lg leading-relaxed text-center space-y-2">
      <li>Monday - Closed</li>
      <li>Tues - 2:30 PM - 11:00 PM</li>
      <li>Wed - 2:30 PM - 11:00 PM</li>
      <li>Thu - 2:30 PM - 11:00 PM</li>
      <li>Fri - 2:30 PM - 11:00 PM</li>
      <li>Sat - 2:30 PM - 11:00 PM</li>
      <li>Sun - 2:30 PM - 11:00 PM</li>
      </ul>
      </motion.div>

      {/* WHATSAPP FLOATING BUTTON */}
      <a
        href="https://wa.link/xur6xt"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center transition-colors duration-300 z-50"
        aria-label="Chat with us on WhatsApp"
      >
        <FaWhatsapp size={28} />
      </a>

    </main>
  );
}
