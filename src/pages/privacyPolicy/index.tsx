import { component$ } from "@builder.io/qwik";
import "./index.scss";

export const PrivacyPolicy = component$(() => {
  return (
    <div class="mx-auto max-w-4xl p-6">
      <h1 class="mb-4 text-3xl font-bold">Politique de confidentialité</h1>

      <p class="mb-4">
        Chez <strong>JobiBox</strong>, nous attachons une grande importance à la
        protection de vos données personnelles. Cette politique de
        confidentialité explique quelles données nous collectons, comment nous
        les utilisons et quels sont vos droits.
      </p>

      <p class="mb-4">
        Les données collectées peuvent inclure votre nom, adresse e-mail, numéro
        de téléphone ou toute autre information nécessaire au bon fonctionnement
        de nos services.
      </p>

      <p class="mb-4">
        Vos données ne sont jamais revendues à des tiers. Elles sont utilisées
        exclusivement dans le cadre de votre utilisation de notre plateforme.
      </p>

      <p class="mb-4">
        Conformément à la loi "Informatique et Libertés" et au RGPD, vous
        disposez d’un droit d’accès, de rectification et de suppression de vos
        données. Pour exercer ces droits, vous pouvez nous écrire à l’adresse
        suivante :{" "}
        <a href="mailto:contact@jobibox.fr" class="text-blue-600 underline">
          contact@jobibox.fr
        </a>
      </p>

      <p class="mb-4">
        Cette politique peut être mise à jour à tout moment. Dernière mise à
        jour : août 2025.
      </p>
    </div>
  );
});
