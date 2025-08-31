import Image from "next/image";

const whyUsPoints = [
  "10+ Years of Industry Experience",
  "Certified Experts Across Cloud and Enterprise Platforms",
  "Agile & Scalable Delivery Models",
  "Client-Centric Engagement Approach",
  "Commitment to Innovation and Quality",
];

const stackedPeakImage = "/images/stacked-peaks.png";

export default function WhyUs() {
  return (
    <section className="bg-(--primary-color) text-(--secondary-text-color) py-16 px-4 relative z-0">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-wider  mb-4">
          Global Reach
        </h2>
        <p className="text-lg  tracking-wide mb-8">
          Headquartered in <span className="font-bold">Noida, India</span>,
          CloudVandexa proudly serves clients across the{" "}
          <span className="font-bold">USA, UK</span>, and other international
          markets. Our global delivery model ensures seamless collaboration,
          timely execution, and 24/7 support — wherever you are.
        </p>

        <h3 className="text-2xl md:text-3xl font-semibold tracking-wide mb-6">
          Why Choose CloudVandexa?
        </h3>
        <ul className="space-y-5 mb-8">
          {whyUsPoints.map((point, idx) => (
            <li className="flex items-center gap-3" key={idx+1}>
              <span className="mt-1 w-3 h-3 rounded-full bg-(--secondary-color) inline-block"></span>
              <span className="text-lg tracking-wider">
                {point}
              </span>
            </li>
          ))}
        </ul>
        <p className="text-lg text-(--secondary-text-color)">
          We don’t just deliver technology — we deliver outcomes that matter.
        </p>
      </div>
      <div className="w-full h-full pointer-events-none">
              <Image
                src={stackedPeakImage}
                alt="Decorative Image"
                height={500}
                width={1000}
                className="absolute bottom-0 right-0 rotate-z-180 rotate-x-180"
              />
      </div>
    </section>
  );
}
