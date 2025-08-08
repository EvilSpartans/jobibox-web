import { component$, isDev } from "@builder.io/qwik";
import { QwikCityProvider, RouterOutlet } from "@builder.io/qwik-city";
import { RouterHead } from "./utils/router-head";

import "./global.css";
import { Footer } from "./components/shared/footer";
import { ScrollTop } from "./components/shared/scrollTop";

export default component$(() => {

  return (
    <QwikCityProvider>
      <head>
        <meta charset="utf-8" />
        {!isDev && (
          <link
            rel="manifest"
            href={`${import.meta.env.BASE_URL}manifest.json`}
          />
        )}
        <RouterHead />
      </head>
      <body lang="fr">
        <RouterOutlet />
        <Footer />
        <ScrollTop />
      </body>
    </QwikCityProvider>
  );
});
