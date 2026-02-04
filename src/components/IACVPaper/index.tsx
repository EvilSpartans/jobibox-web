import { component$, useSignal, $ } from "@builder.io/qwik";
import "./index.scss";

export const IACVPaper = component$(() => {
  const activeFeature = useSignal(0);

  const features = [
    {
      id: 0,
      icon: "🎨",
      title: "Templates Professionnels",
      shortDesc: "Designs uniques",
      description:
        "Choisissez le template. Moderne, classique, créatif ou minimaliste : trouvez le style qui vous ressemble.",
    },
    {
      id: 1,
      icon: "🎯",
      title: "Matching Poste",
      shortDesc: "Compatibilité offre",
      description:
        "À partir du profil, l’IA propose automatiquement des offres d’emploi pertinentes (et accélère la mise en relation).",
    },
    {
      id: 2,
      icon: "📝",
      title: "Réécriture Augmentée",
      shortDesc: "Optimisation texte",
      description:
        "Transformez vos phrases banales en accroches percutantes. L'IA reformule vos expériences avec des verbes d'action et des résultats quantifiés.",
    },
  ];

  return (
    <section
      id="cv-paper"
      class="cvp-section flex min-h-screen flex-col items-center justify-center px-6 py-8 text-white md:py-8 lg:py-0 lg:pb-40"
    >
      <div class="cvp-bg">
        <div class="cvp-orb cvp-orb-1"></div>
        <div class="cvp-orb cvp-orb-2"></div>
        <div class="cvp-grid"></div>
      </div>

      <div class="cvp-content">
        <div class="cvp-header">
          <h1 class="cvp-title">
            Votre CV,{" "}
            <span class="cvp-title-gradient instrument-serif-italic">
              transformé par l'IA
            </span>
          </h1>
          <p class="cvp-subtitle">
            Analysez, optimisez et personnalisez votre CV avec l'IA vocale
          </p>
        </div>

        <div class="cvp-showcase">
          <div class="cvp-nav">
            {features.map((feature, index) => (
              <button
                key={feature.id}
                class={`cvp-nav-btn ${activeFeature.value === index ? "active" : ""}`}
                onClick$={() => (activeFeature.value = index)}
              >
                <span class="cvp-nav-icon">{feature.icon}</span>
                <div class="cvp-nav-text">
                  <span class="cvp-nav-title">{feature.title}</span>
                  <span class="cvp-nav-short">{feature.shortDesc}</span>
                </div>
              </button>
            ))}
          </div>

          <div class="cvp-preview">
            <div class="cvp-mockup">
              <div class="cvp-mock-header">
                <div class="cvp-avatar">JD</div>
                <div class="cvp-mock-info">
                  <div class="cvp-mock-name"></div>
                  <div class="cvp-mock-role"></div>
                </div>
              </div>

              <div class="cvp-mock-section">
                <div class="cvp-mock-title"></div>
                <div class="cvp-mock-line full"></div>
                <div class="cvp-mock-line medium"></div>
                <div class="cvp-mock-line short"></div>
              </div>

              <div class="cvp-mock-section">
                <div class="cvp-mock-title"></div>
                <div class="cvp-mock-line full"></div>
                <div class="cvp-mock-line long"></div>
              </div>

              <div class="cvp-mock-section">
                <div class="cvp-mock-title"></div>
                <div class="cvp-mock-skills">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>

              <div class="cvp-ai-overlay">
                <div class="cvp-scan-line"></div>
              </div>
            </div>
          </div>

          <div class="cvp-details">
            <div class="cvp-card">
              <div class="cvp-card-header">
                <span class="cvp-card-icon">
                  {features[activeFeature.value].icon}
                </span>
                <h3>{features[activeFeature.value].title}</h3>
              </div>
              <p class="cvp-card-desc">
                {features[activeFeature.value].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
