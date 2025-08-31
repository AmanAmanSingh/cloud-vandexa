import Clients from "../components/sections/Client";
import Customers from "../components/sections/Customers";
import Hero from "../components/sections/Hero";
import Services from "../components/sections/Services";
import WorkExample from "../components/sections/WorkExample";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Clients />
      <Customers />
      <WorkExample />
    </>
  );
}
