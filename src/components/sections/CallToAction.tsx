import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const stackedPeakImage = "/images/stacked-peaks.png";

export default function CallToAction() {
  return (
    <section className="bg-(--primary-color) relative py-10 px-4 min-h-[60vh]">
      <div className="max-w-4xl mx-auto text-center h-[45vh] flex flex-col justify-center gap-6">
        <h2 className="text-white text-3xl md:text-4xl font-semibold tracking-wide">
          Ready to start your digital{" "}
          <span className="font-bold tracking-wide">Transformation Journey?</span>
        </h2>
        <p className="text-white text-lg tracking-widest">
          Empower your business with scalable, cloud-first solutions tailored to your goals.
        </p>
        <Link
          href="/contact-us"
          className="hover:animate-bounce cursor-pointer flex items-center justify-center gap-2 w-fit mt-18 mx-auto bg-(--tertiary-color) text-(--primary-text-color) px-6 py-3 rounded shadow-md tracking-wider font-medium text-base"
        >
          <span>Contact Us</span>
          <span>
            <ArrowUpRight className="w-5 h-5" />
          </span>
        </Link>
      </div>
      <div className="w-full h-full pointer-events-none">
        <Image
          src={stackedPeakImage}
          alt="Decorative Image"
          height={500}
          width={1000}
          className="absolute bottom-0 left-0"
        />
      </div>
    </section>
  );
}
