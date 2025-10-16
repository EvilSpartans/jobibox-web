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

    handleScroll();

    const handleClickOutside = (event: MouseEvent) => {
      const sidebar = document.querySelector(".mobile-navbar");
      if (isOpen.value && sidebar && !sidebar.contains(event.target as Node)) {
        isOpen.value = false;
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
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
        <WhiteButton label="Découvrir la JobiBox" />
      </a>

      <div
        class={`mobile-navbar fixed top-0 right-0 z-50 h-full w-64 transform rounded-l-2xl bg-gradient-to-b from-[#2E104E] via-[#4a4199] to-[#753985] opacity-95 shadow-2xl backdrop-blur-md transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:opacity-100 md:w-80 lg:hidden ${
          isOpen.value ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div class="relative flex items-center justify-between border-b border-white/20 p-6">
          <h3 class="text-2xl font-semibold tracking-wide text-white">
            JobiBox
          </h3>
          <button
            type="button"
            aria-label="Fermer le menu"
            class="rounded-full bg-white/10 p-2 text-white backdrop-blur-md transition hover:bg-white/20 focus:outline-none"
            onClick$={() => (isOpen.value = false)}
          >
            ✕
          </button>
        </div>

        <ul class="flex flex-col gap-5 p-6 text-lg font-medium text-white/90">
          <li>
            <a
              href="#features"
              onClick$={() => {
                document
                  .getElementById("features")
                  ?.scrollIntoView({ behavior: "smooth" });
                isOpen.value = false;
              }}
              class="transition-all duration-200 hover:translate-x-1 hover:text-white"
            >
              Fonctionnalité
            </a>
          </li>
          <li>
            <a
              href="#technology"
              onClick$={() => {
                document
                  .getElementById("technology")
                  ?.scrollIntoView({ behavior: "smooth" });
                isOpen.value = false;
              }}
              class="transition-all duration-200 hover:translate-x-1 hover:text-white"
            >
              Technologie
            </a>
          </li>
          <li>
            <a
              href="#recruiter"
              onClick$={() => {
                document
                  .getElementById("recruiter")
                  ?.scrollIntoView({ behavior: "smooth" });
                isOpen.value = false;
              }}
              class="transition-all duration-200 hover:translate-x-1 hover:text-white"
            >
              Recruteur
            </a>
          </li>
          <li>
            <a
              href="#findJobiBox"
              onClick$={() => {
                document
                  .getElementById("findJobiBox")
                  ?.scrollIntoView({ behavior: "smooth" });
                isOpen.value = false;
              }}
              class="transition-all duration-200 hover:translate-x-1 hover:text-white"
            >
              Trouve une JobiBox
            </a>
          </li>
          <li>
            <a
              href="#jobiTruck"
              onClick$={() => {
                document
                  .getElementById("jobiTruck")
                  ?.scrollIntoView({ behavior: "smooth" });
                isOpen.value = false;
              }}
              class="transition-all duration-200 hover:translate-x-1 hover:text-white"
            >
              JobiTruck
            </a>
          </li>
          <li>
            <a
              href="#faq"
              onClick$={() => {
                document
                  .getElementById("faq")
                  ?.scrollIntoView({ behavior: "smooth" });
                isOpen.value = false;
              }}
              class="transition-all duration-200 hover:translate-x-1 hover:text-white"
            >
              FAQ
            </a>
          </li>
        </ul>

        <div class="ml-2">
          {" "}
          <PurpleButton
            label="Découvrir la JobiBox"
            onClick$={() => {
              document
                .getElementById("jobibox")
                ?.scrollIntoView({ behavior: "smooth" });
              isOpen.value = false;
            }}
          />{" "}
        </div>
      </div>
    </nav>
  );
});
