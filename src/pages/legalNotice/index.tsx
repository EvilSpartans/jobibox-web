import { component$ } from "@builder.io/qwik";
import "./index.scss";

export const LegalNotice = component$(() => {
  return (
    <div class="mx-auto max-w-4xl p-6">
      <h1 class="mb-4 text-3xl font-bold">Mentions légales</h1>

      <p class="mb-4">
        Ce site est édité par <strong>JobiBox</strong>, une société immatriculée
        dont le siège social est situé au 123 rue Exemple, Paris, France.
      </p>

      <p class="mb-4">Directeur de la publication : Alexis Moren</p>

      <p class="mb-4">
        Hébergeur : OVH, 2 rue Kellermann, 59100 Roubaix, France
      </p>

      <p class="mb-4">
        Pour toute question, vous pouvez nous contacter à l’adresse suivante :{" "}
        <a href="mailto:contact@jobibox.fr" class="text-blue-600 underline">
          contact@jobibox.fr
        </a>
      </p>
    </div>
  );
});
