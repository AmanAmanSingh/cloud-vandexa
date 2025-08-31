import Image from "next/image";

const webDevImg = "/images/webDev.jpg"; // Change to your actual image path

export default function WebDevHero() {
  return (
    <section className="px-4 py-18">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
        {/* Left: Text */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-(--primary-color)">
            Build a Website That Works for Your Business
          </h2>
          <p className="text-base md:text-lg text-(--primary-text-color)">
            We design, develop, and maintain high-performing websites that help
            you <span className="font-bold">stand out, sell more, and</span>{" "}
            <span className="font-bold">grow faster.</span> From simple business
            sites to complex web apps — we bring your vision to life.
          </p>
        </div>
        {/* Right: Image */}
        <div className="flex-1 flex justify-center items-center">
          <Image
            src={webDevImg}
            alt="Web Development"
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
