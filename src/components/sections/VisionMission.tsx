import Link from "next/link";

const sections = [
  {
    key: "vision",
    title: "Our Vision",
    text: "To be a global leader in digital transformation—empowering businesses to thrive through innovative, cloud-driven, and future-ready technology solutions.",
    textClass: "text-lg text-(--secondary-text-color)",
    extra: null,
  },
  {
    key: "mission",
    title: "Our Mission",
    text: "To deliver scalable, intelligent IT services that drive growth, streamline operations, and foster long-term success—through expertise, agility, and a customer-first approach.",
    textClass: "text-lg text-(--primary-color)",
    extra: null,
  },
  {
    key: "cta",
    title: "Let’s Build What’s Next — Together",
    text: "From cloud enablement to enterprise automation, CloudVandexa is here to power your next big leap.",
    textClass: "text-base md:text-lg text-(--secondary-text-color) mb-2",
    extra: (
      <p className="text-base md:text-lg text-(--primary-text-color)">
        <Link href="/contact-us" className="font-bold">Get in touch</Link> with us today to explore
        how we can transform your vision into reality.
      </p>
    ),
  },
];

export default function VisionMission() {
  return (
    <section>
      {sections.map(
        ({ key, title, text, extra }) => (
          <div key={key} className={"py-8 px-4"}>
            <div className="max-w-4xl mx-auto">
              <h2 className={"text-xl md:text-2xl font-bold text-(--secondary-color) mb-4"}>{title}</h2>
              <p className={"text-lg text-(--primary-text-color)"}>{text}</p>
              {extra}
            </div>
          </div>
        )
      )}
    </section>
  );
}
