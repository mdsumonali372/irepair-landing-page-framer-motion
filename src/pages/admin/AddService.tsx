import { Button } from "@/components/ui/button";
import { FormEvent, useState } from "react";

const AddService = () => {
  const [serviceName, setServiceName] = useState("");
  const handleAddService = (e: FormEvent) => {
    e.preventDefault();
    const serviceData = {
      name: serviceName,
      description: "Replace broken screens",
      devices: ["Smartphone", "Laptop", "Tablet"],
      price: 100.0,
    };
    console.log(serviceData);
  };
  return (
    <div>
      <form onClick={handleAddService}>
        <input type="text" onChange={(e) => setServiceName(e.target.value)} />
        <Button type="button">Add</Button>
      </form>
    </div>
  );
};

export default AddService;
