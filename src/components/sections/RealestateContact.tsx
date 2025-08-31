import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const firstEducationImg = "/images/healthcare-image.jpg"; // Change as needed
const secondEducationImg = "/images/education-hero.jpg"; // Change as needed

export default function RealEstateContact() {
  return (
    <section className="px-4 py-16">
      <h2 className="text-3xl md:text-5xl font-semibold mb-6 text-(--primary-color) max-w-7xl mx-auto leading-tight">
        Deliver Tailored Experiences,
        <br /> Smarter Decisions, and Sustainable
        <br /> Property Growth
      </h2>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Left: Text */}
        <div className="flex-1">
          <p className="mb-6 text-base md:text-lg text-(--primary-text-color)">
            At CloudVandexa, we understand the dynamic challenges and evolving
            demands of the real estate industry. From managing listings and
            nurturing leads to optimizing operations, success today requires
            agility, intelligent automation, and real-time insights.
            <br />
            <br />
            Our AI-driven, Salesforce-powered solutions are built to help you
            stay ahead—streamlining processes, enhancing customer experiences,
            and driving sustainable growth. Whether you're in residential,
            commercial, or property management, we tailor our strategies to fit
            your business and fuel long-term success.
          </p>
          <Link
            href="/contact-us"
            className="hover:animate-bounce cursor-pointer flex items-center gap-2 w-fit bg-(--tertiary-color) text-(--primary-text-color) px-6 py-3 rounded shadow-md tracking-wider font-semibold text-base"
          >
            <span>Book a Free Consultation</span>
            <ArrowUpRight className="w-5 h-5" />
          </Link>
        </div>
        {/* Right: Image */}
        <div className="flex-1 flex justify-center items-start">
          <Image
            src={firstEducationImg}
            alt="Education"
            width={500}
            height={360}
            className="rounded-md w-full h-full md:w-auto md:h-auto  md:-mt-10 lg:-mt-12"
            priority
          />
        </div>
      </div>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 mt-32 md:mt-40 lg:mt-48">
        {/* Left: Image */}
        <div className="flex-1 flex justify-center items-start">
          <Image
            src={firstEducationImg}
            alt="Manufacturing"
            width={500}
            height={360}
            className="rounded-md w-full h-full md:w-auto md:h-auto"
            priority
          />
        </div>
        {/* Right: Text */}
        <div className="flex-1 flex flex-col h-full">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-(--primary-color)">
            Your Vision, Our Expertise
          </h2>
          <p className="mb-12 text-base md:text-lg text-(--primary-text-color)">
            Transform Your Real Estate Operations with Intelligent Salesforce
            Solutions
            <br />
            <br />
            Forward-thinking real estate firms are up to 3x more responsive to
            market trends and client demands—giving them a powerful edge in a
            competitive landscape.
          </p>
          <Link
            href="/contact-us"
            className="hover:animate-bounce cursor-pointer flex items-center gap-2 w-fit bg-(--tertiary-color) text-(--primary-text-color) px-6 py-3 rounded shadow-md tracking-wider font-semibold text-base"
          >
            <span>Start the Conversation</span>
            <ArrowUpRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
