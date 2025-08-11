import { component$ } from "@builder.io/qwik";

import photo from "../../assets/video-image1.webp";
import frame from "../../assets/Frame.svg";
import { PurpleButton } from "../common/buttons/PurpleButton";
import { GradientSubtitle } from "../common/titles/GradientSubtitle";

export const Technology = component$(() => {
  return (
    <section
      id="technology"
      style="font-family: 'Manrope', sans-serif;"
      class="flex min-h-screen items-center justify-center px-4 sm:px-6 py-8 lg:py-0"
    >
      <div class="flex w-full max-w-7xl flex-col-reverse items-center justify-between gap-10 rounded-3xl bg-[#EEF0FC] px-4 py-8 sm:px-6 md:px-8 lg:flex-row lg:gap-16">
        <div class="w-full text-center lg:w-1/2 lg:text-left">
          <h1 class="mb-4 text-2xl leading-tight text-[#2E104E] sm:text-4xl md:text-5xl">
            Jobibox, expliqué
          </h1>

          <GradientSubtitle text="simplement en vidéo" />

          <p class="mb-8 text-sm leading-relaxed text-[#2E104E] sm:text-base md:text-lg">
            On vous montre comment Jobibox vous connecte aux bonnes missions (ou
            aux bons talents), en toute simplicité. Regardez, c’est plus clair
            que mille mots.
          </p>

          <div class="flex justify-center lg:justify-start">
            <PurpleButton
              label="Obtenir une jobibox"
              onClick$={() => console.log("Clic!")}
            />
          </div>
        </div>

        <div class="relative flex w-full justify-center lg:w-1/2">
          <img
            src={photo}
            loading="lazy"
            decoding="async"
            alt="Vidéo démonstration Jobibox"
            class="h-80 md:h-120 lg:h-160 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg object-cover"
          />

          <div class="absolute top-1/2 left-1/2 flex h-[135px] w-[135px] -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-[#2E104E] transition-all duration-300 ease-in-out hover:bg-[#6626AA]">
            <img src={frame} alt="Lecture" class="h-full w-full p-8" />
          </div>
        </div>
      </div>
    </section>
  );
});
