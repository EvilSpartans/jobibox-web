import { component$, useSignal } from "@builder.io/qwik";

import "./index.scss";
import { Pin } from "../common/Icons/Pin";
import { Photo } from "../common/Icons/Photo";
import imageGirl from "../../assets/woman.avif";
import card1 from "../../assets/rectangle1.avif";
import card2 from "../../assets/rectangle2.avif";
import card3 from "../../assets/rectangle3.avif";
import { Question } from "../common/Icons/Question";

export const CameraPanel = component$(() => {
  const selected = useSignal(0);

  return (
    <section id="cameraPanel" class="camera-panel">
      <div class="content">
        <div class="options">
          {[
            {
              title: "Changer le fond",
              desc: "Choisissez un fond pro, fun ou neutre pour refléter votre style.",
              icon: <Photo />,
            },
            {
              title: "Modifier les questions",
              desc: "Sélectionnez les questions que vous souhaitez pour mieux vous présenter.",
              icon: <Question />,
            },
            {
              title: "Ajoutez vos points forts",
              desc: "Mettez en avant vos compétences, projets ou traits de personnalité.",
              icon: <Pin />,
            },
          ].map((item, i) => (
            <div
              key={i}
              class={`option-item ${selected.value === i ? "selected" : ""}`}
              onClick$={() => (selected.value = i)}
            >
              <div class="icon">{item.icon}</div>
              <div class="text">
                <p class="title">{item.title}</p>
                <p class="desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {selected.value === 0 ? (
          <div class="camera-mockup">
            <div class="lens"></div>

            <img src={imageGirl} alt="portrait" class="girl-img" />
            <img src={card1} class="card card1" alt="bg1" />
            <img src={card2} class="card card2" alt="bg2" />
            <img src={card3} class="card card3" alt="bg3" />
          </div>
        ) : selected.value === 1 ? (
          <div class="camera-mockup">
            <div class="lens"></div>

            <img src={imageGirl} alt="portrait" class="girl-img" />
            <span class="card-text card-top-left">
              Qu’est-ce qui vous motive le plus ?
            </span>

            <span class="card-text card-top-right">
              Vous préférez travailler seul·e ou en équipe ?
            </span>

            <span class="card-text card-bottom-left">
              Une compétence cachée à partager ?
            </span>

            <span class="card-text card-bottom-right">
              Quel type de mission rêvez-vous d’accomplir ?
            </span>
          </div>
        ) : (
          <div class="camera-mockup">
            <div class="lens"></div>

            <img src={imageGirl} alt="portrait" class="girl-img" />
            <span class="card-text card1">💡 Curieux.se</span>
            <span class="card-text card2">💪 Autonome</span>
            <span class="card-text card3">💬 Bonne communication</span>
            <span class="card-text card4">🧑‍🤝‍🧑 Esprit d'équipe</span>
            <span class="card-text card5">🧑‍🤝✍️ Sens du détail</span>
          </div>
        )}
      </div>
    </section>
  );
});
