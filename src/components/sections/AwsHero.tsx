import Image from "next/image";

const awsImg = "/images/aws.png"; // Change to your actual image path

export default function AwsHero() {
  return (
    <section className="px-4 py-18">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
        {/* Left: Text */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-(--primary-color)">
            Unleashing the Power of Cloud with Amazon Web Services
          </h2>
          <p className="text-base md:text-lg text-(--primary-text-color)">
            At <span className="font-bold">CloudVandexa</span>, we specialize in
            helping businesses leverage the full potential of{" "}
            <span className="font-bold">Amazon Web Services (AWS)</span> to
            drive agility, scalability, and innovation. Our certified AWS
            experts design, deploy, and manage cloud solutions tailored to your
            unique needs—whether you're just beginning your cloud journey or
            looking to optimize an existing AWS environment.
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
