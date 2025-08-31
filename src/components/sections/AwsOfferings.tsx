const awsOfferings = [
  {
    title: "Cloud Architecture & Migration",
    description:
      "We design secure, scalable, and cost-effective AWS architectures. Our team ensures a seamless migration of your applications, data, and workloads to AWS—without disruption to your operations.",
  },
  {
    title: "AWS Infrastructure Management",
    description:
      "From EC2 to VPC, RDS to Lambda, we provision, configure, and manage your cloud infrastructure—optimizing performance, ensuring compliance, and minimizing costs.",
  },
  {
    title: "DevOps & Automation on AWS",
    description:
      "Accelerate your development pipeline with our DevOps expertise. We implement CI/CD pipelines, infrastructure as code (IaC), and automation strategies using AWS-native tools like CodePipeline, CloudFormation, and Terraform.",
  },
  {
    title: "Serverless & Modern Application Development",
    description:
      "Build faster and scale effortlessly. We help you develop and deploy modern, serverless applications using AWS Lambda, API Gateway, DynamoDB, and other managed services.",
  },
  {
    title: "Cloud Security & Compliance",
    description:
      "Security is built into everything we do. From IAM policies to encryption, monitoring, and compliance frameworks, we ensure your AWS environment meets industry standards and regulations.",
  },
  {
    title: "AWS Cost Optimization",
    description:
      "Maximize ROI with smart cost management. Our experts analyze your usage patterns, identify cost-saving opportunities, and implement right-sizing and reserved instance strategies.",
  },
  {
    title: " Managed AWS Services",
    description:
      "Focus on your core business while we handle the rest. Our managed services cover monitoring, backups, updates, patching, and 24/7 support—keeping your AWS environment healthy and secure.",
  },
];

export default function AwsOfferings() {
  return (
    <section className="bg-white py-16 px-4 my-12 ">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-extrabold mb-18 text-(--primary-color)">
          Our AWS Service Offerings
        </h2>
        <div className="space-y-8">
          {awsOfferings.map((offering, idx) => (
            <div key={offering.title}>
              <h3 className="font-bold text-lg md:text-xl mb-1 text-(--secondary-color)">
                {idx + 1}. {offering.title}
              </h3>
              <p className="text-(--primary-text-color)">
                {offering.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
