const whatWeBuild = [
  {
    title: "Business Websites",
    desc: "Professional, sleek, and built to impress.",
  },
  {
    title: "E-Commerce Stores",
    desc: "Sell online with Shopify, WooCommerce & custom solutions.",
  },
  {
    title: "Portfolios",
    desc: "Showcase your work beautifully and get discovered.",
  },
  {
    title: "Web Apps & Platforms",
    desc: "Custom tools, dashboards, CRMs, and more.",
  },
  {
    title: "Blogs & Content Sites",
    desc: "Easy to manage, designed to engage.",
  },
  {
    title: "Landing Pages",
    desc: "Perfect for campaigns and high-conversion funnels.",
  },
  {
    title: "eLearning Platforms",
    desc: "Courses, quizzes, user progress & integrations.",
  },
  {
    title: "Forums & Communities",
    desc: "Bring people together in your branded space.",
  },
];

const expertise = [
  { label: "Front-End:", desc: "Fast, responsive, modern UI" },
  { label: "Back-End:", desc: "Powerful, secure, scalable systems" },
  { label: "CMS:", desc: "WordPress, Webflow, Shopify & more" },
  { label: "Hosting:", desc: "AWS, Google Cloud, VPS, shared" },
  { label: "SEO & Security:", desc: "Get found, stay protected" },
  { label: "Ongoing Support:", desc: "We’re here after launch too" },
];

const whoWeWorkWith = [
  "Ambitious startups",
  "Growing businesses",
  "Creative professionals",
  "Agencies & enterprises",
];

const whyChooseUs = [
  "Launch faster with expert support",
  "Custom solutions for your unique goals",
  "Designed to convert & scale",
  "Transparent communication, always",
  "Long-term partners, not just developers",
];

export default function WebDevOfferings() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* What We Build */}
        <div>
          <h3 className="font-bold text-2xl mb-2">What We Build</h3>
          <ul className="space-y-3 text-(--primary-text-color)">
            {whatWeBuild.map((item) => (
              <li className="flex flex-col " key={item.title}>
                <div className="font-semibold text-lg">{item.title}</div>
                <div className="font-normal">{item.desc}</div>
              </li>
            ))}
          </ul>
        </div>

        {/* Our Expertise */}
        <div>
          <h3 className="font-bold text-2xl mb-2">Our Expertise</h3>
          <ul className="space-y-1 pl-2 text-(--primary-text-color)">
            {expertise.map((item) => (
              <li key={item.label}>
                <span className="h-2 w-2 rounded-full bg-black mr-8 inline-block"></span>
                <span className="font-semibold">{item.label}</span> {item.desc}
              </li>
            ))}
          </ul>
        </div>

        {/* Who We Work With */}
        <div>
          <h3 className="font-bold text-2xl mb-2">Who We Work With</h3>
          <ul className="pl-2 space-y-1 text-(--primary-text-color)">
            {whoWeWorkWith.map((item) => (
              <li key={item}>
                <span className="h-2 w-2 rounded-full bg-black mr-8 inline-block"></span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Why Choose Us? */}
        <div>
          <h3 className="font-bold text-2xl mb-2">Why Choose Us?</h3>
          <ul className="pl-2 space-y-1 text-(--primary-text-color)">
            {whyChooseUs.map((item) => (
              <li key={item}>
                <span className="h-2 w-2 rounded-full bg-black mr-8 inline-block"></span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-18 mb-10">
          <p className="text-2xl md:text-3xl lg:text-5xl mb-6 text-(--primary-color)">
            Want a website that drives real results?
          </p>
          <p className="text-2xl md:text-3xl lg:text-5xl font-extrabold text-(--primary-color)">
            Let’s build something great together.
          </p>
        </div>
      </div>
    </section>
  );
}
