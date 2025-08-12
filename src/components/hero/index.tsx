import { component$ } from "@builder.io/qwik";

import "./index.scss";
import { ArrowDown } from "../common/Icons/ArrowDown";
import { WhiteButton } from "../common/buttons/WhiteButton";

export const Hero = component$(() => {
  return (
    <section
      id="hero"
      class="hero-bg relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <div class="relative z-10 mx-4 flex min-h-screen flex-col items-center justify-center px-4 py-12 text-center sm:px-6 sm:py-16">
        <button class="group mb-6 flex items-center rounded-full border border-white/30 bg-white/20 px-6 py-3 text-white transition-all duration-300 hover:bg-white/30 sm:px-8 sm:py-4">
          <p class="text-sm text-white/80 sm:text-base md:text-lg">
            Entrez dans la JobiBox et démarquez-vous auprès des recruteurs
          </p>
        </button>

        <div class="mb-8 max-w-4xl">
          <h1 class="mb-4 text-3xl text-white sm:text-5xl md:text-6xl">
            Une cabine. Une vidéo
          </h1>

          <h2
            class="mb-8 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-700 bg-clip-text font-serif text-4xl leading-none font-normal text-transparent italic sm:text-6xl lg:text-7xl xl:text-8xl"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Une vraie première impression
          </h2>

          <p class="mx-auto mb-12 max-w-2xl text-sm text-white/80 sm:text-base md:text-lg">
            La JobiBox est une cabine insonorisée qui vous permet de créer un CV
            vidéo pro, seul·e, en quelques minutes grâce à une interface simple
            et guidée.
          </p>
        </div>

        <a href="#jobibox">
          <WhiteButton label="Découvrir la jobibox" />
        </a>

        <div class="mt-8 flex animate-bounce flex-col items-center text-xs text-white sm:text-lg">
          <p class="mb-2">Scroll pour découvrir la jobibox</p>
          <ArrowDown />
        </div>
      </div>
    </section>
  );
});
