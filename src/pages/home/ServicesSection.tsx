import Container from "@/components/LayOuts/Container";
import BatteryReplacement from "@/components/ServiceStyles/BatteryReplacement";
import ChipReplacement from "@/components/ServiceStyles/ChipReplacement";
import DataRecovery from "@/components/ServiceStyles/DataRecovery";
import StorageReplacement from "@/components/ServiceStyles/StorageReplacement";

const ServicesSection = () => {
  return (
    <Container className="my-40">
      <div className="text-center">
        <h2>Services that we provide.</h2>
        <p className="max-w-[80ch] mx-auto my-7">
          We provide various computer repair services and solutions for our new
          and regular customers. Feel free to find out more below.
        </p>
      </div>
      <div className="grid grid-cols-12 gap-5">
        <BatteryReplacement />
        <ChipReplacement />
        <DataRecovery />
        <StorageReplacement />
        <div className="bg-red-500 h-[415px] rounded-2xl col-span-12 md:col-span-6 lg:col-span-4"></div>
        <div className="bg-red-500 h-[415px] rounded-2xl col-span-12 md:col-span-6 lg:col-span-4"></div>
        <div className="bg-red-500 h-[415px] rounded-2xl col-span-12 md:col-span-12 lg:col-span-4"></div>
      </div>
    </Container>
  );
};

export default ServicesSection;
