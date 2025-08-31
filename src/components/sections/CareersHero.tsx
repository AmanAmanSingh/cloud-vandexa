import Image from "next/image";

const careersImg = "/images/healthcare-image.jpg";

export default function CareersHero() {
  return (
    <section className="px-4 pt-14 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
        Let’s Build Something Beautiful — Together
      </h2>
      <p className="mb-4 text-base md:text-lg lg:text-xl tracking-wide">
        At <span className="font-bold">CloudVandexa</span>, we believe that
        great work starts with great people — kind, curious, passionate humans
        who care about what they do and the impact they make.
        <br />
        <br />
        We’re not just building cloud solutions — we’re building a space where
        everyone feels seen, supported, and inspired to grow. If you’re someone
        who values purpose, teamwork, and continuous learning, we’d be honored
        to meet you.
      </p>
      <div className="w-full flex justify-center py-8">
        <Image
          src={careersImg}
          alt="CloudVandexa Team Collaboration"
          width={600}
          height={350}
          className="rounded-md object-cover"
          priority
        />
      </div>
    </section>
  );
}
