import { component$ } from "@builder.io/qwik";

import "./index.scss";
import truckImage from "../../assets/truck.webp";
import { WhiteButton } from "../common/buttons/WhiteButton";
import { GradientSubtitle } from "../common/titles/GradientSubtitle";

export const JobiTruck = component$(() => {
  return (
    <section
      id="jobiTruck"
      style="font-family: 'Manrope', sans-serif;"
      class="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-8"
    >
      <div class="absolute top-0 left-0 -z-10 h-full w-full overflow-hidden">
        <svg
          class="jobiTruck-bg"
          viewBox="0 0 1515 485"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-155.604 330.755C-193.758 385.801 -95.578 493.053 200.719 453.613C571.089 404.312 523.041 88.9324 949.845 31.6582C1376.65 -25.616 1460.11 202.956 1585.53 234.722C1685.87 260.134 1781.97 162.866 1817.48 111.055"
            stroke="url(#paint0_linear)"
            stroke-width="44"
          />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="-165.079"
              y1="347.242"
              x2="1811.4"
              y2="67.9821"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stop-color="#FEB24C" />
              <stop offset="0.2596" stop-color="#FF5C95" />
              <stop offset="0.625" stop-color="#B638CF" />
              <stop offset="1" stop-color="#7432F6" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div
        class="relative flex h-[700px] md:h-[500px] lg:h-[600px] w-full max-w-7xl items-center overflow-hidden rounded-[30px]"

        style={`background-image: linear-gradient(270deg, rgba(46, 16, 78, 0) 0%, #2E104E 70.74%), url(${truckImage}); background-size: cover; background-position: right center; background-repeat: no-repeat;`}
      >
        <div class="relative z-10 flex h-full w-full flex-col justify-center p-6 md:p-8 lg:w-1/2 lg:p-12 xl:p-16">
          <div class="mb-6 lg:mb-8">
            <h1 class="mb-2 text-2xl leading-tight font-bold text-white md:text-3xl lg:text-4xl xl:text-5xl">
              Le JobiTruck :
            </h1>
            <GradientSubtitle text=" la Jobibox vient à vous" />
          </div>

          <div class="mb-8 lg:mb-10">
            <p class="max-w-md text-sm leading-relaxed text-white/90 md:text-base lg:text-lg">
              Un camion aux couleurs de Jobibox se déplace sur vos événements
              avec une cabine ambulante. Sur place, les participants peuvent
              créer leur CV vidéo en direct et découvrir tout un écosystème
              métiers.
            </p>
          </div>

          <div>
            <WhiteButton
              label="En savoir plus"
              onClick$={() => console.log("Clic!")}
            />
          </div>
        </div>
      </div>
    </section>
  );
});
