'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Star, ChevronDown } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/pagination';

export default function Home() {
  const heroBg = "/images/wall.jpg";

  const featuredItems = [
    { img: "/images/nasi serai.jpg", title: "Nasi Serai", desc: "Fragrant lemongrass rice served with savoury sides." },
    { img: "/images/bak.png", title: "Bakso Indonesia", desc: "Indonesian meatball soup in rich, flavorful broth." },
    { img: "/images/c1.jpg", title: "Grilled Chicken Chop", desc: "Juicy grilled chicken with fries and vegetables." }
  ];

  const galleryImages = ["/images/cafe.jpg","/images/cappuccino.jpg","/images/barista.png"];

  const testimonials = [
    { stars: 5, review: "Amazing cappuccino and friendly staff! A must-visit.", author: "Jane D." },
    { stars: 5, review: "Best chocolate cake in town! Cozy atmosphere.", author: "Mike R." }
  ];

  return (
    <main className="min-h-screen font-body">
      {/* Hero Section */}
      <motion.section 
        id="hero" 
        className="relative h-[650px] sm:h-[700px] md:h-[750px] flex items-center justify-start overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <video 
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/videos/cafe.mp4" type="video/mp4"/>
        </video>

        <div className="absolute inset-0 bg-gradient-to-br from-black/70 to-black/30"></div>

        <motion.div 
          className="relative z-10 text-left text-white px-6 sm:px-12 md:px-16 max-w-full sm:max-w-4xl py-6 sm:py-8 md:py-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight drop-shadow-lg">
          Good food,<br />
          <span className="block font-accent text-orange-400">Great vibes!</span>
        </h1>

        <p className="font-body text-lg sm:text-xl md:text-2xl font-medium mb-2 drop-shadow">
          Welcome to Fine Cafe. Have a seat.
        </p>

        <p className="font-body text-sm sm:text-base md:text-lg text-gray-100 drop-shadow">
          Hearty meals and delicious drinks served with cozy vibes. We are operating at Taman Bukit Dahlia, Pasir Gudang.
        </p>

        <Link 
          href="/menu" 
          className="inline-block mt-6 px-8 py-3 sm:px-10 sm:py-4 rounded-xl font-heading font-semibold text-xl
          bg-gradient-to-br from-orange-500 to-cafe-brown hover:scale-105 hover:from-cafe-brown hover:to-orange-500 transition-transform duration-300 shadow-lg"
        >
          Explore Menu
        </Link>
        </motion.div>

        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
        <ChevronDown size={32} className="text-white" />
        </motion.div>
      </motion.section>

      {/* Featured Items */}
      <motion.section 
        className="pt-0 pb-20 bg-[var(--cafe-cream)]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="w-full bg-cafe-brown py-12">
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white text-center tracking-wide">
          Our Best Sellers
        </h2>
        </div>

        <div className="container mx-auto px-4 sm:px-6 md:px-12 mt-12 text-center">
          <div className="flex justify-center gap-6 sm:gap-8 md:gap-10 flex-wrap">
            {featuredItems.map((item, idx) => (
              <motion.div key={idx} className="space-y-3 flex flex-col items-center hover:scale-105 transition-transform duration-300">
                <Image
                  src={item.img}
                  width={350}
                  height={210}
                  className="object-cover rounded-xl shadow-lg"
                  alt={item.title}
                />
                <h3 className="font-heading text-cafe-brown text-lg sm:text-xl font-bold">{item.title}</h3>
                <p className="font-body text-cafe-gray text-sm sm:text-base">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

{/* Menu Preview */}
<motion.section
  id="menu-preview"
  className="relative py-20 px-6 flex flex-col items-center justify-center bg-cover bg-center"
  style={{ backgroundImage: `url('${heroBg}')` }}
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 1 }}
  viewport={{ once: true }}
>
  <div className="absolute inset-0 bg-black/40"></div>

  <div className="relative z-10 max-w-6xl text-white">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-100 gap-y-16">
      {[{
        title: "Nasi", img: "/images/geprek.jpg", items: ["Nasi Ayam Penyet","Nasi Goreng Kampung","Nasi Serai"]
      }, {
        title: "Mee", img: "/images/mi.png", items: ["Mee Goreng Mamak ","Kuey Teow Goreng ","Bakso Indonesia "]
      }, {
        title: "Western", img: "/images/bolognese.jpg", items: ["Spaghetti Bolognese ","Spaghetti Carbonara Cheese ","Grilled Chicken Chop "]
      }, {
        title: "Snacks", img: "/images/fri.jpg", items: ["French Fries","Keropok Lekor ","Lempeng Kelapa "]
      }, {
        title: "Desserts", img: "/images/ban.jpg", items: ["Banana Split","Sagu Gula Melaka"]
      }, {
        title: "Beverages", img: "/images/cappuccino.jpg", items: ["Hot Latte","Iced Chocolate","Matcha Strawberry "]
      }].map((cat, idx) => (
        <div key={idx} className="flex items-center gap-6">
          <img src={cat.img} alt={cat.title} className="w-36 h-36 object-cover rounded-lg shadow-lg" />
          <div>
            <h3 className="font-heading text-2xl font-bold mb-2">{cat.title}</h3>
            {cat.items.map((item, i) => (
              <p key={i} className="font-body text-sm opacity-90 mb-3">{item}</p>
            ))}
          </div>
        </div>
      ))}
    </div>

    <div className="flex justify-center mt-12">
      <Link 
        href="/menu" 
        className="inline-block px-8 py-3 sm:px-10 sm:py-4 rounded-xl font-heading font-semibold text-2xl text-white 
        bg-gradient-to-br from-orange-500 to-cafe-brown hover:scale-105 hover:from-cafe-brown hover:to-orange-500 transition-transform duration-300 shadow-lg"
      >
        Menu
      </Link>
      </div>
      </div>
    </motion.section>

      {/* Gallery Carousel */}
      <motion.section
        id="gallery"
        className="py-0 px-0 bg-[var(--cafe-cream)]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="w-full bg-cafe-brown py-6 sm:py-10">
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white text-center tracking-wide">
          A Glimpse Inside
        </h2>
        </div>

        <div className="container mx-auto text-center px-4 sm:px-6 md:px-12 py-8 sm:py-12">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{ delay: 4000 }}
            pagination={{ clickable: true }}
            className="max-w-full sm:max-w-5xl mx-auto rounded-xl overflow-hidden shadow-xl"
          >
            {galleryImages.map((img, i) => (
              <SwiperSlide key={i} className="bg-transparent">
                <Image
                  src={img}
                  width={800}
                  height={500}
                  alt="Gallery image"
                  className="w-full h-96 sm:h-[400px] md:h-[500px] object-cover rounded-xl hover:scale-105 transition-transform duration-300 shadow-lg"
                  priority
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </motion.section>

      {/* Location + Testimonials */}
      <motion.section
        id="location-testimonials"
        className="relative py-16 sm:py-20 px-4 sm:px-6 md:px-12 bg-cover bg-center"
        style={{ backgroundImage: `url('${heroBg}')` }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 max-w-7xl mx-auto text-center text-white">
          
      {/* Location */}
        <div className="mb-16">
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          Our Location
        </h2>

        <p className="font-body mb-8 text-sm sm:text-base md:text-lg">
          Find us at Taman Bukit Dahlia, Pasir Gudang. We can’t wait to welcome you!
        </p>
          <div className="w-full h-80 sm:h-96 md:h-[500px] rounded-xl overflow-hidden shadow-lg mx-auto max-w-4xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.4812398939584!2d103.88942427571202!3d1.4833784611305658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da6ab7ccf070af%3A0x4773d775cab85397!2s26%2C%20Jalan%20Seharum%205%2C%20Taman%20Bukit%20Dahlia%2C%2081700%20Pasir%20Gudang%2C%20Johor%20Darul%20Ta%27zim!5e0!3m2!1sen!2smy!4v1764318417965!5m2!1sen!2smy"
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="border-0"
              title="Google Map showing Fine Cafe location at Jalan Seharum 5, Taman Bukit Dahlia"
            ></iframe>
          </div>
          </div>

      {/* Testimonials */}
        <div className="py-16 sm:py-20">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-4xl font-bold mb-8 sm:mb-12">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-10 max-w-5xl mx-auto">
            {testimonials.map((item, idx) => (
              <div key={idx} className="p-4 sm:p-6 bg-white/90 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <div className="flex justify-center mb-2">
                  {[...Array(item.stars)].map((_, i) => (
                    <Star key={i} size={20} className="text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="font-body mb-2 text-gray-800 font-medium">"{item.review}"</p>
                  <p className="font-body font-semibold text-gray-700">- {item.author}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>
    </main>
  );
}
