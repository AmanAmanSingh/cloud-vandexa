'use client';


import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import "../../assets/styles/AboutUs.css";
import { motion } from "framer-motion";

const teamImage = "/images/team-image.png";
const brushStroke = "/images/brush-stroke.svg";
const stackedPeakImage = "/images/stacked-peaks.png";

export default function AboutUs() {
  return (
    <section className="about-us relative overflow-hidden py-20 px-6 bg-gradient-to-br from-(--primary-color) to-(--primary-color-dark)">

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent z-0"></div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 relative z-10">

        {/* Left - Text Section */}
        <div className="flex-1 text-section text-(--secondary-text-color)">
          <h2 className="text-4xl font-extrabold mb-6 relative inline-block">
            About Us
            <Image
              src={brushStroke}
              alt="Brush Stroke"
              width={140}
              height={50}
              className="absolute -bottom-3 left-1 opacity-70"
            />
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold mb-4">
            Empowering Digital Transformation with Cloud-Driven Solutions
          </h3>
          <p className="mb-6 text-lg leading-relaxed opacity-90">
            CloudVandexa is a next-generation IT company driving digital
            transformation through innovative and scalable solutions. Since
            2023, we've helped organizations worldwide modernize operations,
            streamline workflows, and harness the power of cloud and enterprise
            technologies.
          </p>

          {/* Stats Highlights */}
          <div className="grid grid-cols-3 gap-6 mb-8">
            <div>
              <p className="text-3xl font-bold text-(--tertiary-color)">40+</p>
              <p className="text-sm opacity-80">Cloud Experts</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-(--tertiary-color)">2023</p>
              <p className="text-sm opacity-80">Founded</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-(--tertiary-color)">Global</p>
              <p className="text-sm opacity-80">Reach</p>
            </div>
          </div>

          <Link
            href="/contact-us"
            className="cta-button inline-flex items-center gap-2 px-6 py-3 rounded shadow-md font-semibold transition"
          >
            Contact Us
            <ArrowUpRight className="w-5 h-5" />
          </Link>
        </div>

        {/* Right - Image Section */}
        <div className="flex-1 flex justify-center about-image-wrapper">
          <div className="floating-image">
            <Image
              src={teamImage}
              alt="CloudVandexa Team"
              width={450}
              height={450}
              className="rounded-xl shadow-xl object-cover ring-4 ring-white/10"
            />
          </div>
        </div>
      </div>

      {/* Decorative Image */}
      <Image
        src={stackedPeakImage}
        alt="Decorative Image"
        height={500}
        width={1000}
        className="absolute bottom-0 right-0 opacity-20"
      />
    </section>
  );
}
