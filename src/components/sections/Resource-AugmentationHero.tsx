import Image from "next/image";

const resourceAugImg = "/images/resourceAugmentation1.png";

export default function ResourceAugmentationHero() {
  return (
    <section className="px-4 py-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Left: Text */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-(--primary-color)">
            On-Demand Resource Augmentation for Salesforce, ServiceNow, AWS
            &amp; Java
          </h2>
          <p className="mb-4 text-base md:text-lg text-(--primary-text-color)">
            Looking to scale your team without the delay and cost of traditional
            hiring? Our Resource Augmentation model gives you{" "}
            <span className="font-bold">
              instant access to certified professionals
            </span>{" "}
            — ready to support your projects, whether short-term or long-term.
            From launching new initiatives to filling skill gaps, we offer
            flexible, efficient, and secure resourcing solutions tailored to
            your needs.
          </p>
        </div>
        {/* Right: Image */}
        <div className="flex-1 flex justify-center items-center">
          <Image
            src={resourceAugImg}
            alt="Resource Augmentation Team"
            width={500}
            height={320}
            className="rounded-md object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
