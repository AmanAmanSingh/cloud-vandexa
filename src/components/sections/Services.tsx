import Image from "next/image";

export interface Service {
  title: string;
  logo?: string;
  alt: string;
}

export const services: Service[] = [
  { title: "Agentforce", logo: "/icons/Agentforce.png", alt: "Agentforce" },
  { title: "Data Cloud", logo: "/icons/DataCloud.png", alt: "Data Cloud" },
  { title: "Marketing Cloud", logo: "/icons/MarketingCloud.png", alt: "Marketing Cloud" },
  { title: "Service Cloud", logo: "/icons/ServiceCloud.png", alt: "Service Cloud" },
  { title: "Sales Cloud", logo: "/icons/SalesCloud.png", alt: "Sales Cloud" },
  { title: "Revenue Cloud (CPQ & Billing)", logo: "/icons/RevenueCloud.png", alt: "Revenue Cloud" },
  { title: "Field Service", logo: "/icons/FieldService.png", alt: "Field Service" },
  { title: "AWS", alt: "AWS" },
  { title: "Website Development", alt: "Website Development" },
  { title: "ServiceNow", alt: "ServiceNow" },
  { title: "AI", logo: "/icons/AI.png", alt: "AI" },
  { title: "MuleSoft", logo: "/icons/MuleSoft.png", alt: "MuleSoft" },
  { title: "Tableau", logo: "/icons/Tableau.png", alt: "Tableau" },
  { title: "Slack", logo: "/icons/Slack.png", alt: "Slack" },
];

export default function Services() {
  return (
    <section className="py-20 bg-(--primary-color) px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-(--secondary-text-color) mb-12">
          What We Do
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-8">
          {services.map(({ title, logo, alt }) => (
            <div
              key={title}
              className="flex flex-col items-center group hover:scale-105 transition-transform duration-300"
            >
              <div className="w-14 h-14 flex items-center justify-center mb-3 bg-white rounded-full shadow-md group-hover:shadow-xl transition-shadow">
                {logo ? (
                  <Image
                    src={logo}
                    alt={alt}
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                ) : (
                  <span className="text-gray-400 text-2xl">?</span>
                )}
              </div>
              <span className="text-sm text-(--secondary-text-color) text-center font-medium uppercase tracking-wide">
                {title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
