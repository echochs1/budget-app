import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function AccountsAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>
          <p>Checking</p>
          <p className="justify-self-end">$6000</p>
        </AccordionTrigger>
        <AccordionContent>
          <p>Bofa</p>
          <p>$343</p>
        </AccordionContent>
        <AccordionContent>
          <p>Chase</p>
          <p>$5657</p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>
          <p>Credit Cards</p>
          <p className="justify-self-end">$972</p>
        </AccordionTrigger>
        <AccordionContent>
          <p>Chase</p>
          <p>$972</p>
        </AccordionContent>
        <AccordionContent>
          <p>Discover</p>
          <p>$0</p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Savings</AccordionTrigger>
        <AccordionContent>
          Add
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>Investments</AccordionTrigger>
        <AccordionContent>
          Add
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
