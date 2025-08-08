import { component$, useSignal } from "@builder.io/qwik";

import imageGirl from "../../assets/woman.png";
import card1 from "../../assets/rectangle1.png";
import card2 from "../../assets/rectangle2.png";
import card3 from "../../assets/rectangle3.png";

import "./index.scss";

export const CameraPanel = component$(() => {

    const selected = useSignal(0);

  return (
    <section id="cameraPanel" class="camera-panel">
      <div class="content">
        {/* OPTIONS */}
<div class="options">
  {[{
    title: "Changer le fond",
    desc: "Choisissez un fond pro, fun ou neutre pour refléter votre style.",
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path d="M5 21L14.5858 11.4142C15.3668 10.6332 16.6332 10.6332 17.4142 11.4142L21 15M5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21ZM10 8.5C10 9.32843 9.32843 10 8.5 10C7.67157 10 7 9.32843 7 8.5C7 7.67157 7.67157 7 8.5 7C9.32843 7 10 7.67157 10 8.5Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    )
  }, {
    title: "Modifier les questions",
    desc: "Sélectionnez les questions que vous souhaitez pour mieux vous présenter.",
    icon: (
      <svg width="25" height="24" fill="none" viewBox="0 0 25 24">
        <path d="M12.3334 18.2744V18.25M12.3334 14.5C14.3334 13.5 16.3334 12.2091 16.3334 10C16.3334 7.79086 14.5425 6 12.3334 6C10.1242 6 8.33337 7.79086 8.33337 10M22.3334 12C22.3334 17.5228 17.8562 22 12.3334 22C6.81052 22 2.33337 17.5228 2.33337 12C2.33337 6.47715 6.81052 2 12.3334 2C17.8562 2 22.3334 6.47715 22.3334 12Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    )
  }, {
    title: "Ajoutez vos points forts",
    desc: "Mettez en avant vos compétences, projets ou traits de personnalité.",
    icon: (
      <svg width="25" height="24" fill="none" viewBox="0 0 25 24">
        <path d="M3.66663 21L8.83736 15.8293M15.5197 3.30607L21.3605 9.14695C21.8447 9.63109 21.74 10.4423 21.1488 10.7876L17.7717 12.7604C17.6944 12.8056 17.6232 12.8604 17.5599 12.9237L15.6475 14.8362C15.5113 14.9724 15.4154 15.1435 15.3704 15.3308L14.4438 19.1868C14.2531 19.9804 13.2666 20.2585 12.6894 19.6813L4.98529 11.9772C4.4081 11.4 4.6862 10.4135 5.47988 10.2228L9.33585 9.29618C9.5231 9.25118 9.69426 9.1553 9.83044 9.01913L11.7429 7.10668C11.8062 7.04338 11.861 6.97222 11.9062 6.89493L13.879 3.51782C14.2243 2.92662 15.0355 2.82192 15.5197 3.30607Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    )
  }].map((item, i) => (
    <div
      key={i}
      class={`option-item ${selected.value === i ? 'selected' : ''}`}
      onClick$={() => selected.value = i}
    >
      <div class="icon">{item.icon}</div>
      <div class="text">
        <p class="title">{item.title}</p>
        <p class="desc">{item.desc}</p>
      </div>
    </div>
  ))}
</div>


        {/* CAMERA */}
        <div class="camera-mockup">
          <div class="lens"></div>

          <img src={imageGirl} alt="portrait" class="girl-img" />
          <img src={card1} class="card card1" alt="bg1" />
          <img src={card2} class="card card2" alt="bg2" />
          <img src={card3} class="card card3" alt="bg3" />
        </div>
      </div>
    </section>
  );
});
