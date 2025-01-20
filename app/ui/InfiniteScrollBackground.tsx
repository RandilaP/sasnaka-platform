"use client"
import { motion } from "framer-motion";
import { useRef } from "react";

const SCROLL_DURATION = 40;

const ImageGrid = () => {
  // Replace these with your actual image URLs
  const images = [
    "/bg1.jpeg",
    "/bg2.jpeg",
    "/bg3.jpeg",
    "/bg4.jpeg",
    "/bg5.jpeg",
    "/bg6.jpeg",
    "/bg7.jpeg",
    "/bg8.jpeg",
    "/bg9.jpeg",
    "/bg10.jpeg",
    "/bg11.jpeg",
    "/bg12.jpeg",
  ];

  return (
    <>
      {/* First set of images */}
      {images.map((img, index) => (
        <motion.div
          key={`first-${index}`}
          className="relative aspect-video overflow-hidden rounded-lg"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <img
            src={img}
            alt={`Background ${index + 1}`}
            className="w-full h-full object-cover opacity-20 hover:opacity-40 transition-opacity"
          />
        </motion.div>
      ))}
      {/* Duplicate set for seamless loop */}
      {images.map((img, index) => (
        <motion.div
          key={`second-${index}`}
          className="relative aspect-video overflow-hidden rounded-lg"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <img
            src={img}
            alt={`Background ${index + 1}`}
            className="w-full h-full object-cover opacity-20 hover:opacity-40 transition-opacity"
          />
        </motion.div>
      ))}
    </>
  );
};

const InfiniteScrollBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 w-full h-full overflow-hidden -z-10 bg-[#0098DA]/70"
    >
      <motion.div 
        className="grid grid-cols-4 gap-4 p-4"
        initial={{ y: 0 }}
        animate={{ y: "-50%" }}
        transition={{
          y: {
            duration: SCROLL_DURATION,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          }
        }}
      >
        <ImageGrid />
      </motion.div>
    </div>
  );
};

export default InfiniteScrollBackground;