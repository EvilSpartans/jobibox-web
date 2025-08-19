import { $, component$, useSignal } from "@builder.io/qwik";

import "./index.scss";
import { Modal } from "../shared/modal";
import { ContactForm } from "~/forms/contact.form";
import { WhiteButton } from "../common/buttons/WhiteButton";
import { jobiboxItems } from "~/utils/jobiboxItems";

export const JobiGallery = component$(() => {
  const showModal = useSignal(false);
  const submitContact = useSignal<null | (() => Promise<void>)>(null);
  const containerRef = useSignal<HTMLDivElement>();
  const isPaused = useSignal(false);

  return (
    <>
      <section
        id="jobiGallery"
        class="flex min-h-screen flex-col items-center bg-gradient-to-b from-[#4a4199] to-[#753985] px-6 py-20 text-white"
        style="font-family: 'Manrope', sans-serif;"
      >
        <h1 class="mb-6 text-center text-3xl font-semibold md:text-6xl">
          Ils sont déjà <span class="instrument-serif-italic">+100</span> à
          avoir adopté <br />
          la <span>JobiBox</span>...{" "}
          <span class="instrument-serif-italic">Et vous ?</span>
        </h1>

        <div class="mb-12">
          <WhiteButton
            label=" Obtenir ma JobiBox"
            onClick$={() => (showModal.value = true)}
          />
        </div>

        <div class="jobiGallery-carousel-container w-full" ref={containerRef}>
          <div
            class={`jobiGallery-carousel-track ${
              isPaused.value ? "is-paused" : ""
            }`}
          >
            {jobiboxItems.map((item, index) => (
              <div
                key={index}
                class="jobiGallery-carousel-item relative overflow-hidden rounded-2xl"
              >
                <img
                  src={item.src}
                  loading="lazy"
                  decoding="async"
                  alt={item.alt}
                  class="h-64 w-64 object-cover md:h-96 md:w-96"
                />
                <div
                  class="absolute bottom-0 left-0 w-full p-4 text-white md:p-6"
                  style={`background: ${item.gradient}`}
                >
                  <p class="text-sm font-bold md:text-base">{item.title}</p>
                  <p class="text-xs md:text-sm">{item.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Flèches de navigation */}
        <div class="mt-12 flex justify-center gap-4">
          <button
            class="flex items-center justify-center rounded-full bg-white/20 p-3 transition hover:bg-white/40"
            onClick$={$(() => {
              isPaused.value = true;
              const cont = containerRef.value;
              const item = cont?.querySelector(
                ".jobiGallery-carousel-item",
              ) as HTMLElement | null;
              const step = item
                ? item.offsetWidth +
                  parseFloat(getComputedStyle(item).marginRight)
                : 320;
              cont?.scrollBy({ left: -step, behavior: "smooth" });
            })}
            aria-label="Défiler à gauche"
          >
            {/* Icône flèche gauche */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            class="flex items-center justify-center rounded-full bg-white/20 p-3 transition hover:bg-white/40"
            onClick$={$(() => {
              isPaused.value = true;
              const cont = containerRef.value;
              const item = cont?.querySelector(
                ".jobiGallery-carousel-item",
              ) as HTMLElement | null;
              const step = item
                ? item.offsetWidth +
                  parseFloat(getComputedStyle(item).marginRight)
                : 320;
              cont?.scrollBy({ left: step, behavior: "smooth" });
            })}
            aria-label="Défiler à droite"
          >
            {/* Icône flèche droite */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
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
