import { Container } from "./ui/Container";

const studentProblems = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "Overcrowded classrooms",
    description: "Your class has 40-50 students. Your teacher has no time for your questions."
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Foundation gaps compound",
    description: "That thing you didn't understand in Grade 9? It's now a massive hole in Grade 12."
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    title: "YouTube can't answer questions",
    description: "When you're stuck at 11pm before a test, there's no one to ask for help."
  }
];

const parentProblems = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "You can't help",
    description: "Maybe you didn't finish matric, or maths has changed. You see the frustration in their eyes."
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Private tutoring is expensive",
    description: "R300-500 per hour. R5,000+ per month. For most families, that's impossible."
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: "Doors are closing",
    description: "Without maths, they can't pursue medicine, engineering, commerce, or technology."
  }
];

export function ProblemSection() {
  return (
    <section className="py-24 md:py-32 bg-[var(--background-secondary)]">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-sm font-medium mb-4">
            The Challenge
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[var(--foreground)] mb-5">
            Why Most Matric Students{" "}
            <span className="text-gradient-warm">Struggle With Maths</span>
          </h2>
          <p className="text-lg md:text-xl text-[var(--muted-foreground)] max-w-2xl mx-auto">
            (And why it&apos;s not your fault)
          </p>
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-16 p-6 md:p-8 bg-[var(--card-bg)] rounded-2xl shadow-sm border border-[var(--card-border)]">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-extrabold text-rose-400">31%</div>
            <div className="text-sm text-[var(--muted-foreground)]">of matric maths students fail</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-extrabold text-[var(--foreground)]">3.9%</div>
            <div className="text-sm text-[var(--muted-foreground)]">get distinctions</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-extrabold text-[var(--foreground)]">80%</div>
            <div className="text-sm text-[var(--muted-foreground)]">of govt schools dysfunctional</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-extrabold text-indigo-400">97%</div>
            <div className="text-sm text-[var(--muted-foreground)]">distinctions from top 200 schools</div>
          </div>
        </div>

        {/* Two columns */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Students Column */}
          <div className="bg-[var(--card-bg)] rounded-2xl p-8 shadow-sm border border-[var(--card-border)]">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[var(--foreground)]">For Students</h3>
            </div>
            <div className="space-y-6">
              {studentProblems.map((problem, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-rose-500/10 text-rose-400 rounded-lg flex items-center justify-center">
                    {problem.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-[var(--foreground)] mb-1">{problem.title}</h4>
                    <p className="text-[var(--muted-foreground)] text-sm">{problem.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-[var(--muted-foreground)] italic border-l-2 border-indigo-500/30 pl-4">
              &ldquo;You&apos;re not bad at maths. You just never got the help you needed.&rdquo;
            </p>
          </div>

          {/* Parents Column */}
          <div className="bg-[var(--card-bg)] rounded-2xl p-8 shadow-sm border border-[var(--card-border)]">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-violet-500/20 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[var(--foreground)]">For Parents</h3>
            </div>
            <div className="space-y-6">
              {parentProblems.map((problem, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-rose-500/10 text-rose-400 rounded-lg flex items-center justify-center">
                    {problem.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-[var(--foreground)] mb-1">{problem.title}</h4>
                    <p className="text-[var(--muted-foreground)] text-sm">{problem.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-[var(--muted-foreground)] italic border-l-2 border-violet-500/30 pl-4">
              &ldquo;Your child deserves a teacher who knows their name.&rdquo;
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
