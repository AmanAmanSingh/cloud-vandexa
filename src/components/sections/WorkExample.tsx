import Image from "next/image";

export default function WorkExample() {
  return (
    <section className="bg-white px-4 min-h-[70vh]">
      <div className="max-w-7xl mx-auto flex flex-wrap md:flex-nowrap gap-4 md:gap-10 text-(--primary-color)">
        <div className="min-w-[40%] mt-10 md:mt-24">
          <h1 className="text-3xl lg:text-4xl font-semibold tracking-wider">
            Transformational projects in healthcare
          </h1>
          <p className="mt-4 md:mt-6 text-sm lg:text-lg tracking-wide ">
            Enabled a 35% reduction in patient wait times and improved call
            center resolution rates by 45% using Amazon Connect. Patient
            satisfaction jumped 30%, and the solution was fully deployed in
            under 90 days.
          </p>
        </div>
        <div className="w-full sm:min-w-[50%] h-fit md:h-96  mt-8 md:mt-20 mb-14 relative">
          <Image
            className=""
            width={500}
            height={500}
            src="/images/healthcare-image.jpg"
            alt="Healthcare Project"
          />
        </div>
      </div>
    </section>
  );
}
