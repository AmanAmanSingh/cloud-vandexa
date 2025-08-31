import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const firstImg = "/images/healthcare-image.jpg"; // Change as needed
const secondImg = "/images/healthcare-image.jpg"; // Change as needed

export default function NonProfitContact() {
  return (
    <section className="px-4 py-16">
      {/* Section 1 */}
      <h2 className="max-w-7xl mx-auto text-3xl lg:text-4xl font-extrabold text-(--primary-color) mb-12">
        Build Meaningful Connections, Unlock Powerful Insights, and Create
        Lasting Impact
      </h2>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-center gap-8">
        {/* Image Right */}
        <div className="flex-1 flex justify-center items-center">
          <Image
            src={firstImg}
            alt="Nonprofit Volunteers Donations"
            width={500}
            height={360}
            className="rounded-md w-full h-full md:w-auto md:h-auto  md:-mt-10 lg:-mt-12"
            priority
          />
        </div>
        {/* Text Left */}
        <div className="flex-1">
          <p className="mb-4 text-base md:text-lg text-(--primary-text-color)">
            At <span className="font-bold">CloudVandexa</span>, we understand
            the passion, purpose, and challenges that drive nonprofit
            organizations. Whether you're engaging supporters, managing
            programs, or tracking impact, your mission deserves technology that
            amplifies your efforts.
          </p>
          <p className="mb-6 text-base md:text-lg text-(--primary-text-color)">
            With tailored{" "}
            <span className="font-bold">Salesforce solutions</span>, we help you
            connect more deeply, operate more efficiently, and grow your
            impact—so you can focus on making a difference where it matters
            most.
          </p>
          <Link
            href="/contact-us"
            className="hover:animate-bounce cursor-pointer flex items-center gap-2 w-fit bg-(--tertiary-color) text-(--primary-text-color) px-6 py-3 rounded shadow-md tracking-wider font-semibold text-base"
          >
            <span>Let's Talk Impact</span>
            <ArrowUpRight className="w-5 h-5" />
          </Link>
        </div>
      </div>

      {/* Section 2 */}
      <h2 className="max-w-7xl mx-auto text-3xl lg:text-4xl font-extrabold mb-12 mt-24 md:mt-32 lg:mt-40 text-(--primary-color)">
        Together, We Make Change Possible
      </h2>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 mb-16">
        {/* Image Left */}
        <div className="flex-1 flex justify-center items-center">
          <Image
            src={secondImg}
            alt="Nonprofit Volunteers Planting"
            width={500}
            height={360}
            className="rounded-md w-full h-full md:w-auto md:h-auto"
            priority
          />
        </div>
        {/* Text Right */}
        <div className="flex-1">
          <h2 className="text-lg md:text-xl font-bold mb-2 text-(--primary-color)">
            Transform Your Nonprofit with{" "}
            <span className="font-extrabold">Smart Salesforce Solutions</span>
          </h2>
          <p className="mb-4 text-base md:text-lg text-(--primary-text-color)">
            Mission-driven organizations that embrace innovation adapt more
            effectively to community needs and expand their reach—building
            stronger, more resilient futures.
          </p>
          <p className="mb-6 text-base md:text-lg text-(--primary-text-color)">
            At <span className="font-bold">CloudVandexa</span>, we partner with
            you to leverage <span className="font-bold">Salesforce</span>{" "}
            technology that empowers your mission, drives engagement, and
            maximizes impact.
          </p>
          <Link
            href="/contact-us"
            className="hover:animate-bounce cursor-pointer flex items-center gap-2 w-fit bg-(--tertiary-color) text-(--primary-text-color) px-6 py-3 rounded shadow-md tracking-wider font-semibold text-base"
          >
            <span>Start Your Journey</span>
            <ArrowUpRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
