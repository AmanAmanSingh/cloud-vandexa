import React from "react";
import Image from "next/image";
import "../../assets/styles/ServiceHero.css";

const serviceImage = "/images/salesforceService1.png";

export default function ServiceHero() {
  return (
    <section className="service-hero px-4 py-16">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10 text-(--primary-text-color)">

        {/* Text Content */}
        <div className="flex-1 text-section">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-wider mb-12">
            Salesforce Services
          </h1>
          <p className="text-base md:text-lg">
            Unlock the full potential of your business with our comprehensive
            Salesforce solutions. From strategy to implementation and ongoing
            optimization, we help organizations transform customer experiences
            and drive measurable results using the world’s #1 CRM platform.
            Whether you're just starting with Salesforce or looking to scale
            your existing setup, our certified experts are here to guide you
            every step of the way.
          </p>
        </div>

        <div className="flex-1 flex justify-center items-center image-section">
          <div className="w-[320px] h-[320px] md:w-[400px] md:h-[400px] rounded-full">
            <Image
              src={serviceImage}
              alt={"our-services"}
              width={400}
              height={400}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
