import { component$ } from "@builder.io/qwik";

import "./index.scss";
import iaImg from "../../assets/ia.avif";
import womanImg from "../../assets/woman.webp";
import jobissimImg from "../../assets/jobissim.avif";
import { ArrowRight } from "../common/Icons/ArrowRight";

export const Features = component$(() => {
  return (
    <>
      <section
        id="features"
        class="features-section flex min-h-screen items-center justify-center bg-gradient-to-br px-6 py-16"
      >
        <div class="mx-auto w-full max-w-7xl rounded-3xl bg-[#EEF0FC] px-4 py-12 sm:px-8">
          <div class="mb-16 text-center">
            <h1 class="mb-4 text-3xl text-[#2E104E] sm:text-5xl">
              Avec Jobibox:
            </h1>
            <h2 class="features-subtitle mb-6 bg-clip-text text-3xl text-transparent italic sm:text-5xl md:text-[80px] md:leading-[1]">
              préparez, postulez, réussissez
            </h2>
            <p class="text-base text-[#2E104E] sm:text-lg">
              Toutes les fonctionnalités Jobibox réunies en un seul outil
            </p>
          </div>

          <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <button class="bg1 group relative transform overflow-hidden rounded-3xl p-6 text-left text-white shadow-xl transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl">
              <div class="card-overlay absolute inset-0 transition-all duration-300 group-hover:bg-black/5"></div>
              <div class="relative z-10 flex h-full flex-col">
                <div class="mb-4 flex items-center justify-between">
                  <h3 class="text-xl font-bold sm:text-2xl">
                    Création de CV vidéo
                  </h3>
                  <ArrowRight />
                </div>
                <p class="leading-relaxed text-white/90">
                  Mettez en valeur votre personnalité et vos compétences en
                  enregistrant un CV vidéo percutant, directement depuis la
                  plateforme.
                </p>
                <div class="mt-auto overflow-hidden">
                  <img
                    loading="lazy"
                    decoding="async"
                    src={womanImg}
                    class="img-style h-auto w-full rounded-b-3xl object-contain"
                    alt="feature"
                  />
                </div>
              </div>
            </button>

            <button class="bg2 group relative transform overflow-hidden rounded-3xl p-6 text-left text-white shadow-xl transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl">
              <div class="card-overlay absolute inset-0 transition-all duration-300 group-hover:bg-black/5"></div>
              <div class="relative z-10 flex h-full flex-col">
                <div class="mb-4 flex items-center justify-between">
                  <h3 class="text-xl font-bold sm:text-2xl">
                    Simulation d'entretien avec IA
                  </h3>
                  <ArrowRight />
                </div>
                <p class="leading-relaxed text-white/90">
                  Préparez-vous comme un pro grâce à notre simulateur
                  d'entretien intelligent. Choisissez entre 3 niveaux de
                  difficulté pour progresser à votre rythme.
                </p>

                <div class="mt-8">
                  <div class="mb-4 rounded-full bg-white px-3 py-2 sm:px-2 sm:py-4">
                    <span class="text-[#2E104E]">
                      👋 Salut ! Prêt pour un test ?
                    </span>
                  </div>
                  <div class="overflow-hidden">
                    <img
                      loading="lazy"
                      decoding="async"
                      src={iaImg}
                      class="img-style h-auto w-full rounded-b-3xl object-contain"
                      alt="simulation"
                    />
                  </div>
                </div>
              </div>
            </button>

            <button class="bg3 group relative transform overflow-hidden rounded-3xl p-6 text-left text-white shadow-xl transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl">
              <div class="card-overlay absolute inset-0 transition-all duration-300 group-hover:bg-black/5"></div>
              <div class="relative z-10 flex h-full flex-col">
                <div class="mb-4 flex items-center justify-between">
                  <h3 class="text-xl font-bold sm:text-2xl">Trouver un Job</h3>
                  <ArrowRight />
                </div>
                <p class="leading-relaxed text-white/90">
                  Mettez en valeur votre personnalité et vos compétences en
                  enregistrant un CV vidéo percutant, directement depuis la
                  plateforme.
                </p>

                <div class="mt-auto mb-auto">
                  <div class="overflow-hidden">
                    <img
                      loading="lazy"
                      decoding="async"
                      src={jobissimImg}
                      class="img-style h-auto w-full rounded-b-3xl object-contain"
                      alt="job"
                    />
                  </div>
                </div>
              </div>
            </button>
          </div>
        </div>
      </section>
    </>
  );
});
