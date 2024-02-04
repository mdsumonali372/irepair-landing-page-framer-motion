import Container from "@/components/LayOuts/Container";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { useGetServices } from "@/api/admin/service/service.hook";
import { FormEvent, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const ServiceList = () => {
  const { data: services, isLoading, isError } = useGetServices();
  console.log(services);
  const [serviceName, setServiceName] = useState("");
  const queryClient = useQueryClient();
  const {
    mutateAsync,
    isError: errorService,
    isSuccess,
  } = useMutation({
    mutationFn: async (data) => {
      return await fetch("http://localhost:5000/api/v1/services", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["services"] });
    },
  });

  console.log({ errorService, isSuccess });
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

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (isError || !services) {
    return <p>Something went wrong</p>;
  }

  return (
    <>
      <Container className="mt-20 rounded-2xl p-0 border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Price</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {services.map((service) => (
              <TableRow key={service.id}>
                <TableCell className="font-medium">{service.name}</TableCell>
                <TableCell>{service.description}</TableCell>
                <TableCell>{service.price}</TableCell>
                <TableCell className="text-right">
                  <Button variant="destructive">
                    <Trash2></Trash2>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>Total</TableCell>
              <TableCell className="text-right">{services.length}</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </Container>
      <form onClick={handleAddService}>
        <input type="text" onChange={(e) => setServiceName(e.target.value)} />
        <Button type="button">Add</Button>
      </form>
    </>
  );
};

export default ServiceList;
