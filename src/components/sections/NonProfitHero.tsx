import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function NonProfitHero() {
  return (
    <section className="px-4 py-16">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-extrabold mb-6 text-(--primary-color)">
          Empower Your Mission, Amplify Your Impact
        </h1>
        <p className="mb-6 text-base md:text-lg text-(--primary-text-color)">
          Strengthen donor relationships and streamline operations with
          CloudVandexa’s Salesforce solutions designed for nonprofits. Our
          platform provides a 360-degree view of donors, volunteers, and
          beneficiaries, enabling personalized outreach and deeper engagement.
          Automate fundraising efforts, track impact in real time, and generate
          intelligent reports to drive strategic decisions. With centralized
          data and seamless communication, your teams can collaborate more
          effectively. Optimize program delivery and resource allocation to
          maximize your mission's reach. CloudVandexa empowers nonprofits to
          grow sustainably and create lasting change in the communities they
          serve.
        </p>
        <Link
          href="/contact-us"
          className="hover:animate-bounce cursor-pointer flex items-center gap-2 w-fit bg-(--tertiary-color) text-(--primary-text-color) px-6 py-3 rounded shadow-md tracking-wider font-semibold text-base"
        >
          <span>Join the Movement</span>
          <ArrowUpRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  );
}
