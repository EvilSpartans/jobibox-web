import { component$ } from "@builder.io/qwik";

import mapImgDesktop from "../../assets/map2.webp";
import mapImgMobile from "../../assets/map.webp";
import { PurpleButton } from "../common/buttons/PurpleButton";
import { GradientSubtitle } from "../common/titles/GradientSubtitle";

export const FindJobiBox = component$(() => {
  return (
    <section
      id="findJobiBox"
      style="font-family: 'Manrope', sans-serif;"
      class="flex min-h-screen items-center justify-center px-4 py-10 sm:px-6 md:py-16"
    >
      <div class="flex w-full max-w-7xl flex-col-reverse items-center justify-between gap-12 overflow-hidden rounded-3xl bg-[#EEF0FC] px-4 py-10 sm:px-6 md:px-10 lg:flex-row lg:gap-16">
        <div class="w-full text-center lg:w-1/2 lg:text-left">
          <h1 class="mb-4 text-3xl leading-tight font-semibold text-[#2E104E] sm:text-4xl md:text-5xl">
            Trouvez une Jobibox
          </h1>

          <GradientSubtitle text="proche de chez vous" />

          <p class="mb-8 text-sm leading-relaxed text-[#2E104E] sm:text-base md:text-lg">
            Vous voulez créer votre CV vidéo en quelques minutes ? Repérez la
            cabine Jobibox la plus proche de chez vous grâce à notre carte
            interactive.
          </p>

          <div class="flex justify-center lg:justify-start">
            <PurpleButton
              label="Trouver une Jobibox près de chez moi"
              onClick$={() => console.log("Clic!")}
            />
          </div>

          <div class="mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 sm:justify-start">
            <div class="flex items-center gap-1">
              <GradientSubtitle text="+150" />
              <p class="text-base text-[#2E104E] sm:text-lg md:text-xl">
                Jobibox
              </p>
            </div>
            <div class="flex items-center gap-1">
              <GradientSubtitle text="+25.000" />
              <p class="text-base text-[#2E104E] sm:text-lg md:text-xl">
                CV vidéo
              </p>
            </div>
          </div>
        </div>

        <div class="flex w-full justify-center lg:w-1/2">
          <picture class="h-auto w-full max-w-[280px] sm:max-w-sm md:max-w-md lg:mr-[-60px] lg:max-w-lg xl:mr-[-100px] xl:max-w-xl 2xl:mr-[-150px] 2xl:max-w-2xl">
            <source media="(max-width: 1024px)" srcset={mapImgMobile} />
            <img
              src={mapImgDesktop}
              alt="Map"
              width={500}
              height={400}
              loading="lazy"
              decoding="async"
              class="h-auto w-full"
            />
          </picture>
        </div>
      </div>
    </section>
  );
});
