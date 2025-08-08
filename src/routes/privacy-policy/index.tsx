import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { PrivacyPolicy } from "~/pages/privacyPolicy";

export default component$(() => {
  return <PrivacyPolicy />;
});

export const head: DocumentHead = {
  title: "Politique de confidentialité",
  meta: [
    {
      name: "description",
      content: "Politique de confidentialité",
    },
  ],
};
