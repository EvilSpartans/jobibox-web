import { component$ } from "@builder.io/qwik";

export const Camera = component$(() => (
  <svg class="h-8 w-8 sm:h-6 sm:w-6" fill="currentColor" viewBox="0 0 20 20">
    <path
      fill-rule="evenodd"
      d="M4 5a2 2 0 00-2 2v6a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-5L9 3H4z"
      clip-rule="evenodd"
    />
  </svg>
));
