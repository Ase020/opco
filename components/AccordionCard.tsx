import React from "react";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { TableCard } from "./TableCard";

const AccordionCard = ({ value }: { value: number }) => {
  return (
    <AccordionItem value={`item-${value}`} className="border px-4 rounded-md">
      <AccordionTrigger>Trust Account Details</AccordionTrigger>
      <AccordionContent>
        <TableCard />
      </AccordionContent>
    </AccordionItem>
  );
};

export default AccordionCard;
