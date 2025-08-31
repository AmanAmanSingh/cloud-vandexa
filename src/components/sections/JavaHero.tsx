import Image from "next/image";

const awsImg = "/images/java.jpg"; // Change to your actual image path

export default function JavaHero() {
  return (
    <section className="px-4 py-18">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
        {/* Left: Text */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-(--primary-color)">
            Scalable. Secure. Enterprise-Grade Java Solutions.
          </h2>
          <p className="text-base md:text-lg text-(--primary-text-color)">
            At <span className="font-bold">CloudVandexa</span>, we offer robust,
            high-performance
            <span className="font-bold">Java development services</span>{" "}
            designed to power modern enterprise applications. Our Java experts
            bring deep industry knowledge and technical expertise to build
            scalable backend systems, microservices architectures, and
            full-stack solutions tailored to your business goals.
          </p>
        </div>
        {/* Right: Image */}
        <div className="flex-1 flex justify-center items-center">
          <Image
            src={awsImg}
            alt="AWS Cloud"
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
