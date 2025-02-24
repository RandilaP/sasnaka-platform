"use client";
import InfiniteScrollBackground from "./ui/InfiniteScrollBackground";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

const fadeInUp = {
  initial: { y: 30, opacity: 0 },
  animate: { y: 0, opacity: 1 },
};

const contentAnimation = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
};

export default function Home() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <InfiniteScrollBackground />

      {/* Main content */}
      <motion.main
        initial="initial"
        animate="animate"
        className="relative z-10 container mx-auto px-4 py-8 w-2/3"
      >
        <motion.div
          variants={contentAnimation}
          transition={{ duration: 0.5 }}
          className="bg-white/80 backdrop-blur-sm rounded-lg p-8 flex flex-col items-center text-center space-y-4"
        >
          <motion.h1
            variants={fadeInUp}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl font-bold mb-2"
          >
            Join Hands to Transform Lives
          </motion.h1>

          <motion.h2
            variants={fadeInUp}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-md font-semibold mb-2"
          >
            Be the Change You Want to See in the World
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-sm"
          >
            Over 20+ years, Sasnaka Sansada has been a leading youth
            organization in Sri Lanka, contributing to society through impactful
            projects led by talented and dedicated members. Our mission is to
            nurture skills, foster growth, and create lasting value for
            individuals and communities alike. Join us in continuing this
            journey of transformation and make a difference in the world
          </motion.p>

          <motion.div
            variants={fadeInUp}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/dashboard">
                <Button className="mt-4">Join Us</Button>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.main>
    </div>
  );
}
