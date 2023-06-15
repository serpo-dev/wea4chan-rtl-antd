import { FC } from "react";
import bg720p from "../assets/720p.mp4";

export const BackgroundVideo: FC = () => {
    return (
        <video
            autoPlay
            muted
            loop
            style={{
                position: "fixed",
                objectFit: "cover",
                width: "100vw",
                height: `calc(100vh - 160px)`,
                pointerEvents: "none",
                filter: "brightness(49%)",
            }}
            className="undraggable unselectable"
        >
            <source
                src={bg720p}
                type="video/webm"
            />
            Your browser does not dupport HTML5 video
        </video>
    );
};
