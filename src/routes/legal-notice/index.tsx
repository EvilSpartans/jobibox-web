import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { LegalNotice } from "~/pages/legalNotice";

export default component$(() => {
  return <LegalNotice />;
});

export const head: DocumentHead = {
  title: "Mentions légales",
  meta: [
    {
      name: "description",
      content: "Mentions légales",
    },
  ],
};
