import { component$, QRL } from "@builder.io/qwik";
import { ArrowLeft } from "~/components/common/Icons/ArrowLeft";

import "./index.scss";

export const InterviewModal = component$(
  (props: { onClose: QRL<() => void> }) => {
    return (
      <div class="modal-bg fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm">
        <div class="relative h-full w-full p-6">
          <button
            onClick$={props.onClose}
            class="absolute top-6 left-6 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-white/30"
          >
            <ArrowLeft />
          </button>

          <div class="flex h-full flex-col items-center justify-center text-center"></div>
        </div>
      </div>
    );
  },
);
