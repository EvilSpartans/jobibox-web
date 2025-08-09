import { component$ } from "@builder.io/qwik";

import "./index.scss";
import img1 from "../../assets/profile1.webp";
import img2 from "../../assets/profile2.webp";
import img3 from "../../assets/profile3.webp";
import { WhiteButton } from "../common/buttons/WhiteButton";
import videoImg from "../../assets/cvtheque.webp";

export const Recruiter = component$(() => {
  const videos = [
    { id: 1, name: "Plaquiste", image: img1 },
    { id: 2, name: "Plaquiste", image: img2 },
    { id: 3, name: "Plaquiste", image: img3 },
    { id: 4, name: "Plaquiste", image: img1 },
    { id: 5, name: "Plaquiste", image: img2 },
    { id: 6, name: "Plaquiste", image: img3 },
    { id: 7, name: "Plaquiste", image: img1 },
    { id: 8, name: "Plaquiste", image: img2 },
    { id: 9, name: "Plaquiste", image: img3 },
  ];

  return (
    <section
      id="recruiter"
      class="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#4a4199] to-[#753985] px-6 py-8 text-white md:py-8 lg:py-0 lg:pb-40"
      style="font-family: 'Manrope', sans-serif;"
    >
      <div class="mx-auto max-w-7xl px-8 text-center">
        <h1 class="mb-6 text-3xl font-semibold md:text-6xl">
          Augmentez votre visibilité
        </h1>
        <h1 class="instrument-serif-italic mb-6 text-4xl font-semibold md:text-6xl">
          auprès des recruteurs
        </h1>

        <p class="mb-4 text-xl font-light text-purple-200 md:text-2xl">
          Avec Jobissim, votre CV vidéo est directement visible sur Jobibox. Les
          recruteurs vous découvrent en quelques secondes, avec votre
          personnalité et vos compétences.
        </p>
      </div>

      <div class="mb-12">
        <WhiteButton
          label="Découvrir Jobissim"
          onClick$={() => {
            window.open("https://jobissim.com", "_blank");
          }}
        />
      </div>

      <div class="relative w-full max-w-7xl px-8">
        <img
          src={videoImg}
          class="hidden max-h-[500px] w-full rounded-2xl object-contain md:block"
          loading="lazy"
          decoding="async"
          alt="cvtheque"
        />

        {/* Slider superposé */}
        <div class="relative z-10 w-full max-w-7xl px-8 md:absolute md:-bottom-24 md:left-1/2 md:-translate-x-1/2">
          <div class="recruiter-carousel-wrapper rounded-xl bg-transparent shadow-2xl ring-1 ring-white/10">
            <div class="recruiter-carousel-track">
              {[...videos, ...videos].map((video, index) => (
                <div
                  key={index}
                  class="recruiter-carousel-item group relative h-72 w-60 flex-shrink-0 cursor-pointer overflow-hidden rounded-xl"
                >
                  <div class="flex h-full w-full items-center justify-end">
                    <img
                      loading="lazy"
                      decoding="async"
                      src={video.image}
                      class="h-full w-full object-cover"
                      alt="slider profile"
                    />
                  </div>

                  <div class="absolute inset-0 bg-black/20 transition-all duration-300 group-hover:bg-black/40">
                    <div class="absolute right-4 bottom-4 left-4">
                      <div class="flex items-center justify-between">
                        <span class="text-lg font-medium text-white">
                          {video.name}
                        </span>
                      </div>
                      <div class="mt-2 flex space-x-2">
                        <span class="text-md rounded-3xl bg-white px-2 py-1 text-black">
                          CDI
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
