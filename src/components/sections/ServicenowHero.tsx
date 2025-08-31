import Image from "next/image";

const serviceNowImg = "/images/serviceNow.jpg";

export default function ServiceNowHero() {
  return (
    <section className="px-4 py-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-2">
        {/* Left: Text */}
        <div className="flex-1">
          <h2 className="max-w-7xl mx-auto text-3xl md:text-4xl lg:text-5xl font-bold text-(--primary-color) leading-tight">
            Transform your enterprise with intelligent workflows powered by
            ServiceNow
          </h2>
          <p className="mb-4 text-lg md:text-xl tracking-wider mt-4 text-(--primary-text-color)">
            We help businesses modernize operations, improve service delivery,
            and drive digital transformation — all from a single platform.
            <br />
            From IT to HR, customer service to security, our certified experts
            deliver tailored solutions that align with your goals and scale with
            your growth.
          </p>
        </div>
        {/* Right: Image */}
        <div className="lg:w-[40%] lg:flex-none flex-1">
          <Image
            src={serviceNowImg}
            alt="ServiceNow Cloud"
            width={550}
            height={360}
            className="rounded-md object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
