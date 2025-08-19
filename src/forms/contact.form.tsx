import {
  component$,
  useSignal,
  useComputed$,
  $,
  type PropFunction,
  useTask$,
} from "@builder.io/qwik";
import type { Contact } from "~/models/contact";
import { ContactService } from "~/services/contact.service";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const isEmail = (v: string) => EMAIL_RE.test(v.trim());
const required = (v?: string) => !!v && v.trim().length > 0;

export const ContactForm = component$(
  ({
    onValidSubmit$,
    onRegisterSubmit$,
  }: {
    onValidSubmit$?: PropFunction<(data: Contact) => void>;
    onRegisterSubmit$?: PropFunction<(submit: () => Promise<void>) => void>;
  }) => {
    const form = useSignal<Contact>({
      email: "",
      subject: "",
      content: "",
      phone: "",
    });
    const touched = useSignal<Record<string, boolean>>({});
    const submitting = useSignal(false);

    const successMessage = useSignal("");
    const invalid = useComputed$(() => ({
      email: !required(form.value.email) || !isEmail(form.value.email),
      subject: !required(form.value.subject),
      content: !required(form.value.content),
    }));
    const hasErrors = useComputed$(() =>
      Object.values(invalid.value).some(Boolean),
    );

    const submit$ = $(async () => {
      touched.value = {
        ...touched.value,
        email: true,
        subject: true,
        content: true,
      };
      if (hasErrors.value) return;

      submitting.value = true;
      try {
        const saved = await ContactService.createItem(form.value);
        await onValidSubmit$?.(saved);

        successMessage.value = "Message envoyé avec succès ✅";
        setTimeout(() => (successMessage.value = ""), 3000);

        form.value = { email: "", subject: "", content: "", phone: "" };
        touched.value = {};
      } catch (e) {
        console.error("Erreur envoi contact:", e);
      } finally {
        submitting.value = false;
      }
    });

    useTask$(() => {
      onRegisterSubmit$?.(submit$);
    });

    const fieldClass =
      "w-full box-border rounded-xl border border-[#E7E5E9] px-3 py-2 " +
      "focus:outline-none focus:ring-2 focus:ring-[#B7D5F6] focus:border-[#B7D5F6]";

    return (
      <form preventdefault:submit onSubmit$={submit$} class="space-y-4">
        {/* Email */}
        <div>
          <span class="label mb-1 block text-sm text-[#2E104E]">Email *</span>
          <input
            type="email"
            required
            class={fieldClass}
            value={form.value.email}
            onInput$={(e: any) => {
              const v = String(e.target.value);
              form.value = { ...form.value, email: v };
              touched.value = { ...touched.value, email: true };
            }}
            placeholder="Votre email"
          />
          {touched.value.email && invalid.value.email && (
            <p class="mt-1 text-xs text-red-600">Email invalide</p>
          )}
        </div>

        {/* Téléphone (facultatif) */}
        <div>
          <span class="label mb-1 block text-sm text-[#2E104E]">
            Téléphone
          </span>
          <input
            class={fieldClass}
            value={form.value.phone}
            onInput$={(e: any) => {
              const v = String(e.target.value);
              form.value = { ...form.value, phone: v };
            }}
            placeholder="Ex : 0600000000"
          />
        </div>

        {/* Objet */}
        <div>
          <span class="label mb-1 block text-sm text-[#2E104E]">Objet *</span>
          <input
            required
            class={fieldClass}
            value={form.value.subject}
            onInput$={(e: any) => {
              const v = String(e.target.value);
              form.value = { ...form.value, subject: v };
              touched.value = { ...touched.value, subject: true };
            }}
            placeholder="Objet du message"
          />
          {touched.value.subject && invalid.value.subject && (
            <p class="mt-1 text-xs text-red-600">Champ requis</p>
          )}
        </div>

        {/* Message */}
        <div>
          <span class="label mb-1 block text-sm text-[#2E104E]">Message *</span>
          <textarea
            rows={5}
            required
            class={fieldClass}
            value={form.value.content}
            onInput$={(e: any) => {
              const v = String(e.target.value);
              form.value = { ...form.value, content: v };
              touched.value = { ...touched.value, content: true };
            }}
            placeholder="Votre message"
          />
          {touched.value.content && invalid.value.content && (
            <p class="mt-1 text-xs text-red-600">Champ requis</p>
          )}
        </div>

        {successMessage.value && (
          <p class="mt-4 text-sm text-green-600">{successMessage.value}</p>
        )}
      </form>
    );
  },
);
