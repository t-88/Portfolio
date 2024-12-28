import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

import "./styles/project.css";
import GlobalContext, { globalData } from "../../state/global-context";

const Project = ({ project }) => {
	const gCtx = useContext(GlobalContext);

	function onClickProject() {
		gCtx.setGlobalData({ popupData : project, showPopup : true });
	}
	return (
		<React.Fragment>
			<div className="project">
				<div className="cursor-pointer" onClick={onClickProject}>
					<div className="project-container">
						<div className="project-logo">
							<img className="rounded-sm" src={project.logo} alt="logo" />
						</div>
						<div className="project-title">{project.title}</div>
						<div className="project-description">{project.description}</div>
						<div className="project-link">
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
