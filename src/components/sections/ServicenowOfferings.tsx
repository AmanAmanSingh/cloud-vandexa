const servicenowOfferings = [
  {
    title: "IT Service Management (ITSM)",
    description:
      "Modernize IT support with automated workflows, self-service, and faster issue resolution.",
  },
  {
    title: "IT Operations Management (ITOM)",
    description:
      "Enhance visibility and prevent outages with predictive monitoring and automation.",
  },
  {
    title: "IT Asset Management (ITAM)",
    description:
      "Track and optimize IT assets to reduce costs and improve compliance.",
  },
  {
    title: "HR Service Delivery (HRSD)",
    description:
      "Create seamless employee experiences from onboarding to support.",
  },
  {
    title: "Customer Service Management (CSM)",
    description:
      "Deliver proactive, personalized customer support across channels.",
  },
  {
    title: "Security Operations (SecOps)",
    description: "Respond to threats faster with automated security workflows.",
  },
  {
    title: "Governance, Risk & Compliance (GRC)",
    description: "Embed risk management and ensure regulatory compliance.",
  },
  {
    title: "Strategic Portfolio Management (SPM)",
    description: "Align projects with business strategy and maximize ROI.",
  },
  {
    title: "App Development & Integration",
    description:
      "Build custom apps and connect ServiceNow with your existing tools.",
  },
];

const whyChooseUs = [
  "Certified ServiceNow Consultants",
  "Industry-Specific Expertise",
  "Scalable, Agile Delivery",
  "End-to-End Support & Optimization",
];

export default function ServicenowOfferings() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Offerings */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-8 text-(--primary-color)">
          Our Core ServiceNow Offerings
        </h2>
        <ul className="space-y-6 mb-16">
          {servicenowOfferings.map((item) => (
            <li key={item.title} className="flex flex-col gap-1">
              <div className="flex items-center gap-4">
                <span className="text-blue-500 text-lg">◆</span>
                <span className="font-bold text-lg">{item.title}</span>
              </div>
              <p className="pl-7">{item.description}</p>
            </li>
          ))}
        </ul>

        {/* Why Choose Us */}
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-(--primary-color)">
          Why Choose Us?
        </h3>
        <ul className="pl-6 mb-16 space-y-3 text-(--primary-text-color)">
          {whyChooseUs.map((point) => (
            <li key={point}>
              <span className="h-2 w-2 rounded-full bg-black mr-8 inline-block"></span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
