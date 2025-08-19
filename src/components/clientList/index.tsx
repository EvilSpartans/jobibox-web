import { $, component$, useSignal } from "@builder.io/qwik";

import "./index.scss";
import { Modal } from "../shared/modal";
import { ContactForm } from "~/forms/contact.form";
import { PurpleButton } from "../common/buttons/PurpleButton";
import { GradientSubtitle } from "../common/titles/GradientSubtitle";
import { clientLogos } from "~/utils/clients";

export const ClientList = component$(() => {
  const showModal = useSignal(false);
  const submitContact = useSignal<null | (() => Promise<void>)>(null);

  return (
    <>
      <section
        id="technology"
        style="font-family: 'Manrope', sans-serif;"
        class="flex min-h-screen items-center justify-center px-4 py-8 sm:px-6 lg:py-0"
      >
        <div class="flex w-full max-w-7xl min-h-[700px] flex-col-reverse items-center justify-between gap-10 rounded-3xl bg-[#EEF0FC] px-4 py-8 sm:px-6 md:px-8 lg:flex-row lg:gap-16">
          <div class="w-full text-center lg:w-1/2 lg:text-left">
            <h1 class="mb-4 text-2xl leading-tight text-[#2E104E] sm:text-4xl md:text-5xl">
              Ces organismes
            </h1>

            <GradientSubtitle text="nous font confiance" />

            <p class="mb-8 text-sm leading-relaxed text-[#2E104E] sm:text-base md:text-lg">
              Ces organismes nous accompagnent pour simplifier la mise en
              relation et faciliter la création de CV vidéo pour tous. Ensemble,
              on rend le recrutement plus accessible et plus humain.
            </p>

            <div class="flex justify-center lg:justify-start">
              <PurpleButton
                label="Obtenir ma JobiBox"
                onClick$={() => (showModal.value = true)}
              />
            </div>
          </div>

          <div class="w-full lg:w-[48%]">
            <div class="relative h-[400px] w-full overflow-hidden rounded-xl bg-[#EEF0FC] px-2">
              <div class="absolute inset-0 flex flex-col justify-between py-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div
                    class="clientList-carousel-row h-[64px] overflow-hidden"
                    key={i}
                  >
                    <div
                      class={`clientList-carousel-track ${i % 2 === 0 ? "clientList-carousel-right" : "clientList-carousel-left"}`}
                    >
                      {clientLogos.map((client, index) => (
                        <div
                          key={`${i}-${index}`}
                          class="clientList-carousel-item flex items-center gap-3 rounded-[12px] border border-[#E7E5E9] bg-[#F8F6FE] px-3 py-2"
                        >
                          <img
                            width={40}
                            height={40}
                            src={client.logo}
                            class="rounded-sm border border-[#E7E5E9]"
                            alt="client"
                          />
                          <span class="text-xs font-medium text-[#2E104E]">
                            {client.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Modal
        open={showModal.value}
        title="Demander une JobiBox"
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
