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
      "Each plan includes a complete, production-ready MVP with full source code, comprehensive documentation, and deployment assistance. Our Spark plan includes a landing page and waitlist system. Ignite includes a full web application with user authentication, database, and payment integration. Liftoff includes everything plus advanced features, custom integrations, and priority support. All plans come with a 30-day bug-fix guarantee and unlimited revisions during the build process. For detailed pricing and plan comparisons, email us at shubham@launchion.pro.",
  },
  {
    question: "Do I own the code?",
    answer:
      "Yes, absolutely. Once the project is complete and fully paid, you own 100% of the intellectual property, source code, design assets, and all related materials. We transfer everything to you with no strings attached. You can modify, sell, or scale the product however you want. We're here to build it, not own it. If you have any questions about ownership or licensing, reach out to shubham@launchion.pro.",
  },
  {
    question: "How can you build it so fast?",
    answer:
      "We use a battle-tested boilerplate stack (Next.js, Supabase, Tailwind CSS) that handles 80% of the repetitive setup work. This allows us to focus entirely on your unique features and business logic from day one. Our streamlined process eliminates unnecessary meetings, scope creep, and decision paralysis. We've built dozens of MVPs using this system, so we know exactly what works and what doesn't. Want to learn more about our process? Contact us at shubham@launchion.pro.",
  },
  {
    question: "What happens after launch?",
    answer:
      "We provide a 30-day bug-fix guarantee where we'll fix any issues that arise post-launch at no additional cost. After that, you have full ownership and can maintain it yourself (the code is clean, well-documented, and follows best practices), hire your own developers, or sign up for our ongoing maintenance packages. We also offer Phase 2 development sprints for adding new features or scaling your MVP. For post-launch support inquiries, email shubham@launchion.pro.",
  },
  {
    question: "Can you sign an NDA?",
    answer:
      "Absolutely. We're happy to sign a Non-Disclosure Agreement before discussing your idea in detail. Protecting your intellectual property is our priority, and NDAs are standard practice for us. We've worked with many startups on sensitive projects and understand the importance of confidentiality. Just let us know your requirements, and we'll handle it promptly. Send your NDA to shubham@launchion.pro.",
  },
  {
    question: "Do you offer payment plans?",
    answer:
      "Yes, we offer flexible payment options to make it easier for startups to get started. Typically, we require 50% upfront to begin the project and 50% upon completion. For larger projects, we can discuss custom payment schedules that work for your budget. We understand cash flow challenges for early-stage startups. To discuss payment options, reach out to shubham@launchion.pro.",
  },
  {
    question: "What technologies do you use?",
    answer:
      "We primarily use Next.js for the frontend, Supabase or PostgreSQL for the database, Tailwind CSS for styling, and Stripe for payments. This modern stack ensures your MVP is fast, scalable, and maintainable. We can also work with other tech stacks if you have specific requirements. All code follows industry best practices and is production-ready. Have specific technology needs? Email shubham@launchion.pro to discuss.",
  },
  {
    question: "Can I see examples of your work?",
    answer:
      "Yes! We can share case studies and examples of previous MVPs we've built. Check out our work section on the homepage, and we can provide more detailed case studies relevant to your industry. We also have client testimonials that showcase our work quality and speed. To see specific examples related to your project, contact us at shubham@launchion.pro.",
  },
  {
    question: "What if I need changes after launch?",
    answer:
      "Minor adjustments and bug fixes are covered in our 30-day guarantee. For additional features or major changes, we offer Phase 2 development sprints at discounted rates for existing clients. Since you own the code, you can also hire your own developers to make changes. We're always happy to help with updates and improvements. To discuss post-launch changes, email shubham@launchion.pro.",
  },
  {
    question: "Can you integrate with specific tools or APIs?",
    answer:
      "Absolutely! We can integrate with most popular tools and APIs including payment processors (Stripe, PayPal), email services (SendGrid, Resend), analytics platforms (Google Analytics, Mixpanel), CRM systems (HubSpot, Salesforce), and more. Just let us know your requirements during the initial consultation. For custom integrations or specific API needs, contact shubham@launchion.pro to discuss.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-24">
      <div className="container mx-auto max-w-3xl px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-balance md:text-5xl">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-muted-foreground mt-4">
            Have another question?{" "}
            <a
              href="mailto:shubham@launchion.pro"
              className="text-primary font-medium hover:underline"
            >
              Contact us
            </a>{" "}
            or reach out on{" "}
            <a
              href="https://x.com/npm_shubham"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-medium hover:underline"
            >
              Twitter
            </a>
            .
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-foreground text-left text-base tracking-tight md:text-lg">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm leading-relaxed md:text-base">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
