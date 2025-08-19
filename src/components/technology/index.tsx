import { $, component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import { Modal } from "../shared/modal";
import { ContactForm } from "~/forms/contact.form";
import frame from "../../assets/Frame.svg";
import photo from "../../assets/video-image1.webp";
import video from "../../assets/jobibox.webm";
import { PurpleButton } from "../common/buttons/PurpleButton";
import { GradientSubtitle } from "../common/titles/GradientSubtitle";

export const Technology = component$(() => {
  const showModal = useSignal(false);
  const showVideoModal = useSignal(false);
  const videoRef = useSignal<HTMLVideoElement>();
  const submitContact = useSignal<null | (() => Promise<void>)>(null);

    useVisibleTask$(({ track }) => {
    track(() => showVideoModal.value);
    if (!showVideoModal.value && videoRef.value) {
      videoRef.value.pause();
    }
  });

  return (
    <section
      id="technology"
      style="font-family: 'Manrope', sans-serif;"
      class="flex min-h-screen items-center justify-center px-4 py-8 sm:px-6 lg:py-0"
    >
      <div class="flex w-full max-w-7xl flex-col-reverse items-center justify-between gap-10 rounded-3xl bg-[#EEF0FC] px-4 py-8 sm:px-6 md:px-8 lg:flex-row lg:gap-16">
        <div class="w-full text-center lg:w-1/2 lg:text-left">
          <h1 class="mb-4 text-2xl leading-tight text-[#2E104E] sm:text-4xl md:text-5xl">
            JobiBox, expliqué
          </h1>

          <GradientSubtitle text="simplement en vidéo" />

          {/* <p class="mb-8 text-sm leading-relaxed text-[#2E104E] sm:text-base md:text-lg">
            On vous montre comment JobiBox vous connecte aux bonnes missions (ou
            aux bons talents), en toute simplicité. Regardez, c’est plus clair
            que mille mots.
          </p> */}

          <div class="mt-8 flex justify-center lg:justify-start">
            <PurpleButton
              label="En savoir plus"
              onClick$={() => (showModal.value = true)}
            />
          </div>
        </div>

        <div class="relative flex w-full justify-center lg:w-1/2">
          <img
            src={photo}
            loading="lazy"
            decoding="async"
            alt="Vidéo démonstration JobiBox"
            class="h-80 w-full max-w-xs object-cover sm:max-w-sm md:h-120 md:max-w-md lg:h-160 lg:max-w-lg"
          />

          <div
            class="absolute top-1/2 left-1/2 flex h-[135px] w-[135px] -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-[#2E104E] transition-all duration-300 ease-in-out hover:bg-[#6626AA]"
            onClick$={() => (showVideoModal.value = true)}
          >
            <img src={frame} alt="Lecture" class="h-full w-full p-8" />
          </div>
        </div>

        <Modal
          open={showModal.value}
          title="Demander des informations"
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

        <Modal
          open={showVideoModal.value}
          title="Vidéo JobiBox"
          onClose$={() => (showVideoModal.value = false)}
          hideActions
        >
          <video
            src={video}
            ref={videoRef}
            controls
            class="w-full rounded-xl"
          />
        </Modal>
      </div>
    </section>
  );
});
