import { $, component$, useSignal } from "@builder.io/qwik";

import { Modal } from "../shared/modal";
import jobiboxImg from "../../assets/jobibox.avif";
import { ContactForm } from "~/forms/contact.form";
import { WhiteButton } from "../common/buttons/WhiteButton";
import { GradientSubtitle } from "../common/titles/GradientSubtitle";

export const JobiBox = component$(() => {
  const showModal = useSignal(false);
  const submitContact = useSignal<null | (() => Promise<void>)>(null);

  return (
    <>
      <section
        id="jobibox"
        class="flex min-h-screen items-center justify-center bg-gradient-to-b from-[#09151B] to-[#9456ED] px-4 py-12 sm:px-6"
      >
        <div class="flex w-full max-w-7xl flex-col-reverse items-center justify-between gap-10 lg:flex-row lg:gap-20">
          <div class="w-full text-center text-white lg:w-1/2 lg:text-left">
            <h1
              class="mb-4 text-2xl leading-snug font-semibold sm:text-4xl md:text-5xl"
              style="font-family: 'Manrope', sans-serif;"
            >
              La Jobibox, bien plus
            </h1>

            <GradientSubtitle text="qu'une simple cabine" />

            <p class="mb-8 text-sm leading-relaxed text-white sm:text-base md:text-lg">
              Une cabine pensée pour connecter talents et recruteurs en toute
              simplicité. Créez votre CV vidéo ou trouvez un profil en quelques
              minutes, sans CV papier ni formulaire à rallonge. Tout se passe
              directement dans la Jobibox, en autonomie.
            </p>

            <div class="flex justify-center lg:justify-start">
              <WhiteButton
                label="Obtenir une jobibox"
                onClick$={() => (showModal.value = true)}
              />
            </div>
          </div>

          <div class="flex w-full justify-center lg:w-1/2">
            <img
              loading="lazy"
              decoding="async"
              src={jobiboxImg}
              alt="Jobibox"
              class="h-auto w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
            />
          </div>
        </div>
      </section>

      <Modal
        open={showModal.value}
        title="Demander une Jobibox"
        onClose$={() => (showModal.value = false)}
        onConfirm$={$(() => submitContact.value?.())}
        confirmLabel="Valider"
        cancelLabel="Annuler"
      >
        <div
          class="modal-content-scrollable"
          style="max-height:70vh; overflow-y:auto; padding-right:8px"
        >
          <ContactForm
            onRegisterSubmit$={$((fn) => (submitContact.value = fn))}
            onValidSubmit$={$((saved) => {
              console.log("Contact créé :", saved);
              showModal.value = false;
            })}
          />
        </div>
      </Modal>
    </>
  );
});
