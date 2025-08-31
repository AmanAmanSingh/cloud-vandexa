import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function TravelHero() {
  return (
    <section className="px-4 py-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold tracking-wider mb-6 text-(--primary-color)">
          Elevate Travel and Hospitality Experiences
        </h2>
        <p className="text-base md:text-lg text-(--primary-text-color) tracking-wide">
          Enhance guest satisfaction and boost operational efficiency with
          CloudVandexa’s Salesforce-powered solutions. By leveraging real-time
          data and seamless communication channels, you can deliver personalized
          guest experiences that stand out. Our platform streamlines booking,
          check-in, and service management processes, reducing wait times and
          increasing convenience. Empower your staff with tools for proactive
          service and faster issue resolution, while optimizing resource
          allocation and operational workflows to maximize profitability.
          CloudVandexa helps transform your travel or hospitality business into
          a guest-centric, agile, and competitive leader in the industry.
        </p>
        <Link
          href="/contact-us"
          className="hover:animate-bounce cursor-pointer flex items-center gap-2 w-fit bg-(--tertiary-color) text-(--primary-text-color) px-6 py-3 rounded shadow-md tracking-wider font-semibold text-base"
        >
          <span>Explore Solutions</span>
          <ArrowUpRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  );
}
