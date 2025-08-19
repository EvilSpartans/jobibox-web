import { $, component$, useSignal } from "@builder.io/qwik";

import "./index.scss";
import { Modal } from "../modal";
import { ContactForm } from "~/forms/contact.form";
import { Youtube } from "~/components/common/Icons/Youtube";
import { Facebook } from "~/components/common/Icons/Facebook";
import { Linkedin } from "~/components/common/Icons/Linkedin";
import { Instagram } from "~/components/common/Icons/Instagram";
import { PurpleButton } from "~/components/common/buttons/PurpleButton";

export const Footer = component$(() => {
  const showModal = useSignal(false);
  const submitContact = useSignal<null | (() => Promise<void>)>(null);

  return (
    <>
      <footer class="bg-footer flex flex-col justify-end">
        <div class="h-[90%] w-full rounded-t-[60px] bg-white px-6 py-12 text-[#2E104E]">
          <div class="mx-auto grid max-w-7xl grid-cols-1 gap-10 md:grid-cols-4">
            <div>
              <h2 class="mb-4 text-2xl font-bold">JobiBox</h2>
              <p class="text-md mb-6 max-w-xs leading-relaxed">
                La JobiBox est une cabine insonorisée qui vous permet de créer
                un CV vidéo pro, seul·e, en quelques minutes grâce à une
                interface simple et guidée.
              </p>
              <PurpleButton
                label="Obtenir ma JobiBox"
                onClick$={() => (showModal.value = true)}
              />
            </div>

            <div>
              <h3 class="mb-4 font-semibold">JobiBox</h3>
              <ul class="text-md space-y-3">
                <li>
                  <a href="#hero" class="hover:text-purple-700">
                    La JobiBox
                  </a>
                </li>
                <li>
                  <a href="#features" class="hover:text-purple-700">
                    Fonctionnalité
                  </a>
                </li>
                <li>
                  <a href="#technology" class="hover:text-purple-700">
                    Technologie
                  </a>
                </li>
                <li>
                  <a href="#recruiter" class="hover:text-purple-700">
                    Recruteur
                  </a>
                </li>
                <li>
                  <a href="#findJobiBox" class="hover:text-purple-700">
                    Trouver une JobiBox
                  </a>
                </li>
                <li>
                  <a href="#jobiTruck" class="hover:text-purple-700">
                    Jobitruk
                  </a>
                </li>
                <li>
                  <a href="#faq" class="hover:text-purple-700">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 class="mb-4 font-semibold">Nous contacter</h3>
              <div class="text-md space-y-3">
                <a
                  href="mailto:jobissim@jobissim.com"
                  class="hover:text-purple-700"
                >
                  jobissim@jobissim.com
                </a>
                <br />
                <a href="tel:+33978011185" class="hover:text-purple-700">
                  +09 78 80 11 85
                </a>
              </div>
            </div>

            <div>
              <h3 class="mb-4 font-semibold">Nous suivre</h3>
              <div class="flex gap-3">
                {[
                  {
                    Icon: Youtube,
                    label: "Lien vers YouTube",
                    href: "https://www.youtube.com/channel/UCe3bTBZ22yWlgxArOAgwZEQ",
                  },
                  {
                    Icon: Facebook,
                    label: "Lien vers Facebook",
                    href: "https://www.facebook.com/Jobissim/",
                  },
                  {
                    Icon: Linkedin,
                    label: "Lien vers LinkedIn",
                    href: "https://fr.linkedin.com/company/jobissim",
                  },
                  {
                    Icon: Instagram,
                    label: "Lien vers Instagram",
                    href: "https://www.instagram.com/jobissim/",
                  },
                ].map(({ Icon, label, href }, i) => (
                  <a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    class="social-icon flex h-10 w-10 items-center justify-center rounded-full text-white hover:opacity-90"
                  >
                    <Icon aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div class="mt-8 px-6">
            <div class="mx-auto max-w-6xl text-center">
              <div class="text-4xl tracking-wide sm:text-7xl md:text-[150px] lg:text-[220px] xl:text-[300px]">
                <span class="bg-gradient-to-r from-[#272955] to-[#673986] bg-clip-text text-transparent">
                  JobiBox
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
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
