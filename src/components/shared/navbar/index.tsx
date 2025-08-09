import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
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
      <div class="text-3xl text-white">JobiBox</div>
      <button
        class="text-2xl text-white focus:outline-none md:hidden"
        onClick$={() => (isOpen.value = !isOpen.value)}
        aria-label="Ouvrir le menu"
      >
        {isOpen.value ? "✖" : "☰"}
      </button>

      <ul class="hidden flex-wrap items-center gap-6 font-medium text-white md:flex">
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
        {/* <li>
          <a href="#faq" class="hover:text-[#9456ED]">
            FAQ
          </a>
        </li> */}
      </ul>

      <a href="#jobibox" class="hidden md:flex">
        <WhiteButton label="Découvrir la jobibox" />
      </a>

      {isOpen.value && (
        <div class="fixed top-0 right-0 z-50 h-full w-64 bg-white p-6 shadow-lg transition-transform duration-300 md:hidden">
          <div class="mb-4 flex justify-end">
            <button
              class="mb-4 text-xl text-[#2E104E] focus:outline-none"
              onClick$={() => (isOpen.value = false)}
              aria-label="Fermer le menu"
            >
              ✖
            </button>
          </div>

          <ul class="flex flex-col gap-4 font-medium text-[#2E104E]">
            <li>
              <a href="#jobibox" class="hover:text-[#9456ED]">
                La JobiBox
              </a>
            </li>
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
            <li>
              <a href="#jobibox">
                <WhiteButton label="Découvrir la jobibox" />
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
});
