"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectCoverflow } from "swiper/modules";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const reviews = [
  {
    name: "John Smith",
    company: "TechStart Inc",
    text: "NovaTech transformed our online presence completely. The team's expertise in web development exceeded our expectations. Their attention to detail and commitment to deadlines was impressive.",
    rating: 5,
    image: "👨‍💼",
    role: "CEO",
  },
  {
    name: "Emily Davis",
    company: "Creative Studio",
    text: "The video editing work was phenomenal. They captured our brand perfectly and delivered ahead of schedule. The quality of work is outstanding and we've seen amazing engagement on our content.",
    rating: 5,
    image: "👩‍🎨",
    role: "Creative Director",
  },
  {
    name: "Michael Brown",
    company: "Growth Marketing",
    text: "Marketing strategies implemented by NovaTech doubled our conversion rates within 3 months. Their data-driven approach and creative execution made all the difference.",
    rating: 5,
    image: "👨‍💻",
    role: "Marketing Head",
  },
  {
    name: "Jessica Wilson",
    company: "Design Co",
    text: "Graphic design work is outstanding. Professional, creative, and great attention to detail. They understood our vision perfectly and delivered beyond expectations.",
    rating: 5,
    image: "👩‍💻",
    role: "Design Lead",
  },
  {
    name: "David Lee",
    company: "Ecom Brands",
    text: "The web development team built us a stunning e-commerce platform. Fast, secure, and user-friendly. Our sales increased by 150% within the first month.",
    rating: 5,
    image: "👨‍💼",
    role: "Founder",
  },
];

export default function ReviewsSlider() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-24 px-4 md:px-8 bg-gradient-to-b from-black to-purple-950/20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-600 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Client Testimonials
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            What our clients say about working with us
          </p>
        </motion.div>

        <Swiper
          modules={[Autoplay, Pagination, EffectCoverflow]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={1}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
              coverflowEffect: {
                rotate: 30,
                stretch: 0,
                depth: 80,
                modifier: 1,
                slideShadows: true,
              },
            },
            1024: {
              slidesPerView: 3,
              coverflowEffect: {
                rotate: 20,
                stretch: 0,
                depth: 60,
                modifier: 1,
                slideShadows: true,
              },
            },
          }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true, dynamicBullets: true }}
          loop={true}
          className="pb-16"
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <motion.div
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 h-full border border-white/20 shadow-2xl"
              >
                {/* Quote icon */}
                <FaQuoteLeft className="text-purple-400 text-3xl mb-6 opacity-60" />
                
                {/* Rating stars */}
                <div className="flex mb-4 gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 text-lg" />
                  ))}
                </div>
                
                {/* Review text */}
                <p className="text-gray-200 text-lg mb-6 leading-relaxed">
                  "{review.text}"
                </p>
                
                {/* Client info */}
                <div className="flex items-center gap-4 mt-auto pt-4 border-t border-white/20">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-2xl">
                    {review.image}
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg">{review.name}</h4>
                    <p className="text-purple-400 text-sm">{review.role}</p>
                    <p className="text-gray-400 text-xs">{review.company}</p>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}