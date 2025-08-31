'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const heroImg = '/images/career.jpg';

export default function Hero() {
  return (
    <section className="py-8 md:py-20 bg-white px-4">
      <div className="max-w-7xl mx-auto flex flex-wrap lg:flex-nowrap gap-10 items-center text-(--primary-color)">
        <motion.div
          className="w-full h-fit"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          // viewport={{ once: true }}
          viewport={{ amount: 0.2 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Welcome to CloudVandexa
          </h1>
          <p className="mt-6 text-sm md:text-lg tracking-wide">
            At CloudVandexa, we’re one of the fastest-growing consulting firms
            helping businesses unlock the full potential of platforms like
            Salesforce, AWS, Google Cloud, Azure, ServiceNow, and more. With
            deep technical expertise and precision execution, we deliver
            high-impact solutions that drive growth, streamline operations, and
            future-proof your business—every step of the way.
          </p>
        </motion.div>

        <motion.div
          className="w-full h-80 relative"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          viewport={{ amount: 0.2 }}
        >
          <Image
            src={heroImg}
            alt="CloudVandexa"
            fill
            className="object-cover rounded-xl shadow-md"
          />
        </motion.div>
      </div>
    </section>
  );
}
