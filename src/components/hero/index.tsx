import { component$ } from "@builder.io/qwik";

import "./index.scss";
import { ArrowDown } from "../common/Icons/ArrowDown";
import backgroundImage from "../../assets/background.png";
import { WhiteButton } from "../common/buttons/WhiteButton";

export const Hero = component$(() => {
  return (
    <section
      style="font-family: 'Manrope', sans-serif;"
      class="mx-4 flex min-h-screen items-center justify-center"
    >
      <div class="mt-6">
        <img
          src={backgroundImage}
          alt="Background Hero"
          width="1920"
          height="1080"
          class="absolute inset-0 h-full w-full object-cover"
          loading="eager"
        />

        <div class="absolute inset-0 bg-gradient-to-br from-[#09151B]/80 via-[#2E104EB2] to-[#9456ED]/60"></div>

        <div class="relative z-10 flex min-h-[70vh] flex-col items-center justify-center px-4 text-center sm:px-6">
          <button class="group mb-6 flex items-center rounded-full border border-white/30 bg-white/20 px-6 py-3 text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/30 sm:px-8 sm:py-4">
            <p class="text-sm text-white/80 sm:text-base md:text-lg">
              Entrez dans la JobiBox et démarquez-vous auprès des recruteurs
            </p>
          </button>

          <div class="mb-8">
            <h1 class="mb-4 text-3xl text-white sm:text-5xl md:text-6xl">
              Une cabine. Une vidéo
            </h1>

            <h2
              class="mb-8 bg-clip-text text-center text-4xl text-transparent sm:text-6xl lg:text-7xl xl:text-8xl"
              style="font-family: 'Instrument Serif', serif; font-weight: 400; font-style: italic; line-height: 100%; letter-spacing: 0%; background-image: linear-gradient(to right, #FEB24C, #FF5C95, #B638CF, #7432F6);"
            >
              Une vraie première impression
            </h2>

            <p class="mx-auto mb-12 max-w-2xl text-sm text-white/80 sm:text-base md:text-lg">
              La JobiBox est une cabine insonorisée qui vous permet de créer un
              CV vidéo pro, seul·e, en quelques minutes grâce à une interface
              simple et guidée.
            </p>
          </div>

          <WhiteButton
            label="Découvrir la jobibox"
            onClick$={() => console.log("Clic!")}
          />

          <div class="mt-8 flex animate-bounce flex-col items-center text-xs text-white sm:text-lg">
            <p class="mb-2">Scroll pour découvrir la jobibox</p>
            <ArrowDown />
          </div>
        </div>
      </div>
    </section>
  );
});
