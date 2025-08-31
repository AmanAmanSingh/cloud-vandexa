import Image from "next/image";

const whyUsImage = "/images/salesforce-why-us.png";

const points = [
  "Certified Salesforce Consultants",
  "Industry-Specific Expertise",
  "Agile Implementation Methodology",
  "End-to-End Support & Training",
  "Scalable, Future-Proof Solutions",
];

export default function SalesForceWhyUs() {
  return (
    <>
      <section className="bg-(--primary-color) py-10 px-4 min-h-[60vh] flex items-center">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8">
          {/* Text Content */}
          <div className="flex-1 text-(--secondary-text-color)">
            <h2 className="text-2xl md:text-3xl font-extrabold mb-2">
              Why Choose Us?
            </h2>
            <p className="mb-4 text-sm md:text-base">
              What Sets Us Apart in Delivering Salesforce Success
            </p>
            <ul className="list-disc pl-5 space-y-1 text-sm md:text-base">
              {points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
          {/* Image */}
          <div className="flex-1 flex justify-center items-center">
            <Image
              src={whyUsImage}
              alt="Salesforce Team"
              className="shadow-lg "
              width={600}
              height={300}
            />
          </div>
        </div>
      </section>
      <div className="py-16 px-4 text-center max-w-7xl mx-auto">
        <h3 className="font-bold text-3xl lg:text-4xl">
          Our Approach, Your Advantage
        </h3>
        <p className="text-lg mt-2">
          Discover how our proven Salesforce strategies deliver measurable
          impact.
        </p>
      </div>
    </>
  );
}
