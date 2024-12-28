import { createContext } from "react";

const GlobalContext = createContext();
const globalData = {
	showPopup: false,
	popupData: {
		title: "",
		description: "",
		logo: "",
		link: "",
		feats: [],
		previewImgs: [],
	},
}

export default GlobalContext;
export {
	globalData
};