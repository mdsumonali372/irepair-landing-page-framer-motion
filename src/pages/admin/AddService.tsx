import { Button } from "@/components/ui/button";
import { useMutation } from "@tanstack/react-query";
import { FormEvent, useState } from "react";

const AddService = () => {
  const [serviceName, setServiceName] = useState("");
  const { mutateAsync, isError, isSuccess } = useMutation({
    mutationFn: async (data) => {
      return await fetch("http://localhost:5000/api/v1/services", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    },
  });

  console.log({ isError, isSuccess });
  const handleAddService = async (e: FormEvent) => {
    e.preventDefault();
    const serviceData = {
      name: serviceName,
      description: "Replace broken screens",
      devices: ["Smartphone", "Laptop", "Tablet"],
      price: 100.0,
    };
    console.log(serviceData);
    await mutateAsync(serviceData);
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
