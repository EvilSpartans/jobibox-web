import { component$ } from "@builder.io/qwik";

export const ArrowLeft = component$(() => (
  <svg
    class="h-6 w-6 text-white"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M15 19l-7-7 7-7"
    />
  </svg>
));
