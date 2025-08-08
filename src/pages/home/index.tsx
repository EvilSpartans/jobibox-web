import { component$ } from "@builder.io/qwik";

import "./index.scss";
import { Faq } from "~/components/faq";
import { Hero } from "~/components/hero";
import { JobiBox } from "~/components/jobiBox";
import { Features } from "~/components/features";
import { Recruiter } from "~/components/recruiter";
import { JobiTruck } from "~/components/jobiTruck";
import { Navbar } from "~/components/shared/navbar";
import { Technology } from "~/components/technology";
import { ClientList } from "~/components/clientList";
import { FindJobiBox } from "~/components/findJobiBox";
import { MultiButtons } from "~/components/multiButtons";
import { JobiGallery } from "~/components/jobiBoxGallery";
import { CameraPanel } from "~/components/cameraPanel";

export const Home = component$(() => {
  return (
    <>
      <Navbar />
      <Hero />
      <JobiBox />
      <Features />
      <CameraPanel />
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
