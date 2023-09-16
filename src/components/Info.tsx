import { FC } from "react";
import { Link } from "react-router-dom";

export const Info: FC = () => {
    return (
        <div
            style={{
                fontSize: "16px",
                textAlign: "center",
                fontWeight: 500,
                padding: "15px",
            }}
        >
            <Link
                to="/about"
                data-testid="about_link"
            >
                About
            </Link>
            <span> | </span>
            <a
                href="https://github.com/serpo-dev"
                target="_blank"
                rel="noreferrer"
            >
                serpo-dev
            </a>
            <div>© 2023</div>
        </div>
    );
};
