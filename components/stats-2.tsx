export default function StatsSection2() {
  return (
    <section
      className="py-12 md:py-20 lg:py-32"
      aria-labelledby="stats-heading"
    >
      <div className="mx-auto max-w-7xl space-y-8 px-6 sm:px-8 md:px-12 lg:px-20 md:space-y-16">
        
        {/* Heading Block */}
        <div
          id="stats-heading"
          className="relative z-10 mx-auto max-w-3xl space-y-6 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Mjini Digital’s <span className="text-primary">Success</span> in Numbers
          </h2>

          <p className="text-muted-foreground leading-relaxed text-lg">
            As Nairobi’s leading web development and SEO agency, our team of 
            expert developers, designers, and digital strategists consistently 
            delivers top-tier solutions that transform brands and accelerate 
            business growth. Using modern technologies, AI-powered workflows, 
            and proven SEO strategies, we help businesses dominate online and 
            stay ahead of the competition.
          </p>

          <p className="text-muted-foreground leading-relaxed text-lg">
            Below is a snapshot of our measurable impact.
          </p>
        </div>

        {/* Stats Grid */}
        <div className=" grid gap-8 md:grid-cols-3 text-center dark:[--color-muted:var(--color-zinc-900)]">
          
          {/* Websites Developed */}
          <div className="px-8 bg-muted rounded-(--radius) space-y-4 py-12">
            <div
              className="text-5xl font-bold"
              aria-label="Over one hundred websites developed"
            >
              +100
            </div>
            <p className="text-lg font-medium">
              Websites Successfully Developed
            </p>
          </div>

          {/* Google Rankings */}
          <div className="px-8 bg-muted rounded-(--radius) space-y-4 py-12">
            <div
              className="text-5xl font-bold"
              aria-label="Ninety percent of websites ranked first on Google"
            >
              90%
            </div>
            <p className="text-lg font-medium">
              Client Websites Ranking #1 on Google
            </p>
          </div>

          {/* Monthly Traffic */}
          <div className="px-8  bg-muted rounded-(--radius) space-y-4 py-12">
            <div
              className="text-5xl font-bold"
              aria-label="Over one million monthly visitors"
            >
              +1M
            </div>
            <p className="text-lg font-medium">
              Monthly Visitors Driven Through Our Strategies
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
