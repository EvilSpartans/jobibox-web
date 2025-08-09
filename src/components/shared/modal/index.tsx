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
  }: ModalProps) => {
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
        {/* Backdrop (clic dehors) */}
        <div
          class="absolute inset-0 bg-black/50 backdrop-blur-[2px]"
          onClick$={onClose$}
        />

        {/* Conteneur modal */}
        <div
          class="relative z-10 w-full max-w-lg rounded-2xl bg-white p-5 shadow-2xl ring-1 ring-black/5 sm:p-6 md:p-7"
          onClick$={(e) => e.stopPropagation()}
        >
          {/* Bouton fermer */}
          <button
            type="button"
            aria-label="Fermer"
            class="absolute top-3 right-3 rounded-full p-2 text-[#2E104E] hover:bg-black/5 focus:outline-none cursor-pointer"
            onClick$={onClose$}
          >
            ✕
          </button>

          {/* Titre */}
          {title && (
            <h3 class="mb-3 pr-8 text-xl font-semibold text-[#2E104E] sm:text-2xl">
              {title}
            </h3>
          )}

          {/* Slot contenu */}
          <div class="text-sm text-[#2E104E] sm:text-base">
            <Slot />
          </div>

          {/* Boutons d'action */}
          <div class="mt-6 flex items-center justify-end gap-3">
            <button
              type="button"
              class="rounded-xl border border-[#E7E5E9] bg-white px-4 py-2 text-sm text-[#2E104E] hover:bg-[#F8F6FE] cursor-pointer"
              onClick$={onClose$}
            >
              {cancelLabel}
            </button>

            <button
              type="button"
              class="rounded-xl bg-[#2E104E] px-4 py-2 text-sm text-white hover:bg-[#6626AA] cursor-pointer"
              onClick$={() => onConfirm$?.()}
            >
              {confirmLabel}
            </button>
          </div>
        </div>
      </div>
    );
  },
);
