import React from "react";
import { Main, Expertise, Timeline, Project, Contact } from "../components";
import { blockchainResume } from "../data/blockchainResume";

const BlockchainPage = () => {
  return (
    <>
      <Main data={blockchainResume.main} />
      <Expertise data={blockchainResume.expertise} />
      <Timeline data={blockchainResume.experience} />
      <Project data={blockchainResume.projects} />
      <Contact />
    </>
  );
};

export default BlockchainPage;
