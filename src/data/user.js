const INFO = {
	main: {
		title: "T-88 Portfolio",
		name: "Taki D",
		email: "mt_douibi@esi.dz",
		logo: "../logo.png",
	},

	socials: {
		github: "https://github.com/t-88",
		linkedin: "https://www.linkedin.com/in/taki-eddine-douibi-1a94522a4/?originalSubdomain=dz",
	},

	homepage: {
		title: "Full-stack web and Mobile app developer",
		description: "I am a Full-stack developer with additional experience in mobile technologies like flutter and react native. I also have exposure to cybersecurity, AI, and game development using Unity and SDL. I enjoy solving challenges, learning new technologies, and creating user-focused solutions with a passion for quality and innovation.",
	},

	about: {
		title: "I'm Douibi Taki , and I'm passionate developer.",
	},
	projects: [
		{
			title: "ONews",
			logo: "../projects/onew.png",
			description: "An easy-to-use mobile app that gathers all Algerian news in one place, keeping you updated effortlessly.",
			link: "https://github.com/TheOpenNews/ONews",
			feats: [
				"Fully customizable using extensions for web scraping to gather news from various websites.",
				"Centralized platform to access all news in one place.",
				"User-friendly and intuitive interface for seamless navigation.",
			],
			previewImgs: [
				"../projects/ONews/1.jpg",
				"../projects/ONews/3.jpg",
				"../projects/ONews/4.jpg",
			],
			type: "mobile",
		},
		{
			title: "GuiDNI",
			description: "Winner of the Coscape Hackathon Event\nGuiDNI is a mobile app that connects the Algerian community with startups, offering rewards for feedback and participation through daily surveys.",
			logo: "../projects/GuiDNI.png",
			link: "https://github.com/t-88/coscape-hackthone",
			previewImgs: [],
			feats: [
				"Startup-focused platform",
				"Audience data collection tools",
				"Flexible and customizable survey system",
				"Startup management features",
			],
			previewImgs: [
				"https://raw.githubusercontent.com/t-88/coscape-hackthone/main/screenshots/1.png",
				"https://raw.githubusercontent.com/t-88/coscape-hackthone/main/screenshots/2.png",
				"https://raw.githubusercontent.com/t-88/coscape-hackthone/main/screenshots/5.png",
				"https://raw.githubusercontent.com/t-88/coscape-hackthone/main/screenshots/7.png",
			],
			type: "mobile",
		},

		{
			title: "LibTrack",
			description:
				"A desktop app for managing library bookings and users, designed to simplify the process of tracking books and maintaining organization in my local library.",
			logo: "../projects/LibTrack.png",
			link: "https://github.com/t-88/epic-editor",
			feats: [
				"Library resource management.",
				"Notification system for due dates and new arrivals.",
				"Member account creation and management.",
				"Islamic-themed user interface design.",
			],
			previewImgs: [
				"../projects/LibTrack/user-case.mp4",
				"../projects/LibTrack/1.png ",
				"../projects/LibTrack/2.png ",
				"../projects/LibTrack/3.png ",
			],
		},

		{
			title: "Connectify",
			description:
				"A clean and simple frontend for a messaging app, focused on delivering a smooth user experience.",
			logo: "../projects/Connectify.png",
			link: "https://github.com/t-88/flutter-connectify-massaging-app-frontend",
			feats: [
				"Clean and simple frontend design.",
				"Optimized for a smooth user experience.",
				"Tailored for a messaging app interface.",
			],
			previewImgs: [
				"https://raw.githubusercontent.com/t-88/flutter-connectify-massaging-app-frontend/master/screenshots/2.jpg",
				"https://raw.githubusercontent.com/t-88/flutter-connectify-massaging-app-frontend/master/screenshots/4.jpg",
				"https://raw.githubusercontent.com/t-88/flutter-connectify-massaging-app-frontend/master/screenshots/5.jpg",
			],
			type: "mobile",
		},


		{
			title: "EpicEditor",
			description: "An online game engine that transforms games into cross-platform desktop applications, serving as a foundation for future app development tools. ",
			logo: "../projects/EpicEditor.png",
			link: "https://github.com/t-88/epic-editor",
			feats: [
				"Online game engine.",
				"Transforms games into cross-platform desktop applications.",
				"Foundation for future app development tools.",
			],
			previewImgs: [
				"https://raw.githubusercontent.com/t-88/epic-editor/master/preview/pong_game.gif",
				"https://raw.githubusercontent.com/t-88/epic-editor/master/preview/epic-editor.png",
				"https://raw.githubusercontent.com/t-88/epic-editor/master/preview/code-editor.png",
			],

		},
	],
};

export default INFO;
