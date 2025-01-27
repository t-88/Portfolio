import { createContext, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import ReactGA from "react-ga4";

import Homepage from "./pages/homepage";
import About from "./pages/about";
import Projects from "./pages/projects";
import Contact from "./pages/contact";
import Notfound from "./pages/404";

import "./app.css";
import Popup from "./components/popup/popup";
import GlobalContext, { globalData as GD } from "./state/global-context";



function App() {
	const [globalData,setGlobalData] = useState(GD);

	useEffect(() => {
		if(globalData.showPopup) {
			document.querySelector("html").classList.add("overflow-hidden");
		} else {
			document.querySelector("html").classList.remove("overflow-hidden");
		}

		window.onload = function () {
            if(window.innerWidth <= 500) {
                var mvp = document.getElementById('myViewport');
                // mvp.setAttribute('content','width=500');
            }
        }		
	},[globalData.showPopup]);

	return (
	<GlobalContext.Provider value={{globalData,setGlobalData}}>

		<div className="App">
			<Popup />

			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/about" element={<About />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="*" element={<Notfound />} />
			</Routes>
		</div>
	</GlobalContext.Provider>

	);
}

export default App;
