const services = [
    {
        title: "Salesforce Consulting & Implementation",
        description:
            "End-to-end CRM solutions that boost productivity, enhance customer experiences, and automate business processes.",
    },
    {
        title: "Amazon Web Services (AWS)",
        description:
            "Cloud strategy, migration, and DevOps services built on scalable, secure AWS infrastructure.",
    },
    {
        title: "Google Cloud Platform (GCP)",
        description:
            "Cloud-native development, data analytics, and AI-driven solutions on the GCP ecosystem.",
    },
    {
        title: "ServiceNow Solutions",
        description:
            "ITSM, ITOM, and digital workflow automation to streamline service delivery across the enterprise.",
    },
    {
        title: "Java Full Stack Development",
        description:
            "Secure, high-performance web and enterprise applications using modern Java technologies.",
    },
    {
        title: "Resource Augmentation",
        description:
            "On-demand access to certified developers, engineers, and cloud specialists to quickly scale your team and deliver projects faster.",
    },
    {
        title: "Website Development",
        description:
            "Professional website development services to build fast, responsive, and user-friendly websites tailored to your business needs.",
    },
];

export default function WhatWeDo() {
    return (
        <section className="py-20 px-6 bg-gradient-to-br from-white to-gray-50">
            <div className="max-w-7xl mx-auto text-center mb-14">
                <h2 className="text-4xl md:text-5xl font-bold text-(--primary-text-color)">
                    What We Do
                </h2>
                <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                    At CloudVandexa, we provide innovative cloud and IT solutions designed
                    to empower businesses and accelerate digital transformation.
                </p>
            </div>

            {/* Services Grid */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100"
                    >
                        <h3 className="text-xl font-semibold text-(--secondary-color) mb-3">
                            {service.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                            {service.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
