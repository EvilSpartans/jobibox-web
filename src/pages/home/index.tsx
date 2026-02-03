import { component$ } from "@builder.io/qwik";

import { Faq } from "~/components/faq";
import { Hero } from "~/components/hero";
import { JobiBox } from "~/components/jobiBox";
import { Features } from "~/components/features";
import { Recruiter } from "~/components/recruiter";
import { JobiTruck } from "~/components/jobiTruck";
import { IACVPaper } from "~/components/IACVPaper";
import { Navbar } from "~/components/shared/navbar";
import { Technology } from "~/components/technology";
import { ClientList } from "~/components/clientList";
import { FindJobiBox } from "~/components/findJobiBox";
import { CameraPanel } from "~/components/cameraPanel";
import { MultiButtons } from "~/components/multiButtons";
import { IASimulation } from "~/components/IASimulation";
import { JobiGallery } from "~/components/jobiBoxGallery";

export const Home = component$(() => {
  return (
    <>
      <Navbar />
      <Hero />
      <JobiBox />
      <Features />
      <div id="camera-panel">
        <CameraPanel />
      </div>
      <div id="ia-simulation">
        <IASimulation />
      </div>
      <div id="ia-cv-paper">
        <IACVPaper />
      </div>
      <Technology />
      <Recruiter />
      <FindJobiBox />
      <MultiButtons />
      <JobiTruck />
      <JobiGallery />
      <ClientList />
      <Faq />
    </>
  );
});
