import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import { PurpleButton } from "~/components/common/buttons/PurpleButton";
import { WhiteButton } from "~/components/common/buttons/WhiteButton";

export const Navbar = component$(() => {
  const isOpen = useSignal(false);
  const isScrolled = useSignal(false);

  useVisibleTask$(() => {
    const handleScroll = () => {
      isScrolled.value = window.scrollY > 50;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <nav
      class={`fixed top-0 left-0 z-50 w-full px-6 py-4 transition-all duration-500 ${
        isScrolled.value ? "bg-[#09151B] shadow-md" : "bg-transparent"
      } flex items-center justify-between`}
    >
      <a href="#hero" class="text-3xl text-white">
        JobiBox
      </a>
      <button
        class="text-2xl text-white focus:outline-none lg:hidden"
        onClick$={() => (isOpen.value = !isOpen.value)}
        aria-label="Ouvrir le menu"
      >
        {isOpen.value ? "✖" : "☰"}
      </button>

      <ul class="hidden flex-wrap items-center gap-6 font-medium text-white lg:flex">
        <li>
          <a href="#features" class="hover:text-[#9456ED]">
            Fonctionnalité
          </a>
        </li>
        <li>
          <a href="#technology" class="hover:text-[#9456ED]">
            Technologie
          </a>
        </li>
        <li>
          <a href="#recruiter" class="hover:text-[#9456ED]">
            Recruteur
          </a>
        </li>
        <li>
          <a href="#findJobiBox" class="hover:text-[#9456ED]">
            Trouve une JobiBox
          </a>
        </li>
        <li>
          <a href="#jobiTruck" class="hover:text-[#9456ED]">
            JobiTruck
          </a>
        </li>
        <li>
          <a href="#faq" class="hover:text-[#9456ED]">
            FAQ
          </a>
        </li>
      </ul>

      <a href="#jobibox" class="hidden lg:flex">
        <WhiteButton label="Découvrir la jobibox" />
      </a>

      {isOpen.value && (
        <div class="fixed top-0 right-0 z-50 h-full w-64 bg-white shadow-lg transition-transform duration-300 lg:hidden">
          <div class="bg-gradient-to-b from-[#4a4199] to-[#753985] p-5 sm:p-7">
            <button
              type="button"
              aria-label="Fermer le menu"
              class="absolute top-3 right-3 rounded-md bg-[#2E104E] p-2 text-white focus:outline-none"
              onClick$={() => (isOpen.value = false)}
            >
              ✕
            </button>

            <h3 class="mb-3 pr-8 text-2xl text-white">JobiBox</h3>
          </div>

          <ul class="flex flex-col gap-4 p-5 font-medium text-[#2E104E]">
            <li>
              <a href="#features" class="hover:text-[#9456ED]">
                Fonctionnalité
              </a>
            </li>
            <li>
              <a href="#technology" class="hover:text-[#9456ED]">
                Technologie
              </a>
            </li>
            <li>
              <a href="#recruiter" class="hover:text-[#9456ED]">
                Recruteur
              </a>
            </li>
            <li>
              <a href="#findJobiBox" class="hover:text-[#9456ED]">
                Trouve une JobiBox
              </a>
            </li>
            <li>
              <a href="#jobiTruck" class="hover:text-[#9456ED]">
                JobiTruck
              </a>
            </li>
            <li>
              <a href="#faq" class="hover:text-[#9456ED]">
                FAQ
              </a>
            </li>
          </ul>
          <div class="ml-2">
            <a href="#jobibox">
              <PurpleButton label="Découvrir la jobibox" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
});
