import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/about.css";

const About = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "about");



	return (
		<React.Fragment>
			<Helmet>
				<title>{`About | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="about" />
				<div className="content-wrapper">
					<div className="about-logo-container">
						<div className="about-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="about-container">
						<div className="title about-title">
							{INFO.about.title}
						</div>
						<br />
						<TechStack />
						<br />
						<Events />
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};


function TechStack() {
	const TECK_STACK = {
		WEB: [
			{ title: "Rect", icon: "../stack/web/react.webp" },
			{ title: "Svelete", icon: "../stack/web/svelte.png" },
			{ title: "Vue", icon: "../stack/web/Vue.js.png" },
			{ title: "AngularJS", icon: "../stack/web/AngularJS.png" },
			{ title: "Nextjs", icon: "../stack/web/nextjs.png" },
			{ title: "Expo", icon: "../stack/web/expo.png" },
			{ title: "Flutter", icon: "../stack/web/Flutter.png" },
			{ title: "Mongodb", icon: "../stack/web/mongodb.png" },
			{ title: "Nodejs", icon: "../stack/web/Node.js.png" },
			{ title: "Tailwind", icon: "../stack/web/tailwind.png" },
		],
		LANGS: [
			{ title: "WebAssembly", icon: "../stack/langs/WebAssembly.png" },
			{ title: "C", icon: "../stack/langs/C.png" },
			{ title: "C++", icon: "../stack/langs/C++.png" },
			{ title: "Python", icon: "../stack/langs/Python.png" },
			{ title: "js", icon: "../stack/langs/JavaScript.png" },
			{ title: "Java", icon: "../stack/langs/Java.png" },
			{ title: "Go", icon: "../stack/langs/Go.png" },
			{ title: "Rust", icon: "../stack/langs/Rust.png" },
			{ title: "lua", icon: "../stack/langs/Lua.png" },
		],

	}
	return <>
		<h1>Teck Stack</h1>
		<div className="tech-stack">
			<section className="stack-container">
				{
					TECK_STACK["WEB"].map((item, idx) => <div key={item.title} className="stack-item"> <img src={item.icon} alt={item.title} /> </div>)
				}
				{
					TECK_STACK["LANGS"].map((item, idx) => <div key={item.title} className="stack-item"> <img src={item.icon} alt={item.title} /> </div>)

				}
			</section>

		</div>

	</>

}



function Events() {
	let EVENTS = [
		{
			dir: "right",
			title: "Winners of Co-scape",
			desc: "Co-scape is a hackathon and a mini CTF challenge organized in Annaba by Alphabit, Zenith, and Elec.",
			src: "../events/coescape.jpeg"
		},
		{
			dir: "left",
			title: "Winner of Xcode",
			desc: "It's a competitive programming competition organized by Google's developer's group in sba.",
			src: "../events/xcode.jpeg"
		}	,
	]
	return <>
		<h1>Events</h1>
		<div className="events">
			{
				EVENTS.map((event) => {
					return <section className={`event-item   ${event.dir == "left" ? "event-item-rev" : ""}`} >
						<div className="flex">
							<h1>{event.title}</h1>
							<p>{event.desc}</p>
						</div>
						<img src={event.src} alt="" />
					</section>
				})
			}

		</div>

	</>
}
export default About;
