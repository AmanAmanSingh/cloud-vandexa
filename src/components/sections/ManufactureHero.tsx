const heroImg = "/images/manufacturing-hero.png"; // Change this path as needed

export default function ManufactureHero() {
  return (
    <section className="px-4 py-16">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10 text-(--primary-text-color)">
        {/* Text Content */}
        <div className="flex-1">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-wider mb-6">
            Boost Your Manufacturing Success
          </h1>
          <p className="text-base md:text-lg">
            Maximize profits and transform service delivery with CloudVandexa’s certified Salesforce experts, tailored for the manufacturing industry. Streamline operations across sales, service, and supply chain with real-time visibility and automation. Improve customer satisfaction through connected, end-to-end experiences from order to delivery. Leverage predictive analytics to optimize inventory, reduce downtime, and forecast demand. Seamlessly integrate Salesforce with ERP and legacy systems for unified workflows. Drive efficiency, agility, and growth with cloud-based solutions built for modern manufacturing.
          </p>
        </div>
      </div>
    </section>
  )
};