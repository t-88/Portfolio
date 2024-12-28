import { useContext } from "react";
import "./popup.css";
import { Carousel } from "flowbite-react";
import GlobalContext, { globalData } from "../../state/global-context";
import { Link } from "react-router-dom";

export default function Popup() {

    const gCtx = useContext(GlobalContext);

    function onBlur() {
        gCtx.setGlobalData({ ...gCtx.globalData, showPopup: false });

    }
    return <section onClick={onBlur} className={`popup ${!gCtx.globalData.showPopup ? 'hidden' : ''}`}>
        <div className="container gap-6" onClick={(e) => e.stopPropagation()}>
            <div className="header">
                <h1 className="font-bold text-2xl">{gCtx.globalData.popupData.title}</h1>
                <div className="img-container">
                    <img className="rounded-sm" src={gCtx.globalData.popupData.logo} alt={gCtx.globalData.popupData.title + " logo"} />
                </div>
            </div>
            <p>{gCtx.globalData.popupData.description}</p>
            <ul style={{ "listStyleType": "disc" }}>

                {
                    gCtx.globalData.popupData.feats.map(feat => {
                        return <li key={feat}>{feat}</li>
                    })
                }
            </ul>
            <Link to={gCtx.globalData.popupData.link}>View Project</Link>
            <Carousel slide={false} className="carousel flex items-center justify-center self-center" style={{width: gCtx.globalData.popupData.type == "mobile" ? "300px" : ""}} theme={theme} >
                {
                    gCtx.globalData.popupData.previewImgs.map(img => {
                        return <img style={{width: gCtx.globalData.popupData.type == "mobile" ?  145 : ""}} src={img} alt="..." />
                    })
                }
            </Carousel>

            <div>
            </div>
        </div>
    </section>

}



const theme = {
    "indicators": {
        "active": {
            "off": "bg-white/50 hover:bg-white dark:bg-gray-800/50 dark:hover:bg-gray-800 bg-red-gray bg-gray-700",
            "on": "bg-white "
        },
        "base": "h-3 w-3 rounded-full bg-red-500 ",
        "wrapper": " absolute bottom-5 left-1/2 flex -translate-x-1/2 space-x-3 bg-gray-500 p-2 rounded-lg"
    },
    "control": {
        "base": "inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30  group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10",
        "icon": "h-5 w-5 text-white dark:text-gray-800 sm:h-6 sm:w-6"
    },
}
