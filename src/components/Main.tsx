import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import profile from '../assets/images/profile.jpeg';
import { MainData } from "../types/resume";

interface MainProps {
  data: MainData;
}

function Main({ data }: MainProps) {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={profile} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href={data.githubUrl} target="_blank" rel="noreferrer"><GitHubIcon /></a>
            <a href={data.linkedinUrl} target="_blank" rel="noreferrer"><LinkedInIcon /></a>
          </div>
          <h1>{data.title}</h1>
          <p>{data.subtitle}</p>

          <div className="mobile_social_icons">
            <a href={data.githubUrl} target="_blank" rel="noreferrer"><GitHubIcon /></a>
            <a href={data.linkedinUrl} target="_blank" rel="noreferrer"><LinkedInIcon /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;