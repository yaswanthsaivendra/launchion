export default function PrivacyPage() {
  return (
    <div className="container mx-auto max-w-3xl px-4 py-16">
      <h1 className="mb-8 text-4xl font-bold tracking-tight">Privacy Policy</h1>
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <p className="lead text-muted-foreground mb-8 text-xl">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">1. Introduction</h2>
          <p className="text-muted-foreground mb-4">
            Welcome to Launchion (&quot;we,&quot; &quot;our,&quot; or
            &quot;us&quot;). We are committed to protecting your personal
            information and your right to privacy. If you have any questions or
            concerns about our policy, or our practices with regards to your
            personal information, please contact us.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">
            2. Information We Collect
          </h2>
          <p className="text-muted-foreground mb-4">
            We collect personal information that you voluntarily provide to us
            when you register on the website, express an interest in obtaining
            information about us or our products and services, when you
            participate in activities on the website or otherwise when you
            contact us.
          </p>
          <ul className="text-muted-foreground list-disc space-y-2 pl-6">
            <li>Name and Contact Data</li>
            <li>Credentials</li>
            <li>Payment Data</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">
            3. How We Use Your Information
          </h2>
          <p className="text-muted-foreground mb-4">
            We use personal information collected via our website for a variety
            of business purposes described below. We process your personal
            information for these purposes in reliance on our legitimate
            business interests, in order to enter into or perform a contract
            with you, with your consent, and/or for compliance with our legal
            obligations.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">4. Contact Us</h2>
          <p className="text-muted-foreground">
            If you have questions or comments about this policy, you may email
            us at shubham@launchion.pro.
          </p>
        </section>
      </div>
    </div>
  );
}
