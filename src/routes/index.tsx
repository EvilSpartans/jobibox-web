import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Home } from "~/pages/home";
import backgroundImage from "~/assets/background.avif"; 

export default component$(() => {
  return <Home />;
});

export const head: DocumentHead = {
  title: "Accueil",
  meta: [
    {
      name: "description",
      content: "Accueil",
    },
  ],
    links: [
    {
      rel: "preload",
      as: "image",
      href: backgroundImage
    }
  ]
};
