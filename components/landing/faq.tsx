import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
    {
        question: "What's included in each plan?",
        answer:
            "Each plan includes a complete, production-ready MVP with source code, documentation, and deployment. Spark includes a landing page and waitlist, Ignite includes a full web app with authentication and payments, and Liftoff includes everything plus advanced features and priority support. All plans come with a 30-day bug-fix guarantee.",
    },
    {
        question: "Do I own the code?",
        answer:
            "Yes, absolutely. Once the project is complete and paid for, you own 100% of the intellectual property, code, and assets. We just build it.",
    },
    {
        question: "How can you build it so fast?",
        answer:
            "We use a proprietary boilerplate stack (Next.js, Supabase, Tailwind) that handles 80% of the repetitive setup. This allows us to focus entirely on your unique features from day one. Our streamlined process eliminates unnecessary meetings and scope creep.",
    },
    {
        question: "Can I see examples of your work?",
        answer:
            "Yes! We can share case studies and examples of previous MVPs we've built. Contact us to see relevant examples in your industry. We also have client testimonials that showcase our work quality and speed.",
    },
    {
        question: "What technologies do you use?",
        answer:
            "We primarily use Next.js for the frontend, Supabase or PostgreSQL for the database, Tailwind CSS for styling, and Stripe for payments. We can also work with other tech stacks if you have specific requirements. All code follows industry best practices and is production-ready.",
    },
    {
        question: "What happens after launch?",
        answer:
            "We offer a 30-day bug-fix guarantee. After that, you can choose to maintain it yourself (the code is clean and well-documented), or sign up for one of our maintenance packages. We also offer Phase 2 development for additional features.",
    },
    {
        question: "What if I need changes after launch?",
        answer:
            "Minor adjustments and bug fixes are covered in our 30-day guarantee. For additional features or major changes, we offer Phase 2 development sprints at a discounted rate. You can also hire your own developers since you own the code.",
    },
    {
        question: "Can you sign an NDA?",
        answer:
            "Yes. We are happy to sign a Non-Disclosure Agreement before we discuss your idea in detail to ensure your intellectual property is protected. This is standard practice for us.",
    },
    {
        question: "Do you offer payment plans?",
        answer:
            "Yes, we offer flexible payment options. Typically, we require 50% upfront to start the project and 50% upon completion. For larger projects, we can discuss custom payment schedules that work for your budget.",
    },
    {
        question: "What if I'm not satisfied?",
        answer:
            "We work closely with you throughout the process with regular check-ins to ensure we're building exactly what you need. If there are issues, our 30-day bug-fix guarantee covers any problems. We're committed to your success and will work with you to resolve any concerns.",
    },
    {
        question: "Can you integrate with specific tools or APIs?",
        answer:
            "Absolutely! We can integrate with most popular tools and APIs including payment processors, email services, analytics platforms, CRM systems, and more. Just let us know your requirements during the initial consultation.",
    },
    {
        question: "What if I need more features later?",
        answer:
            "Our code is built to scale. You can easily add features later with your own team, or hire us for a 'Phase 2' sprint. We offer discounted rates for existing clients who want to add features or scale their MVP.",
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
                    <p className="text-muted-foreground mt-4">
                        Have another question?{" "}
                        <a href="mailto:shubham@launchion.pro" className="text-primary hover:underline font-medium">
                            Contact us
                        </a>
                        {" "}or reach out on{" "}
                        <a href="https://twitter.com/launchion" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">
                            Twitter
                        </a>
                        .
                    </p>
                </div>

                <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, index) => (
                        <AccordionItem
                            key={index}
                            value={`item-${index}`}
                        >
                            <AccordionTrigger className="text-left text-base md:text-lg tracking-tight text-foreground">
                                {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-muted-foreground leading-relaxed text-sm md:text-base">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
}
