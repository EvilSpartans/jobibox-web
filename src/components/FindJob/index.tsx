import { component$ } from "@builder.io/qwik";
import "./index.scss";

export const FindJob = component$(() => {
  const jobCategories = [
    { icon: "💻", label: "Tech" },
    { icon: "📊", label: "Finance" },
    { icon: "🎨", label: "Design" },
    { icon: "📈", label: "Marketing" },
    { icon: "⚖️", label: "Juridique" },
    { icon: "🏥", label: "Santé" },
    { icon: "🏗️", label: "BTP" },
    { icon: "🎓", label: "Éducation" },
  ];

const floatingJobs = [
    {
      role: "Product Manager",
      type: "CDI",
      delay: "0s",
    },
    {
      role: "Développeur Full-Stack",
      type: "Remote",
      delay: "0.2s",
    },
    {
      role: "UX Designer",
      type: "CDI",
      delay: "0.4s",
    },
    {
      role: "Data Analyst",
      type: "Freelance",
      delay: "0.6s",
    },
    {
      role: "Chef de Projet",
      type: "CDI",
      delay: "0.8s",
    },
    {
      role: "Infirmier(ère)",
      type: "CDI",
      delay: "1s",
    },
    {
      role: "Conducteur de Travaux",
      type: "CDI",
      delay: "1.2s",
    },
    {
      role: "Chef de Chantier",
      type: "Intérim",
      delay: "1.4s",
    },
  ];

  return (
    <section
      id="find-job"
      class="find-section flex min-h-screen flex-col items-center justify-center px-6 py-8 text-white md:py-8 lg:py-0"
    >
      <div class="find-content">
        <div class="find-header">
          <span class="find-badge">
            <span class="pulse-dot"></span>
            +3 000 offres actives aujourd'hui
          </span>

          <h1 class="my-6 text-3xl font-semibold md:text-6xl">
            Trouvez le job
          </h1>
          <h1 class="instrument-serif-italic mb-6 text-4xl font-semibold md:text-6xl">
            qui vous correspond
          </h1>
        </div>

        <div class="find-visual">
          <div class="find-search-container">
            <div class="find-search">
              <div class="search-icon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.35-4.35" />
                </svg>
              </div>
              <div class="search-text">
                <span class="typing-text">Product Designer à Paris...</span>
                <span class="typing-cursor">|</span>
              </div>
              <button class="search-btn">Rechercher</button>
            </div>
          </div>

          {/* Floating Job Cards */}
          <div class="floating-jobs">
            {floatingJobs.map((job, i) => (
              <div
                key={i}
                class={`floating-job job-${i + 1}`}
                style={{ animationDelay: job.delay }}
              >
                <div class="job-type">{job.type}</div>
                <div class="job-role">{job.role}</div>
              </div>
            ))}
          </div>

          {/* Connection Lines */}
          <svg class="connection-lines" viewBox="0 0 1000 500">
            <defs>
              <linearGradient
                id="lineGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stop-color="#a855f7" stop-opacity="0" />
                <stop offset="50%" stop-color="#a855f7" stop-opacity="0.6" />
                <stop offset="100%" stop-color="#ec4899" stop-opacity="0" />
              </linearGradient>
            </defs>
            <path
              class="connection-path path-1"
              d="M500,250 Q300,100 80,180"
              stroke="url(#lineGradient)"
              stroke-width="2"
              fill="none"
            />
            <path
              class="connection-path path-2"
              d="M500,250 Q700,80 920,150"
              stroke="url(#lineGradient)"
              stroke-width="2"
              fill="none"
            />
            <path
              class="connection-path path-3"
              d="M500,250 Q650,400 900,380"
              stroke="url(#lineGradient)"
              stroke-width="2"
              fill="none"
            />
            <path
              class="connection-path path-4"
              d="M500,250 Q250,350 100,400"
              stroke="url(#lineGradient)"
              stroke-width="2"
              fill="none"
            />
            <path
              class="connection-path path-5"
              d="M500,250 Q500,80 500,50"
              stroke="url(#lineGradient)"
              stroke-width="2"
              fill="none"
            />
          </svg>
        </div>

        {/* Categories */}
        <div class="find-categories">
          {jobCategories.map((cat, i) => (
            <div
              key={i}
              class="category-pill"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <span class="category-icon">{cat.icon}</span>
              <span class="category-label">{cat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});
