import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Home } from "~/pages/home";
import backgroundImage from "~/assets/background.avif";
import backgroundImageMobile from "~/assets/background-mobile.avif";

export default component$(() => {
  return <Home />;
});

export const head: DocumentHead = {
  title: "Jobibox",
  meta: [
    {
      name: "description",
      content:
        "La JobiBox est une cabine insonorisée qui vous permet de créer un CV vidéo pro, seul·e, en quelques minutes grâce à une interface simple et guidée.",
    },
    {
      property: "og:title",
      content: "Jobibox",
    },
    {
      property: "og:description",
      content:
        "La JobiBox est une cabine insonorisée qui vous permet de créer un CV vidéo pro, seul·e, en quelques minutes grâce à une interface simple et guidée.",
    },
    {
      property: "og:url",
      content: "https://jobibox.fr/",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:image",
      content: "https://jobibox.fr/share.jpg",
    },
    {
      property: "og:image:width",
      content: "1200",
    },
    {
      property: "og:image:height",
      content: "630",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:title",
      content: "Jobibox",
    },
    {
      name: "twitter:description",
      content:
        "La JobiBox est une cabine insonorisée qui vous permet de créer un CV vidéo pro, seul·e, en quelques minutes grâce à une interface simple et guidée.",
    },
    {
      name: "twitter:image",
      content: "https://jobibox.fr/share.jpg",
    },
  ],

  links: [
    {
      rel: "preload",
      as: "image",
      href: backgroundImage,
      media: "(min-width: 768px)",
    },
    {
      rel: "preload",
      as: "image",
      href: backgroundImageMobile,
      media: "(max-width: 767px)",
    },
    {
      rel: "canonical",
      href: "https://jobibox.fr/",
    },
  ],
};
