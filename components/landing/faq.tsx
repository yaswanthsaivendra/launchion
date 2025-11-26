import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
    {
        question: "Do I own the code?",
        answer:
            "Yes, absolutely. Once the project is complete and paid for, you own 100% of the intellectual property, code, and assets. We just build it.",
    },
    {
        question: "How can you build it so fast?",
        answer:
            "We use a proprietary boilerplate stack (Next.js, Supabase, Tailwind) that handles 80% of the repetitive setup. This allows us to focus entirely on your unique features from day one.",
    },
    {
        question: "What happens after launch?",
        answer:
            "We offer a 30-day bug-fix guarantee. After that, you can choose to maintain it yourself (the code is clean and standard), or sign up for one of our maintenance packages.",
    },
    {
        question: "Can you sign an NDA?",
        answer:
            "Yes. We are happy to sign a Non-Disclosure Agreement before we discuss your idea in detail to ensure your intellectual property is protected.",
    },
    {
        question: "What if I need more features later?",
        answer:
            "Our code is built to scale. You can easily add features later with your own team, or hire us for a 'Phase 2' sprint.",
    },
];

export function FAQ() {
    return (
        <section id="faq" className="py-24">
            <div className="container px-4 mx-auto max-w-3xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight text-balance">
                        Frequently Asked <span className="text-primary">Questions</span>
                    </h2>
                </div>

                <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                            <AccordionTrigger className="text-left text-lg tracking-tight hover:text-primary transition-colors">
                                {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-muted-foreground leading-relaxed">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
}
