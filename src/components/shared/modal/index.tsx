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
        {/* Arrière-plan flouté */}
        <div
          class="absolute inset-0 bg-black/50 backdrop-blur-[2px]"
          onClick$={onClose$}
        />

        {/* Conteneur principal */}
        <div
          class="relative z-10 w-full max-w-lg overflow-hidden rounded-2xl border border-white/40 bg-gradient-to-b from-white via-[#fdf9ff] to-[#f3ecff] shadow-[0_0_40px_rgba(0,0,0,0.2)] backdrop-blur-lg"
          onClick$={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div class="relative rounded-t-2xl bg-gradient-to-r from-[#4a4199] via-[#753985] to-[#9456ED] p-5 text-center shadow-md sm:p-7">
            <div class="absolute inset-0 -z-10 rounded-t-2xl bg-white/10"></div>
            <h3 class="text-xl font-semibold text-white sm:text-2xl">
              {title}
            </h3>

            <button
              type="button"
              aria-label="Fermer"
              class="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/15 text-white shadow-inner transition-all hover:bg-white/25 focus:outline-none sm:top-5 sm:right-5 sm:h-9 sm:w-9"
              onClick$={onClose$}
            >
              ✕
            </button>
          </div>

          {/* Contenu */}
          <div class="p-5 text-sm text-[#2E104E] sm:p-7 sm:text-base">
            <Slot />

            {!hideActions && (
              <div class="mt-8 flex justify-center gap-4">
                <button
                  type="button"
                  class="rounded-full border border-[#E7E5E9]/60 bg-white/80 px-5 py-2.5 text-sm font-medium text-[#2E104E] backdrop-blur-sm transition-all hover:bg-[#F8F6FE] hover:shadow-inner"
                  onClick$={onClose$}
                >
                  {cancelLabel}
                </button>

                <button
                  type="button"
                  class="rounded-full bg-gradient-to-r from-[#4a4199] via-[#753985] to-[#9456ED] px-5 py-2.5 text-sm font-medium text-white shadow-lg transition-all hover:brightness-110 active:scale-[0.98]"
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
