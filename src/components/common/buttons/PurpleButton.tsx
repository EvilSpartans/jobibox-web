import { component$, QRL } from "@builder.io/qwik";
import { ArrowRight } from "../Icons/ArrowRight";

interface PurpleButtonProps {
  label: string;
  onClick$?: QRL<() => void>;
  class?: string;
}

export const PurpleButton = component$((props: PurpleButtonProps) => {
  return (
    <button
      onClick$={props.onClick$}
      class={`group flex items-center space-x-3 rounded-full border border-white/30 bg-[#2E104E] px-6 py-3 text-base text-white backdrop-blur-sm transition-all duration-300 hover:bg-[#6626AA] sm:px-8 sm:py-4 sm:text-lg ${props.class ?? ""} `}
    >
      <span> {props.label}</span>
      <div class="rounded-full bg-white/50 p-2 transition-colors group-hover:bg-white/40">
        <ArrowRight />
      </div>
    </button>
  );
});
