import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const firstEducationImg = "/images/healthcare-image.jpg"; // Change as needed
const secondEducationImg = "/images/education-hero.jpg"; // Change as needed

export default function HealthContact() {
  return (
    <section className="px-4 py-16">
      <h2 className="text-3xl md:text-5xl font-semibold mb-6 text-(--primary-color) max-w-7xl mx-auto leading-tight">
        Deliver Personalized Care, Real-Time
        <br /> Insights, and Smarter Health
        <br />
        Outcomes
      </h2>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Left: Text */}
        <div className="flex-1">
          <p className="mb-6 text-base md:text-lg text-(--primary-text-color)">
            At CloudVandexa, we understand the complex challenges and high
            stakes of the healthcare and pharmaceutical industries. Whether
            you're managing patient journeys, accelerating research, or ensuring
            regulatory compliance, you need intelligent systems that are secure,
            integrated, and adaptable.
            <br />
            <br />
            Our Salesforce-powered solutions are designed to help you drive
            better health outcomes, faster innovation, and more connected
            experiences—so you can focus on what matters most: improving lives.
          </p>
          <Link
            href="/contact-us"
            className="hover:animate-bounce cursor-pointer flex items-center gap-2 w-fit bg-(--tertiary-color) text-(--primary-text-color) px-6 py-3 rounded shadow-md tracking-wider font-semibold text-base"
          >
            <span>Book a Strategy Session</span>
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
          <h2 className="text-xl md:text-4xl font-bold mb-12 text-(--primary-color)">
            We Understand Healthcare’s Urgency
          </h2>
          <p className="mb-12 text-base md:text-lg text-(--primary-text-color)">
            Reimagine Patient and Provider Experiences with Salesforce for
            Health & Pharma
            <br />
            Future-ready healthcare and pharma leaders are up to 3x more
            responsive to change—delivering better care, faster research
            outcomes, and improved trust across every touchpoint.
          </p>
        </div>
      </div>
    </section>
  );
}
