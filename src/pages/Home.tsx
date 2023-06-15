import { FC } from "react";
import { SearchInput } from "../components/SearchInput";
import { BackgroundVideo } from "../components/BackgroundVideo";

export const Home: FC = () => {
    return (
        <div
            style={{
                height: `calc(100vh - 160px)`,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <BackgroundVideo />
            <SearchInput />
        </div>
    );
};
