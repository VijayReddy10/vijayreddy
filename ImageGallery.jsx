import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';

const galleryItems = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600",
    title: "Coding & Development",
    category: "Passion",
    size: "large",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600",
    title: "AI & Machine Learning",
    category: "Interest",
    size: "medium",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600",
    title: "Team Collaboration",
    category: "Achievement",
    size: "medium",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600",
    title: "Problem Solving",
    category: "Skill",
    size: "small",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=600",
    title: "Web Design",
    category: "Hobby",
    size: "small",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600",
    title: "Technology Innovation",
    category: "Inspiration",
    size: "large",
  },
];

export default function ImageGallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [hoveredId, setHoveredId] = useState(null);

  const getSizeClasses = (size) => {
    switch (size) {
      case 'large':
        return 'col-span-2 row-span-2';
      case 'medium':
        return 'col-span-1 row-span-2';
      default:
        return 'col-span-1 row-span-1';
    }
  };

  return (
    <>
      {/* Masonry Gallery Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
        {galleryItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className={`relative overflow-hidden rounded-2xl cursor-pointer group ${getSizeClasses(item.size)}`}
            onMouseEnter={() => setHoveredId(item.id)}
            onMouseLeave={() => setHoveredId(null)}
            onClick={() => setSelectedImage(item)}
          >
            {/* Image */}
            <motion.img
              src={item.src}
              alt={item.title}
              className="w-full h-full object-cover"
              animate={{
                scale: hoveredId === item.id ? 1.1 : 1,
              }}
              transition={{ duration: 0.4 }}
            />
            
            {/* Overlay */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: hoveredId === item.id ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            />
            
            {/* Content */}
            <motion.div
              className="absolute bottom-0 left-0 right-0 p-4"
              initial={{ y: 20, opacity: 0 }}
              animate={{ 
                y: hoveredId === item.id ? 0 : 20, 
                opacity: hoveredId === item.id ? 1 : 0 
              }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-emerald-400 text-sm font-medium">{item.category}</span>
              <h3 className="text-white text-lg font-bold mt-1">{item.title}</h3>
            </motion.div>
            
            {/* Zoom Icon */}
            <motion.div
              className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: hoveredId === item.id ? 1 : 0, 
                opacity: hoveredId === item.id ? 1 : 0 
              }}
              transition={{ duration: 0.3 }}
            >
              <ZoomIn className="w-5 h-5 text-white" />
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/95 backdrop-blur-sm p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[80vh] object-contain rounded-2xl"
              />
              
              <div className="mt-4 text-center">
                <span className="text-emerald-400 text-sm font-medium">{selectedImage.category}</span>
                <h3 className="text-white text-2xl font-bold mt-1">{selectedImage.title}</h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
