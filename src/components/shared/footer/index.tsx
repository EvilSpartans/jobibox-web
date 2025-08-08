import { component$ } from "@builder.io/qwik";
import "./index.scss"

export const Footer = component$(() => {
  return (
    <footer class="bg-gray-100 py-6 mt-12 border-t">
      <div class="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-sm text-gray-600">
        <p class="mb-4 md:mb-0">&copy; {new Date().getFullYear()} JobiBox. Tous droits réservés.</p>
        <ul class="flex flex-wrap gap-4">
          <li><a href="/" class="hover:underline">Accueil</a></li>
          <li><a href="/legal-notice" class="hover:underline">Mentions légales</a></li>
          <li><a href="/privacy-policy" class="hover:underline">Politique de confidentialité</a></li>
        </ul>
      </div>
    </footer>
  );
});
