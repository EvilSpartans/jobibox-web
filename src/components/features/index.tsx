import { component$ } from "@builder.io/qwik";

import "./index.scss";
import iaImg from "../../assets/ia.avif";
import cvImg from "../../assets/ia-cv.png";
import womanImg from "../../assets/woman.avif";
import jobissimImg from "../../assets/offers.avif";
import { ArrowRight } from "../common/Icons/ArrowRight";

export const Features = component$(() => {
  return (
    <>
      <section
        id="features"
        class="features-section flex min-h-screen items-center justify-center bg-gradient-to-br px-6 py-16"
      >
        <div class="mx-auto w-full max-w-screen-2xl rounded-3xl bg-[#EEF0FC] px-4 py-12 sm:px-8">
          <div class="mb-16 text-center">
            <h1 class="mb-4 text-3xl text-[#2E104E] sm:text-5xl">
              Avec JobiBox:
            </h1>
            <h2 class="features-subtitle mb-6 bg-clip-text text-3xl text-transparent italic sm:text-5xl md:text-[80px] md:leading-[1]">
              préparez, postulez, réussissez
            </h2>
            <p class="text-base text-[#2E104E] sm:text-lg">
              Toutes les fonctionnalités JobiBox réunies en un seul outil
            </p>
          </div>

          <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div class="bg1 group relative transform overflow-hidden rounded-3xl p-6 text-left text-white shadow-xl transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl">
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
                  JobiBox.
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
            </div>

            <div class="bg2 group relative transform overflow-hidden rounded-3xl p-6 text-left text-white shadow-xl transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl">
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
            </div>

            <div class="bg2 group relative transform overflow-hidden rounded-3xl p-6 text-left text-white shadow-xl transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl">
              <div class="card-overlay absolute inset-0 transition-all duration-300 group-hover:bg-black/5"></div>

              <div class="relative z-10 flex h-full flex-col">
                <div class="mb-4 flex items-center justify-between">
                  <h3 class="text-xl font-bold sm:text-2xl">
                    CV optimisé par IA
                  </h3>
                  <ArrowRight />
                </div>

                <p class="leading-relaxed text-white/90">
                  Créez un CV professionnel et percutant grâce à notre
                  intelligence artificielle. Analyse de profil, reformulation
                  intelligente et optimisation pour les recruteurs.
                </p>

                <div class="mt-8">
                  <div class="mb-4 rounded-full bg-white px-3 py-2 sm:px-2 sm:py-4">
                    <span class="text-[#2E104E]">
                      ✨ Donnez plus d’impact à votre CV
                    </span>
                  </div>

                  <div class="overflow-hidden">
                    <img
                      loading="lazy"
                      decoding="async"
                      src={cvImg}
                      class="img-style h-auto w-full rounded-b-3xl object-contain"
                      alt="CV généré par intelligence artificielle"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div class="bg3 group relative transform overflow-hidden rounded-3xl p-6 text-left text-white shadow-xl transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl">
              <div class="card-overlay absolute inset-0 transition-all duration-300 group-hover:bg-black/5"></div>
              <div class="relative z-10 flex h-full flex-col">
                <div class="mb-4 flex items-center justify-between">
                  <h3 class="text-xl font-bold sm:text-2xl">Trouver un Job</h3>
                  <ArrowRight />
                </div>
                <p class="leading-relaxed text-white/90">
                  Postulez en un clic depuis la JobiBox parmi des milliers
                  d'offres d'emploi disponibles. Suivez ensuite vos candidatures
                  directement depuis votre espace Jobissim.
                </p>

                <div class="mt-auto mb-auto">
                  <div class="mt-auto mb-auto">
                    <div class="overflow-hidden">
                      <img
                        loading="lazy"
                        decoding="async"
                        src={jobissimImg}
                        alt="job"
                        class="h-auto w-full rounded-3xl object-contain object-bottom"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
});
