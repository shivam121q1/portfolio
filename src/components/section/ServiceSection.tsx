import { WavyText } from "../Effect/WavyText";
import ServiceCard from "../layout/ServiceCard";
import { services } from "@/constants/data";

export default function ServicesSection() {
  return (
    <section className="py-12 px-4">
      <div className="flex justify-center items-center mb-20 z-10 text-white">
        <WavyText
          text="Services"
          className="text-5xl font-bold tracking-wide"
        ></WavyText>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </section>
  );
}
