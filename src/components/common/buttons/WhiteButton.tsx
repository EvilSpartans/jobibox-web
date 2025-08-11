import { component$, QRL } from "@builder.io/qwik";
import { ArrowRight } from "../Icons/ArrowRight";

interface WhiteButtonProps {
  label: string;
  onClick$?: QRL<() => void>;
}

export const WhiteButton = component$(
  ({ label, onClick$ }: WhiteButtonProps) => {
    return (
      <button
        onClick$={onClick$}
        class="group flex items-center gap-3 space-x-2 rounded-full border border-[#2E104E] bg-white px-3 py-1.5 text-sm text-[#2E104E] backdrop-blur-sm transition-all duration-300 hover:bg-[#2E104E] hover:text-white sm:px-6 sm:py-3 sm:text-base"
      >
        {label}
        <div class="rounded-full bg-[#2E104E] p-1.5 text-white transition-colors group-hover:bg-white group-hover:text-[#2E104E]">
          <ArrowRight />
        </div>
      </button>
    );
  }
);
