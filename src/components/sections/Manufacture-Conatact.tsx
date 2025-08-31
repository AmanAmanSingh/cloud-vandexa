import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const firstManufactureImg = "/images/healthcare-image.jpg"; // Change as needed
const secondManufactureImg = "/images/healthcare-image.jpg"; // Change as needed

export default function ManufactureContact() {
  return (
    <section className="px-4 py-16">
      <h2 className="text-3xl md:text-4xl lg:text-5xl max-w-7xl mx-auto font-semibold mb-4 text-(--primary-color) leading-tight">
        Enable Effortless Customer <br /> Journeys, Real-Time Insights, and a
        <br />
        Greener Future.
      </h2>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-4">
        {/* Left: Text */}
        <div className="flex-1">
          <p className="mb-6 text-base md:text-lg text-(--primary-text-color)">
            At CloudVandexa, we recognize the distinct demands and opportunities
            within the manufacturing, automotive, and energy sectors. Thriving
            in these industries means embracing digital transformation,
            streamlining operations, and harnessing real-time data. That's why
            we're here — to power your growth with smart solutions built for
            your world.
          </p>
          <Link
            href="/contact-us"
            className="hover:animate-bounce cursor-pointer flex items-center gap-2 w-fit bg-(--tertiary-color) text-(--primary-text-color) px-6 py-3 rounded shadow-md tracking-wider font-medium text-base"
          >
            <span>Contact Us</span>
            <ArrowUpRight className="w-5 h-5" />
          </Link>
        </div>
        {/* Right: Image */}
        <div className="flex-1 flex justify-center items-start">
          <Image
            src={firstManufactureImg}
            alt="Manufacturing"
            width={500}
            height={360}
            className="rounded-md w-full h-full md:w-auto md:h-auto  md:-mt-10 lg:-mt-12"
            priority
          />
        </div>
      </div>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:gap-10 mt-32 md:mt-40 lg:mt-48">
        {/* Left: Image */}
        <div className="flex-1 flex justify-center items-start">
          <Image
            src={firstManufactureImg}
            alt="Manufacturing"
            width={500}
            height={360}
            className="rounded-md w-full h-full hidden md:block md:w-auto md:h-auto"
            priority
          />
        </div>
        {/* Right: Text */}
        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-4 text-(--primary-color)">
            We Understand Future-Proof Your Manufacturing Business with the
            Power of Salesforce
          </h2>
          <p className="mb-6 text-base md:text-lg text-(--primary-text-color)">
            Future-ready manufacturers are up to 3x more agile in responding to
            market disruptions.{" "}
          </p>
        </div>
      </div>
    </section>
  );
}
