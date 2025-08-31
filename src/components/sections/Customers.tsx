import Image from "next/image";

const stackedPeakImage = "/images/stacked-peaks.png";

export default function Customers() {
  return (
    <section className="bg-(--primary-color) relative py-16 px-4 min-h-[50vh] flex flex-col items-center justify-center">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-white text-3xl md:text-4xl font-semibold tracking-wider mb-4">
          50+ Happy Customers and Growing
        </h2>
        <p className="text-white text-lg md:text-xl tracking-wide">
          Driving digital success with tailored solutions, measurable results and<br />
          lasting partnerships
        </p>
      </div>
      <div className="w-full h-full pointer-events-none">
        <Image src={stackedPeakImage} alt="Decorative Image" height={500} width={1000} className="absolute bottom-0 right-0 rotate-x-180 rotate-z-180" />
      </div>
    </section>
  );
}
