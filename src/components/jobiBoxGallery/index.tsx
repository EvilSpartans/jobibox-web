import { component$ } from "@builder.io/qwik";

import "./index.scss";
import Img1 from "../../assets/carrousel1.avif";
import Img2 from "../../assets/carrousel2.avif";
import Img3 from "../../assets/carrousel3.avif";
import { WhiteButton } from "../common/buttons/WhiteButton";

export const JobiGallery = component$(() => {
  const carouselItems = [
    {
      src: Img1,
      alt: "Fun Radio",
      title: "Fun Radio",
      subtitle: "Studio Ibiza Experience",
      gradient:
        "linear-gradient(180deg, rgba(238, 46, 139, 0) 0%, #EE2E8B 90%)",
    },
    {
      src: Img2,
      alt: "M6",
      title: "M6",
      subtitle: "L'amour est dans le pré",
      gradient: "linear-gradient(180deg, rgba(79, 114, 81, 0) 0%, #5B7A5B 90%)",
    },
    {
      src: Img3,
      alt: "Racing coeur de Lens",
      title: "Racing coeur de Lens",
      subtitle: "Booste votre carrière",
      gradient: "linear-gradient(180deg, rgba(113, 64, 60, 0) 0%, #71403C 90%)",
    },
  ];

  const duplicatedItems = [...carouselItems, ...carouselItems];

  return (
    <section
      id="jobiGallery"
      class="flex min-h-screen flex-col items-center bg-gradient-to-b from-[#4a4199] to-[#753985] px-6 py-20 text-white"
      style="font-family: 'Manrope', sans-serif;"
    >
      <h1 class="mb-6 text-center text-3xl font-semibold md:text-6xl">
        Ils sont déjà <span class="instrument-serif-italic">+300</span> à avoir
        adopté <br />
        la <span>JobiBox</span>...{" "}
        <span class="instrument-serif-italic">Et vous ?</span>
      </h1>

      <div class="mb-12">
        <WhiteButton
          label=" Obtenir ma jobibox"
          onClick$={() => console.log("Clic!")}
        />
      </div>

      <div class="jobiGallery-carousel-container w-full">
        <div class="jobiGallery-carousel-track">
          {duplicatedItems.map((item, index) => (
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
    </section>
  );
});
