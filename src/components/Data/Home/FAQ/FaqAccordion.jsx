"use client";

import { useState } from "react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import faqData from "./faqData";
import { toFarsiNumber } from "@/lib/utils";

export default function FaqTabs() {
    const [activeCategory, setActiveCategory] = useState("همه");

    const All = "همه";
    const filteredData =
        activeCategory === All
            ? faqData
            : faqData.filter((cat) => cat.category === activeCategory);

    let cumulativeCounter = 1;

    return (
        <div className="space-y-6">
            {/* Category bar */}
            <div className="flex overflow-x-auto scrollbar-hide gap-2 md:gap-4 mb-4 pb-4">
                {[All, ...faqData.map((cat) => cat.category)].map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`px-4 py-2 border-b-4 transition shrink-0 ${activeCategory === cat
                            ? " text-primary font-bold border-primary"
                            : " text-gray-700 font-normal border-white hover:bg-gray-50"
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Question box */}
            <div className="space-y-1">
                {filteredData.map((categoryItem, index) => (
                    <div key={index}>
                        <Accordion type="single" collapsible className="space-y-1">
                            {categoryItem.questions.map((q, i) => {

                                const questionNumber =
                                    activeCategory === All ? cumulativeCounter++ : i + 1;

                                return (
                                    <AccordionItem
                                        key={i}
                                        value={`item-${index}-${i}`}
                                        className="border-none  "
                                    >
                                        <AccordionTrigger className="text-left py-2 flex justify-between items-center px-0 hover:no-underline">
                                            <span className="text-amber-500 text-xl w-10 h-10 text-center p-2 rounded-lg bg-amber-100/25 border">{toFarsiNumber(questionNumber)}</span>
                                            <span className="ml-auto">{q.question}</span>
                                        </AccordionTrigger>
                                        <AccordionContent className="px-8 py-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg">
                                            {q.answer}
                                        </AccordionContent>
                                    </AccordionItem>
                                );
                            })}
                        </Accordion>
                    </div>
                ))}
            </div>
        </div>
    );
}
