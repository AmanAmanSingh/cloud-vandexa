const expertise = [
  {
    title: "Agentforce",
    subtitle: "Empower Your Contact Center with AI and Automation",
    description:
      "Deliver smarter, faster service with Agentforce – a complete solution that enhances agent productivity, automates routine tasks, and creates seamless omnichannel experiences.",
  },
  {
    title: "Sales Cloud",
    subtitle: "Accelerate Growth with Smarter Selling",
    description:
      "Streamline your sales process, gain real-time insights, and close deals faster. Our Sales Cloud services help you boost pipeline visibility, improve forecasting, and drive revenue.",
  },
  {
    title: "Service Cloud",
    subtitle: "Deliver Exceptional Customer Support",
    description:
      "Elevate your customer service operations with intelligent case management, AI-powered chatbots, and self-service portals – all customized to your business needs.",
  },
  {
    title: "Marketing Cloud",
    subtitle: "Personalized Engagement at Scale",
    description:
      "Craft meaningful customer journeys across email, mobile, web, and social. Our Marketing Cloud solutions help you deliver the right message, at the right time, on the right channel.",
  },
  {
    title: "Data Cloud",
    subtitle: "Turn Data into Actionable Intelligence",
    description:
      "Unify and activate your customer data in real time. With Data Cloud, we help you harness powerful customer insights to drive personalization and boost business performance.",
  },
  {
    title: "Health Cloud",
    subtitle: "Reimagine Healthcare Experiences",
    description:
      "Enhance patient engagement, streamline care coordination, and ensure data security with our tailored Health Cloud implementations for providers, payers, and life sciences.",
  },
  {
    title: "Revenue Cloud",
    subtitle: "Quote to Cash Made Simple",
    description:
      "Optimize your revenue lifecycle – from CPQ (Configure, Price, Quote) to billing and subscriptions. We enable scalable, compliant solutions that drive profitability.",
  },
  {
    title: "Education Cloud",
    subtitle: "Transform Learning Experiences",
    description:
      "Empower institutions to better engage with students, alumni, and faculty. Our Education Cloud solutions support the entire student lifecycle – from recruitment to career services.",
  },
];

export default function SalesforceExpertise() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-(--primary-color) mb-10">
          Our Salesforce Expertise Includes
        </h2>
        <div className="space-y-6">
          {expertise.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-xl shadow p-6 flex flex-col gap-2 hover:scale-105 hover:bg-(--tertiary-color) transition"
            >
              <h3 className="text-xl font-bold text-(--secondary-color)">
                {item.title}
              </h3>
              <h4 className="text-md font-semibold text-(--primary-color)">
                {item.subtitle}
              </h4>
              <p className="text-(--primary-text-color)">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
