import React from 'react'; 
import { motion } from 'framer-motion';
import enInvitation from '../assets/En_invitation.png';
import foodDeliveryPoster from '../assets/FoodDeliveryPosterImg.png';
import marketingPoster from '../assets/marketingposter.png';

const galleryItems = [
  {
    id: 1,
    title: 'Elegant Floral Invitation',
    category: 'Invitation Design',
    image: enInvitation,
    link: 'https://www.behance.net/gallery/245541537/Elegant-Floral-Wedding-Invitation-Design'
  },
  {
    id: 2,
    title: 'Food Delivery Poster',
    category: 'Poster Design',
    image: foodDeliveryPoster,
    link: 'https://www.behance.net/gallery/245539795/Food-Delivery-Promotion-Poster-Design'
  },
  {
    id: 3,
    title: 'Business Marketing Poster',
    category: 'Poster Design',
    image: marketingPoster,
    link: 'https://www.behance.net/gallery/245542205/Business-Marketing-Poster-Design'
  }
];

export function GraphicDesign() {
  return (
    <section id="design" className="py-28 md:py-36 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 text-white">
            Graphic Design
          </h2>
          <p className="text-white text-lg max-w-2xl mx-auto">
            Professional design works showcasing creativity, branding, and print materials.
          </p>
        </motion.div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <motion.a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: '0px 10px 20px rgba(0, 123, 255, 0.25)' // subtle professional blue shadow
              }}
              className="relative w-full rounded-2xl overflow-hidden group cursor-pointer transition-transform duration-500 ease-in-out"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover rounded-2xl"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 translate-y-full group-hover:translate-y-0 transition-all duration-300 flex flex-col justify-end p-6 rounded-2xl">
                <span className="text-xs font-medium text-white/70 mb-2 uppercase tracking-wider">
                  {item.category}
                </span>
                <h3 className="text-xl font-display font-semibold text-white">
                  {item.title}
                </h3>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}