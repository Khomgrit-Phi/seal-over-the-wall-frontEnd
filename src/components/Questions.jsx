import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function Questions() {
  return (
    <div className="flex justify-center mb-[98px] items-center">
      <div className="w-[1073px]">
        <div className="border-b-1 border-secondary-light-gray-300 h-[64px]">
          <h2 className="text-[2rem] font-bold">Questions About Buying</h2>
        </div>
        <Accordion type="single" collapsible class="w-full my-[18px]">
          <AccordionItem value="item-1" className="border-secondary-light-gray-300">
            <AccordionTrigger class="text-[1.5rem] font-semibold w-full flex justify-between ">How long does shipping take?</AccordionTrigger>
            <AccordionContent class="text-[1.5rem] ">
            Orders are typically processed and shipped within 3–5 business days after payment is confirmed. Delivery times vary depending on your location and the shipping method chosen at checkout.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className="border-secondary-light-gray-300">
            <AccordionTrigger class="text-[1.5rem] font-semibold w-full flex justify-between">Can I return or exchange a product?</AccordionTrigger>
            <AccordionContent class="text-[1.5rem]">
            Absolutely! Just enter the recipient’s address at checkout. You can also include a gift message—we’ll make sure the package doesn’t include the receipt.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className="border-secondary-light-gray-300">
            <AccordionTrigger class="text-[1.5rem] font-semibold w-full flex justify-between">Can I send an item as a gift to someone else?</AccordionTrigger>
            <AccordionContent class="text-[1.5rem]">
            Since each item is made to order, we do not accept returns or exchanges unless the product arrives damaged or with the wrong design. Please contact us within 3 days of receiving your item if there’s an issue.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4" className="border-secondary-light-gray-300">
            <AccordionTrigger class="text-[1.5rem] font-semibold w-full flex justify-between">How can I track my order?</AccordionTrigger>
            <AccordionContent class="text-[1.5rem]">
            Once your payment is confirmed, you’ll receive a confirmation email with a tracking link. If you don’t see it within 1 hour, please check your spam folder or contact our support team.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5" className="border-secondary-light-gray-300">
            <AccordionTrigger class="text-[1.5rem] font-semibold w-full flex justify-between">Are the items limited in quantity? Will they restock?</AccordionTrigger>
            <AccordionContent class="text-[1.5rem]">
            Some items are limited edition and may not be restocked once sold out. We recommend following your favorite artist’s page to get updates on new drops and restocks.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}
