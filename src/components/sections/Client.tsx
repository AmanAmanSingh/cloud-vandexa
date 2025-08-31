const clients = [
  { id: 1, title: "PWC", logo: "" },
  { id: 2, title: "Deloitte", logo: "" },
  { id: 3, title: "TechMahindra", logo: "" },
  { id: 4, title: "EY", logo: "" },
  { id: 5, title: "Accenture", logo: "" },
  { id: 6, title: "EXL", logo: "" },
  { id: 7, title: "Cognizant", logo: "" },
];

export default function Clients() {
  return (
    <section className="max-w-7xl m-auto flex items-center justify-center flex-col min-h-[60vh] bg-white overflow-hidden">
      <h2 className="text-(--primary-text-color) text-3xl md:text-4xl font-semibold tracking-wider text-center mb-28">
        Trusted by Industry Leaders
      </h2>
      {/* <div className="animate-marquee whitespace-nowrap flex gap-16 px-4">
        {clients.map((client) => (
          <span key={client.id} className="text-xl font-semibold text-gray-700">
            {client.title}
          </span>
        ))}
      </div> */}
      <div className="marquee w-full mt-12">
        <div>
          {clients.map((client) => (
            <span
              key={client.id}
              className="text-2xl font-semibold text-gray-700 mr-20"
            >
              {client.title}
            </span>
          ))}
        </div>
      </div>
      <div className="marquee marquee2 w-full mt-12">
        <div>
          {clients.map((client) => (
            <span
              key={client.id}
              className="text-2xl font-semibold text-gray-700 mr-20"
            >
              {client.title}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
