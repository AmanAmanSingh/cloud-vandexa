import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const firstEducationImg = "/images/healthcare-image.jpg"; // Change as needed
const secondEducationImg = "/images/education-hero.jpg"; // Change as needed

export default function EducationContact() {
  return (
    <section className="px-4 py-16">
      <h2 className="text-3xl md:text-5xl font-semibold mb-6 text-(--primary-color) max-w-7xl mx-auto leading-tight">
        Create Personalized Learning
        <br /> Journeys, Actionable Insights, and a<br /> Future-Ready Campus
      </h2>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Left: Text */}
        <div className="flex-1">
          <p className="mb-6 text-base md:text-lg text-(--primary-text-color)">
            At CloudVandexa, we help educational institutions stay ahead in a
            rapidly evolving landscape. From K–12 to higher education, our
            AI-powered, Salesforce-enabled solutions support student
            recruitment, engagement, alumni relations, and academic operations.
            With deep expertise in HEDA, we enable smarter decisions,
            streamlined operations, and meaningful connections across the
            student lifecycle.
          </p>
          <Link
            href="/contact-us"
            className="hover:animate-bounce cursor-pointer flex items-center gap-2 w-fit bg-(--tertiary-color) text-(--primary-text-color) px-6 py-3 rounded shadow-md tracking-wider font-semibold text-base"
          >
            <span>Talk to an Education Specialist</span>
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
      <h1 className="max-w-7xl mx-auto text-3xl md:text-5xl font-extrabold mb-12 text-(--primary-color) mt-32 md:mt-40 lg:mt-48">
        We Know What Education Needs
      </h1>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 mt-10">
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
            Modernize Your Institution with Salesforce for Education
          </h2>
          <p className="mb-12 text-base md:text-lg text-(--primary-text-color)">
            Future-ready institutions are up to 3x more effective in adapting to
            student needs and changing education models — setting new standards
            in learning and leadership.
          </p>
          <Link
            href="/contact-us"
            className="hover:animate-bounce cursor-pointer flex items-center gap-2 w-fit bg-(--tertiary-color) text-(--primary-text-color) px-6 py-3 rounded shadow-md tracking-wider font-semibold text-base"
          >
            <span>Get Started Today</span>
            <ArrowUpRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
