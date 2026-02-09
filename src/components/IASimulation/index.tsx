import { component$ } from "@builder.io/qwik";

import "./index.scss";
import levels from "~/assets/IASimulation/levels.avif";
import interview from "~/assets/IASimulation/interview.png";
import score from "~/assets/IASimulation/score.avif";

export const IASimulation = component$(() => {
  const steps = [
    {
      index: 1,
      img: levels,
      title: "Choisissez votre niveau",
      text: "Débutant, Intermédiaire ou Expert : adaptez la difficulté à votre expérience et vos objectifs de carrière.",
    },
    {
      index: 2,
      img: interview,
      title: "Passez l'entretien en conditions réelles",
      text: "Face caméra, répondez aux questions de l'IA qui simule un vrai recruteur et analyse votre communication en temps réel.",
    },
    {
      index: 3,
      img: score,
      title: "Progressez avec un feedback détaillé",
      text: "Obtenez votre score, découvrez les réponses attendues et identifiez vos axes d'amélioration.",
    },
  ];

  return (
    <section
      id="ia-simulation"
      class="flex min-h-screen flex-col items-center justify-center px-6 py-12 text-white md:py-8 lg:py-0 lg:pb-40"
    >
      <div class="mb-10 mx-auto max-w-7xl px-8 pt-14 text-center">
        <h1 class="mb-4 text-3xl text-[#2E104E] ">
          Entraînez-vous grâce à la
        </h1>
        <h1 class="title mb-6 bg-clip-text text-3xl text-transparent italic sm:text-5xl md:text-[80px] md:leading-[1]">
          Simulation d'entretien avec IA
        </h1>

        <p class="text-base text-[#2E104E] sm:text-lg">
          Passez des entretiens virtuels avec une IA et boostez vos
          performances.
        </p>
      </div>

      <div class="steps-flow mx-auto max-w-7xl px-8">
        {steps.map((step) => (
          <div class="content-panel step">
            <span class="step-index">{step.index}</span>
            <h3>{step.title}</h3>
            <div class="step-details">
              <p>{step.text}</p>
            </div>
            <img
              src={step.img}
              alt={step.title}
              class="step-image"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
});
