import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

import "./styles/project.css";
import GlobalContext, { globalData } from "../../state/global-context";

const Project = ({ project }) => {
  const gCtx = useContext(GlobalContext);
  const DESCRIPTION_LIMIT = 200; // Set your character limit here

  const truncateDescription = (text, limit) => {
    return text.length > limit ? text.slice(0, limit) + "..." : text;
  };

  function onClickProject() {
    gCtx.setGlobalData({ popupData: project, showPopup: true });
  }

  return (
    <React.Fragment>
      <div className="project">
        <div className="cursor-pointer h-full" onClick={onClickProject}>
          <div className="project-container h-full flex flex-col">
            <div className="project-logo flex justify-between items-center w-full">
              <img className="rounded-sm" style={{maxWidth:"30px"}} src={project.logo} alt="logo" />
              <img className="rounded-sm opacity-60"  style={{maxWidth:"20px"}} src="../eye.png" alt="view" />
            </div>
            <div className="project-title">{project.title}</div>
            <div className="project-description">
              {truncateDescription(project.description, DESCRIPTION_LIMIT)}
            </div>
            <div className="project-link flex-1 items-end" style={{alignItems: "end"}}>
              <div className="project-link-icon">
                <FontAwesomeIcon icon={faLink} />
              </div>
              <div className="project-link-text">To Project</div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Project;