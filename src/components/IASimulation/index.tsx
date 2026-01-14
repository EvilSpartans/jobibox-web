import { component$ } from "@builder.io/qwik";

import "./index.scss";
import step1Img from "~/assets/IASimulation/step1.webp";
import step2Img from "~/assets/IASimulation/step2.webp";
import step3Img from "~/assets/IASimulation/step3.webp";

export const IASimulation = component$(() => {
  const steps = [
    {
      index: 1,
      img: step1Img,
      title: "Choisissez votre niveau",
      text: "Débutant, Intermédiaire ou Expert : adaptez la difficulté à votre expérience et vos objectifs de carrière.",
    },
    {
      index: 2,
      img: step2Img,
      title: "Passez l'entretien en conditions réelles",
      text: "Face caméra, répondez aux questions de l'IA qui simule un vrai recruteur et analyse votre communication en temps réel.",
    },
    {
      index: 3,
      img: step3Img,
      title: "Progressez avec un feedback détaillé",
      text: "Obtenez votre score, découvrez les réponses attendues et identifiez vos axes d'amélioration.",
    },
  ];

  return (
    <section
      id="ia-simulation"
      class="content-panel flex min-h-screen flex-col items-center justify-center px-6 py-8 text-white md:py-8 lg:py-0 lg:pb-40"
    >
      <div class="mx-auto max-w-7xl px-8 pt-10 text-center">
        <h1 class="my-6 text-3xl font-semibold md:text-6xl">
          Entraînez-vous grâce à la
        </h1>
        <h1 class="instrument-serif-italic mb-6 text-4xl font-semibold md:text-6xl">
          Simulation d'entretien avec IA
        </h1>

        <p class="mb-6 text-xl font-light text-purple-200 md:text-2xl">
          Passez des entretiens virtuels avec une IA et boostez vos
          performances.
        </p>
      </div>

      <div class="steps-flow mx-auto max-w-7xl px-8 pb-24">
        {steps.map((step) => (
          <div class="step">
            <span class="step-index">{step.index}</span>
            <h2>{step.title}</h2>
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
