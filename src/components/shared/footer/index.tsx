import { component$ } from "@builder.io/qwik";

export const Footer = component$(() => {
  return (
    <footer class="bg-[#09151B] px-6 py-10 font-medium text-white">
      <div class="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
        {/* Logo JobiBox */}
        <div class="text-3xl text-white">JobiBox</div>

        {/* Liens */}
        <ul class="flex flex-wrap justify-center gap-6">
          <li>
            <a
              href="#features"
              class="transition-colors duration-200 hover:text-[#9456ED]"
            >
              Fonctionnalité
            </a>
          </li>
          <li>
            <a
              href="#technology"
              class="transition-colors duration-200 hover:text-[#9456ED]"
            >
              Technologie
            </a>
          </li>
          <li>
            <a
              href="#recruiter"
              class="transition-colors duration-200 hover:text-[#9456ED]"
            >
              Recruteur
            </a>
          </li>
          <li>
            <a
              href="#findJobiBox"
              class="transition-colors duration-200 hover:text-[#9456ED]"
            >
              Trouve une JobiBox
            </a>
          </li>
          <li>
            <a
              href="#jobiTruck"
              class="transition-colors duration-200 hover:text-[#9456ED]"
            >
              JobiTruck
            </a>
          </li>
          {/* <li>
            <a
              href="#faq"
              class="transition-colors duration-200 hover:text-[#9456ED]"
            >
              FAQ
            </a>
          </li> */}
        </ul>
      </div>

      {/* Mentions légales en dessous */}
      <div class="mt-8 border-t border-white/10 pt-6 text-center text-white/70">
<p>{new Date().getFullYear()} JobiBox © Conçue avec 💜 par Jobissim</p>


        <ul class="mt-4 flex flex-wrap justify-center gap-4">
          <li>
            <a
              href="/legal-notice"
              class="transition-colors duration-200 hover:text-[#9456ED]"
            >
              Mentions légales
            </a>
          </li>
          <li>
            <a
              href="/privacy-policy"
              class="transition-colors duration-200 hover:text-[#9456ED]"
            >
              Politique de confidentialité
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
});
