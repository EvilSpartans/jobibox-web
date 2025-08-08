import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { FindJobiBox } from "~/pages/findJobiBox";

export default component$(() => {
  return <FindJobiBox />;
});

export const head: DocumentHead = {
  title: "Trouvez une JobiBox près de chez vous",
  meta: [
    {
      name: "description",
      content: "Trouvez une JobiBox près de chez vous",
    },
  ],
};
