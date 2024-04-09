import { Accordion } from "@/components/ui/accordion";
import AccordionCard from "@/components/AccordionCard";

export default function Home() {
  return (
    <main className="max-w-[1440px] border border-red-500 mx-auto py-12 flex ">
      <Accordion
        type="single"
        collapsible
        className="w-full p-6 flex flex-col gap-6"
      >
        {Array.from({ length: 6 }).map((_, i) => (
          <AccordionCard key={i} value={i} />
        ))}
      </Accordion>
    </main>
  );
}
