const awsOfferings = [
  {
    title: "Custom Java Application Development",
    description:
      "We develop secure, scalable, and high-performance custom applications using Java SE, Java EE, and modern frameworks like Spring Boot and Jakarta EE—fully aligned with your functional and business requirements.",
  },
  {
    title: "Java Microservices Architecture",
    description:
      "Break down monoliths and modernize your systems. We design and implement microservices-based architectures using Spring Cloud, RESTful APIs, and containerization (Docker/Kubernetes) to ensure agility and resilience.",
  },
  {
    title: "Enterprise Java Solutions",
    description:
      "Accelerate your development pipeline with our DevOps expertise. We implement CI/CD pipelines, infrastructure as code (IaC), and automation strategies using AWS-native tools like CodePipeline, CloudFormation, and Terraform.",
  },
  {
    title: "Java API & Integration Services",
    description:
      "We build secure and well-documented APIs to enable seamless system integrations. Whether it's REST, SOAP, or GraphQL, our APIs ensure interoperability with third-party services and enterprise platforms.",
  },
  {
    title: "Java Maintenance & Modernization",
    description:
      "Legacy Java system? We audit, refactor, and modernize your existing Java applications to align with the latest performance, security, and architectural best practices.",
  },
  {
    title: "Java DevOps & CI/CD",
    description:
      "Speed up your software delivery. We set up CI/CD pipelines, automated testing, and container orchestration for Java projects—using Jenkins, Maven, GitLab CI, and more.",
  },
  {
    title: "Java in the Cloud (AWS, Azure, GCP)",
    description:
      "Deploy Java applications natively in the cloud. We specialize in cloud-native Java development and deployment using services like AWS Elastic Beanstalk, ECS, Lambda (Java runtime), and more",
  },
];

export default function JavaOfferings() {
  return (
    <section className="bg-white py-16 px-4 my-12 ">
      <div className="max-w-7xl mx-auto ">
        <h2 className="text-4xl lg:text-5xl font-extrabold mb-18 text-(--primary-color)">
          Our Java Development Service Offerings
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
