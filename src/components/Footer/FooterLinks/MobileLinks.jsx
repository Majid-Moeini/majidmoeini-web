import Link from "next/link";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { FOOTER_LINKS } from "./data";

export default function MobileLinks() {
    return (
        <div className="md:hidden bg-gray-500 p-1">
            <Accordion type="single" collapsible >
                {FOOTER_LINKS.map((col, i) => (
                    <AccordionItem key={i} value={`item-${i}`} className={'px-3'}>
                        <AccordionTrigger className="font-semibold text-[14px] text-gray-100 py-2.5">
                            {col.title}
                        </AccordionTrigger>
                        <AccordionContent className={'pt-3'}>
                            <ul className="text-white font-light text-sm space-y-2.5">
                                {col.items.map((item, index) => (
                                    <li key={index} >
                                        <Link href={item.href} className="hover:text-primary pr-3.5">
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    );
}
