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

const ServiceList = () => {
  const { data: services, isLoading, isError } = useGetServices();
  console.log(services);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (isError || !services) {
    return <p>Something went wrong</p>;
  }

  return (
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
  );
};

export default ServiceList;
