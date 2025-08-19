import { component$ } from "@builder.io/qwik";
import { WhiteButton } from "../common/buttons/WhiteButton";
import videoImg from "../../assets/cvtheque.avif";

export const Recruiter = component$(() => {
  return (
    <section
      id="recruiter"
      class="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#4a4199] to-[#753985] px-6 py-8 text-white md:py-8 lg:py-0 lg:pb-40"
      style="font-family: 'Manrope', sans-serif;"
    >
      <div class="mx-auto max-w-7xl px-8 pt-10 text-center">
        <h1 class="my-6 text-3xl font-semibold md:text-6xl">
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
          class="block w-full rounded-2xl object-contain"
          loading="lazy"
          decoding="async"
          alt="cvtheque"
        />
      </div>
    </section>
  );
});
