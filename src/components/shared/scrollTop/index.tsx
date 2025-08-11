import { $, component$, useVisibleTask$, useSignal } from "@builder.io/qwik";

export const ScrollTop = component$(() => {
  const showButton = useSignal(false);

  useVisibleTask$(() => {
    const toggleVisibility = () => {
      showButton.value = window.scrollY > 300;
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  });

  return (
    <button
      onClick$={$(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      })}
      class={`fixed right-6 bottom-6 z-50 rounded-full bg-[rgb(46,16,78)] p-3 text-white shadow-md transition-all hover:bg-white hover:text-[rgb(46,16,78)] ${
        showButton.value ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
      aria-label="Remonter en haut"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
    </button>
  );
});
