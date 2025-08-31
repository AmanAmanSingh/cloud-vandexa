import Image from "next/image";

const resourceAugImg = "/images/resourceAugmentation2.png";

// Data for "Why Choose Us" and "What We Offer"
const whyChooseUs = [
  {
    label: "Fast Deployment",
    desc: "Get experts onboarded in days, not weeks",
  },
  { label: "Scalable Model", desc: "Ramp up or down as your project evolves" },
  {
    label: "Certified Talent",
    desc: "Vetted professionals with domain expertise",
  },
  {
    label: "Cost-Effective",
    desc: "No recruitment, training, or infra overhead",
  },
  { label: "Secure Engagements", desc: "Full IP protection and NDA-backed" },
];

const whatWeOffer = [
  ...whyChooseUs,
  { label: "Flexible contracts", desc: "(hourly, monthly, project-based)" },
  { label: "Seamless team integration", desc: "rapid delivery" },
  { label: "Onsite or remote professionals", desc: "as per your needs" },
];

const salesforceRoles = [
  "Developers (Apex, LWC), Admins, Architects",
  "Cloud Consultants (Sales, Service, Marketing)",
  "CPQ, Revenue Cloud, Integration Specialists",
];

const moreTech = [
  {
    label: "ServiceNow",
    desc: "ITSM/ITOM setup, custom workflows, integrations",
  },
  {
    label: "AWS",
    desc: "Cloud migration, CI/CD, compliance & security",
  },
  {
    label: "Java",
    desc: "Full-stack apps, APIs, microservices & modernization",
  },
];

export default function ResourceAugmentationOfferings() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* --- Section 1: Why Choose Us & What We Offer --- */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-(--primary-color)">
            Why Choose Us
          </h2>
          <ul className="pl-4 mb-8 space-y-2 text-(--primary-text-color)">
            {whyChooseUs.map((item) => (
              <li key={item.label}>
                <span className="h-2 w-2 rounded-full bg-black mr-8  ml-6 inline-block"></span>
                <span className="font-bold">{item.label}</span> – {item.desc}
              </li>
            ))}
          </ul>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-(--primary-color)">
            What We Offer
          </h2>
          <ul className="pl-4 mb-8 space-y-2 text-(--primary-text-color)">
            {whatWeOffer.map((item) => (
              <li key={item.label}>
                <span className="h-2 w-2 rounded-full bg-black mr-8  ml-6 inline-block"></span>
                <span className="font-bold">{item.label}</span>
                {item.desc && <> – {item.desc}</>}
              </li>
            ))}
          </ul>
        </div>

        {/* --- Section 2: Deep Salesforce Expertise --- */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-(--primary-color)">
            Deep Salesforce Expertise
          </h2>
          <p className="mb-4 text-base md:text-lg text-(--primary-text-color)">
            Our certified Salesforce professionals cover the entire ecosystem —
            from <span className="font-bold">Sales Cloud</span> and{" "}
            <span className="font-bold">Service Cloud</span> to{" "}
            <span className="font-bold">CPQ</span>,{" "}
            <span className="font-bold">Marketing Cloud</span>, and{" "}
            <span className="font-bold">Experience Cloud</span>. Whether it’s
            building custom apps with Apex and LWC, migrating to Lightning, or
            integrating third-party platforms using MuleSoft — we provide{" "}
            <span className="font-bold">plug-and-play experts</span> who deliver
            with precision.
          </p>
          <div className="font-bold mb-2 mt-14">Key Roles We Offer:</div>
          <ul className="pl-4 space-y-3 text-(--primary-text-color)">
            {salesforceRoles.map((role) => (
              <li key={role}>
                <span className="h-2 w-2 rounded-full bg-black mr-8  ml-6 inline-block"></span>
                <span>{role}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* --- Section 3: More Than Just Salesforce --- */}
        <div className="flex flex-col md:flex-row items-start gap-10">
          {/* Left: Text */}
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-bold my-4 text-(--primary-color)">
              More Than Just Salesforce
            </h2>
            <p className="mb-4 mt-8 text-base md:text-lg text-(--primary-text-color)">
              Beyond Salesforce, we provide{" "}
              <span className="font-bold">top-tier talent</span> across{" "}
              <span className="font-bold">ServiceNow, AWS</span>, and{" "}
              <span className="font-bold">Java ecosystems</span>. Whether you're
              setting up IT workflows, deploying serverless architecture, or
              modernizing legacy applications — we’ve got the{" "}
              <span className="font-bold">
                right skill set, right when you need it
              </span>
              .
            </p>
          </div>
          {/* Right: Image */}
          <div className="flex-1 flex justify-center items-center">
            <Image
              src={resourceAugImg}
              alt="ServiceNow AWS Java"
              width={500}
              height={360}
              className="rounded-md object-cover"
              priority
            />
          </div>
        </div>
        <div className="font-bold mb-2 -mt-8">
          Key Technologies &amp; Use Cases:
        </div>
        <ul className="pl-4 space-y-3 text-(--primary-text-color)">
          {moreTech.map((item) => (
            <li key={item.label}>
              <span className="h-2 w-2 rounded-full bg-black mr-8  ml-6 inline-block"></span>
              <span className="font-bold">{item.label}</span> – {item.desc}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
