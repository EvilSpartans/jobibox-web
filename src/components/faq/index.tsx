import { $, component$, useSignal } from "@builder.io/qwik";

import { Modal } from "../shared/modal";
import { ContactForm } from "~/forms/contact.form";
import { WhiteButton } from "../common/buttons/WhiteButton";

export const Faq = component$(() => {
  const openQuestion = useSignal<number | null>(null);

  const toggleQuestion = $((index: number) => {
    openQuestion.value = openQuestion.value === index ? null : index;
  });

  const showModal = useSignal(false);
  const submitContact = useSignal<null | (() => Promise<void>)>(null);

  const faqData = [
    {
      question: "Faut-il prendre rendez-vous pour utiliser la Jobibox ?",
      answer:
        "Oui, il est préférable de réserver un créneau à l'avance pour garantir la disponibilité de la cabine. La réservation se fait en ligne en quelques clics, à la date et à l'heure qui vous conviennent.",
    },
    {
      question: "Combien de temps dure une séance de CV vidéo ?",
      answer:
        "Une séance de CV vidéo dure généralement entre 15 et 30 minutes. Ce temps vous permet de vous présenter, de parler de votre parcours et de vos motivations de manière naturelle et authentique.",
    },
    {
      question:
        "Puis-je recommencer l'enregistrement si je ne suis pas satisfait.e ?",
      answer:
        "Absolument ! Vous pouvez refaire votre enregistrement autant de fois que nécessaire pendant votre créneau réservé. L'objectif est que vous soyez entièrement satisfait.e de votre CV vidéo avant de le finaliser.",
    },
    {
      question: "Comment récupère-t-on la vidéo une fois enregistrée ?",
      answer:
        "Une fois votre enregistrement terminé, vous recevrez un lien de téléchargement par email. Vous pourrez également accéder à votre vidéo via votre espace personnel sur la plateforme Jobibox.",
    },
  ];

  return (
    <>
      <section
        id="faq"
        class="flex min-h-screen flex-col items-center bg-gradient-to-b from-[#4a4199] to-[#753985] px-6 py-20 text-white"
      >
        <div class="mx-auto max-w-7xl px-8 pt-10 text-center">
          <h1 class="mb-6 text-center text-3xl font-semibold md:text-6xl">
            Une question sur{" "}
            <span class="instrument-serif-italic">la Jobibox</span>
          </h1>
          <p class="mb-4 text-xl font-light text-purple-200 md:text-2xl">
            Toutes les infos qu'il vous faut pour profiter pleinement de votre
            expérience Jobibox.
          </p>
        </div>

        <div class="mb-12">
          <WhiteButton
            label="Nous contacter"
            onClick$={() => (showModal.value = true)}
          />
        </div>

        <div class="w-full max-w-4xl space-y-4 px-4 sm:px-0">
          {faqData.map((item, index) => (
            <div
              key={index}
              class="overflow-hidden rounded-2xl border border-[#A582D6] bg-[#2E104ECC] backdrop-blur-sm transition-all duration-300"
            >
              <button
                class="flex w-full items-center justify-between px-6 py-4 text-left transition-colors duration-200 hover:bg-white/5"
                onClick$={() => toggleQuestion(index)}
              >
                <span class="pr-4 text-lg font-medium text-white">
                  {item.question}
                </span>
                <div class="flex-shrink-0">
                  <div
                    class={`flex h-8 w-8 items-center justify-center rounded-md border-2 border-white/30 transition-all duration-300 ${
                      openQuestion.value === index
                        ? "border-white/60 bg-white"
                        : "hover:border-white/50"
                    }`}
                  >
                    <span
                      class={`text-xl font-light transition-transform duration-300 ${
                        openQuestion.value === index
                          ? "rotate-45 text-[#2E104E]"
                          : "text-white"
                      }`}
                    >
                      +
                    </span>
                  </div>
                </div>
              </button>

              <div
                class={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openQuestion.value === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div class="px-6 pt-2 pb-6">
                  <p class="text-base leading-relaxed text-purple-100">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
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
