import { component$, Slot } from "@builder.io/qwik";
import { Modal as ModalProps } from "~/models/modal";

export const Modal = component$(
  ({
    open,
    title,
    onClose$,
    onConfirm$,
    cancelLabel = "Annuler",
    confirmLabel = "Valider",
    hideActions = false,
  }: ModalProps & { hideActions?: boolean }) => {
    if (!open) return null;

    return (
      <div
        class="fixed inset-0 z-[1000] flex items-center justify-center px-4 sm:px-6"
        aria-modal="true"
        role="dialog"
        onKeyDown$={(e) => {
          if ((e as KeyboardEvent).key === "Escape") onClose$();
        }}
      >
        <div
          class="absolute inset-0 bg-black/50 backdrop-blur-[2px]"
          onClick$={onClose$}
        />

        <div
          class="relative z-10 w-full max-w-lg rounded-2xl bg-white shadow-2xl ring-1 ring-black/5"
          onClick$={(e) => e.stopPropagation()}
        >
          <div class="rounded-t-2xl bg-gradient-to-b from-[#4a4199] to-[#753985] p-5 sm:p-7">
            <button
              type="button"
              aria-label="Fermer"
              class="absolute top-3 right-3 rounded-md bg-[#2E104E] p-2 text-white focus:outline-none"
              onClick$={onClose$}
            >
              ✕
            </button>

            {title && (
              <h3 class="mb-3 pr-8 text-xl text-white sm:text-2xl">{title}</h3>
            )}
          </div>

          <div class="p-5 text-sm text-[#2E104E] sm:p-7 sm:text-base">
            <Slot />

            {!hideActions && (
              <div class="mt-6 flex justify-center gap-3">
                <button
                  type="button"
                  class="rounded-xl border border-[#E7E5E9] bg-white px-4 py-2 text-sm text-[#2E104E] hover:bg-[#F8F6FE]"
                  onClick$={onClose$}
                >
                  {cancelLabel}
                </button>

                <button
                  type="button"
                  class="rounded-xl bg-[#2E104E] px-4 py-2 text-sm text-white hover:bg-[#6626AA]"
                  onClick$={() => onConfirm$?.()}
                >
                  {confirmLabel}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  },
);
