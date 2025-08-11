import { component$, useVisibleTask$ } from "@builder.io/qwik";

import "./index.scss";
import { Pencil } from "../common/Icons/Pencil";
import { Audio } from "../common/Icons/Audio";
import { Camera } from "../common/Icons/Camera";
import { Heart } from "../common/Icons/Heart";
import { Cloud } from "../common/Icons/Cloud";
import { Light } from "../common/Icons/Light";
import { Screen } from "../common/Icons/Screen";
import { Shield } from "../common/Icons/Shield";

export const MultiButtons = component$(() => {
  useVisibleTask$(() => {
    const buttons = document.querySelectorAll(".button-card");

    buttons.forEach((button, index) => {
      setTimeout(
        () => {
          button.classList.add("floating");
        },
        1200 + index * 200,
      );
    });
  });

  return (
    <section
      id="multiButtons"
      style="font-family: 'Manrope', sans-serif;"
      class="flex min-h-screen flex-col justify-between overflow-hidden bg-gradient-to-b from-[#4a4199] to-[#753985] text-white"
    >
      <div class="mx-auto max-w-7xl px-8 pt-10 text-center">
        <h1 class="my-6 text-3xl font-semibold md:text-6xl">
          Tout ce qu'il faut,{" "}
          <span class="instrument-serif-italic">directement</span>
          <br />
          <span class="instrument-serif-italic">intégré</span> dans la JobiBox.
        </h1>

        <p class="mb-4 text-xl font-light text-purple-200 sm:mb-0 md:text-2xl">
          Tout est intégré pour une expérience fluide, sans besoin
          d'installation complexe.
        </p>
      </div>

      <div class="relative px-4 sm:px-8">
        <div class="mx-auto h-auto max-w-7xl rounded-t-[125px] bg-gradient-to-r from-[#09151B] to-[#321B53] pt-20 shadow-2xl sm:h-[600px] sm:rounded-t-[250px]">
          <h2 class="box-title absolute top-10 left-1/2 -translate-x-1/2 transform text-white">
            Votre JobiBox
          </h2>
          <div class="flex h-full flex-wrap items-end justify-center gap-6 p-4">
            <div class="button-card fall-delay-1 w-full max-w-[16rem] transform rounded-[12px] bg-gradient-to-r from-pink-500 to-purple-500 px-8 py-4 shadow-lg sm:max-w-[18rem] sm:-translate-x-4 sm:-translate-y-6 sm:rotate-[-20deg]">
              <div class="flex items-center space-x-2">
                <Pencil />
                <span class="font-semibold sm:text-xl">PERSONNALISABLE</span>
              </div>
            </div>

            <div class="button-card fall-delay-2 w-full max-w-[16rem] transform rounded-[12px] bg-gradient-to-r from-orange-500 to-red-500 px-8 py-4 shadow-lg sm:max-w-[26rem] sm:rotate-12">
              <div class="flex items-center space-x-2">
                <Audio />
                <span class="font-semibold sm:text-xl">ACOUSTIQUE</span>
              </div>
            </div>

            <div class="button-card fall-delay-3 w-full max-w-[16rem] transform rounded-[12px] bg-gradient-to-r from-purple-500 to-blue-500 px-8 py-4 shadow-lg sm:-rotate-10">
              <div class="flex items-center space-x-2">
                <Camera />
                <span class="font-semibold sm:text-xl">CAMÉRA 4K</span>
              </div>
            </div>

            <div class="button-card fall-delay-4 w-full max-w-[16rem] transform rounded-[12px] bg-gradient-to-r from-blue-500 to-cyan-500 px-8 py-4 shadow-lg sm:max-w-[20rem] sm:-rotate-6">
              <div class="flex items-center space-x-2">
                <Heart />
                <span class="font-semibold sm:text-xl">FABRICATION LOCALE</span>
              </div>
            </div>

            <div class="button-card fall-delay-5 w-full max-w-[16rem] transform rounded-[12px] bg-gradient-to-r from-green-500 to-emerald-500 px-8 py-4 shadow-lg sm:max-w-[26rem] sm:rotate-10">
              <div class="flex items-center space-x-2">
                <Cloud />
                <span class="font-semibold sm:text-xl">
                  CONNEXION CLOUD SÉCURISÉE
                </span>
              </div>
            </div>

            <div class="button-card fall-delay-6 w-full max-w-[16rem] transform rounded-[12px] bg-gradient-to-r from-purple-600 to-pink-500 px-8 py-4 shadow-lg sm:max-w-[26rem]">
              <div class="flex items-center space-x-2">
                <Screen />
                <span class="font-semibold sm:text-xl">ÉCRAN TACTILE 24"</span>
              </div>
            </div>

            <div class="button-card fall-delay-7 w-full max-w-[16rem] transform rounded-[12px] bg-gradient-to-r from-yellow-500 to-orange-500 px-8 py-4 shadow-lg sm:max-w-[26rem]">
              <div class="flex items-center space-x-2">
                <Light />
                <span class="font-semibold sm:text-xl">
                  ÉCLAIRAGE LED INTÉGRÉ
                </span>
              </div>
            </div>

            <div class="button-card fall-delay-8 w-full max-w-[16rem] transform rounded-[12px] bg-gradient-to-r from-purple-500 to-indigo-500 px-8 py-4 shadow-lg sm:max-w-[26rem]">
              <div class="flex items-center space-x-2">
                <Shield />
                <span class="font-semibold sm:text-xl">GARANTIE DE 1 AN</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
