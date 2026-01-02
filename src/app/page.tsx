import Clients from "../components/sections/Client";
import Customers from "../components/sections/Customers";
import Hero from "../components/sections/Hero";
import Services from "../components/sections/Services";
import WorkExample from "../components/sections/WorkExample";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CloudVandexa - Cloud & Software Solutions",
  description:
    "CloudVandexa is a cloud and software solutions company providing AWS, Salesforce, Java, ServiceNow, and web development services.",
};

export default function Home() {
  return (
    <>
      <h1 style={{ position: "absolute", left: "-9999px" }}>
        CloudVandexa - Cloud & Software Solutions Company
      </h1>
      <Hero />
      <Services />
      <Clients />
      <Customers />
      <WorkExample />
    </>
  );
}
