import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const firstEducationImg = "/images/healthcare-image.jpg"; // Change as needed
const secondEducationImg = "/images/education-hero.jpg"; // Change as needed

export default function TravelContact() {
  return (
    <section className="px-4 py-16">
      <h2 className="text-3xl md:text-5xl font-semibold mb-6 text-(--primary-color) max-w-7xl mx-auto leading-tight">
        Create Memorable Guest Experiences, Actionable Insights, and Sustainable
        Hospitality
      </h2>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Left: Text */}
        <div className="flex-1">
          <p className="mb-6 text-base md:text-lg text-(--primary-text-color)">
            At CloudVandexa, we understand the fast-moving world of travel and
            hospitality. From personalizing guest experiences and optimizing
            bookings to streamlining day-to-day operations, delivering success
            means providing seamless, connected service driven by real-time
            data.
            <br />
            <br />
            With industry-tailored Salesforce solutions, we help you transform
            every touchpoint into a meaningful, memorable journey—enhancing
            guest satisfaction while supporting operational efficiency and
            sustainability.
          </p>
          <Link
            href="/contact-us"
            className="hover:animate-bounce cursor-pointer flex items-center gap-2 w-fit bg-(--tertiary-color) text-(--primary-text-color) px-6 py-3 rounded shadow-md tracking-wider font-semibold text-base"
          >
            <span>Start Your Journey</span>
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

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8  mt-32 md:mt-40 lg:mt-48">
        {/* Left: Image */}
        <div className="flex-1 flex justify-center items-start">
          <Image
            src={firstEducationImg} // Change to your actual image path
            alt="Travel Hospitality Reception"
            width={500}
            height={360}
            className="rounded-md w-full h-full md:w-auto md:h-auto"
            priority
          />
        </div>
        {/* Right: Text */}
        <div className="flex-1 flex flex-col h-full">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-2 text-(--primary-color)">
            Passion Meets Expertise
          </h2>
          <h3 className="text-lg md:text-2xl font-bold mb-4 text-(--primary-color)">
            Revolutionize Your Travel & Hospitality Business with Salesforce
          </h3>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12">
        <p className="mb-4 text-base md:text-lg text-(--primary-text-color)">
          Today’s leading travel and hospitality brands are redefining guest
          expectations by quickly adapting to customer needs and shifting market
          trends—driving loyalty, growth, and long-term success in an
          increasingly competitive global landscape.
        </p>
        <p className="mb-8 text-base md:text-lg text-(--primary-text-color)">
          At <span className="font-bold">CloudVandexa</span>, we combine deep
          industry insight with the power of{" "}
          <span className="font-bold">Salesforce</span> to help you deliver
          personalized experiences, optimize operations, and build future-ready
          strategies.
        </p>
        <Link
          href="/contact-us"
          className="hover:animate-bounce cursor-pointer flex items-center gap-2 w-fit bg-(--tertiary-color) text-(--primary-text-color) px-6 py-3 rounded shadow-md tracking-wider font-semibold text-base"
        >
          <span>Connect with Our Experts</span>
          <ArrowUpRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  );
}
