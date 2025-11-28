export default function TermsPage() {
  return (
    <div className="container mx-auto max-w-3xl px-4 py-16">
      <h1 className="mb-8 text-4xl font-bold tracking-tight">
        Terms of Service
      </h1>
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <p className="lead text-muted-foreground mb-8 text-xl">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">1. Agreement to Terms</h2>
          <p className="text-muted-foreground mb-4">
            These Terms of Service constitute a legally binding agreement made
            between you, whether personally or on behalf of an entity
            (&quot;you&quot;) and Launchion (&quot;we,&quot; &quot;us&quot; or
            &quot;our&quot;), concerning your access to and use of the website
            as well as any other media form, media channel, mobile website or
            mobile application related, linked, or otherwise connected thereto
            (collectively, the &quot;Site&quot;).
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">
            2. Intellectual Property Rights
          </h2>
          <p className="text-muted-foreground mb-4">
            Unless otherwise indicated, the Site is our proprietary property and
            all source code, databases, functionality, software, website
            designs, audio, video, text, photographs, and graphics on the Site
            (collectively, the &quot;Content&quot;) and the trademarks, service
            marks, and logos contained therein (the &quot;Marks&quot;) are owned
            or controlled by us or licensed to us, and are protected by
            copyright and trademark laws and various other intellectual property
            rights.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">
            3. User Representations
          </h2>
          <p className="text-muted-foreground mb-4">
            By using the Site, you represent and warrant that: (1) all
            registration information you submit will be true, accurate, current,
            and complete; (2) you will maintain the accuracy of such information
            and promptly update such registration information as necessary.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">4. Contact Us</h2>
          <p className="text-muted-foreground">
            In order to resolve a complaint regarding the Site or to receive
            further information regarding use of the Site, please contact us at
            support@launchion.com.
          </p>
        </section>
      </div>
    </div>
  );
}
