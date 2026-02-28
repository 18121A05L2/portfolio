import React from "react";
import { Main, Expertise, Timeline, Project, Contact } from "../components";
import { fullstackResume } from "../data/fullstackResume";

const FullStackPage = () => {
  return (
    <>
      <Main data={fullstackResume.main} />
      <Expertise data={fullstackResume.expertise} />
      <Timeline data={fullstackResume.experience} />
      <Project data={fullstackResume.projects} />
      <Contact />
    </>
  );
};

export default FullStackPage;
