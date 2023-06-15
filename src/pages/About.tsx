import { Typography } from "antd";
import { FC } from "react";

const { Title } = Typography;

export const About: FC = () => {
    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <div style={{ width: 500 }}>
                <Title
                    style={{ textAlign: "center" }}
                    level={3}
                >
                    Description
                </Title>
                <p> Weather forecast for nyans... That's a joke.</p>
                <p style={{ textAlign: "justify" }}>
                    {" "}
                    This is my training project where I tested{" "}
                    <code>
                        <b>react-testing-library</b>
                    </code>
                    . This app uses the external API of{" "}
                    <code>
                        {" "}
                        <b>open-meteo.com</b>
                    </code>
                    . If you want to review my project and give a feedback,
                    please write on my email <b>sergey.potapov.2002@mail.ru</b>{" "}
                    or telegram <b>yphwd</b>.
                </p>
                <p>Thanks for visiting!</p>
                <Title
                    style={{ textAlign: "center" }}
                    level={3}
                >
                    Installation
                </Title>
                <p style={{ textAlign: "justify" }}>
                    Just run the <code>npm install</code> if you already have{" "}
                    <code>node v18+</code> installed.
                </p>
                <Title
                    style={{ textAlign: "center" }}
                    level={3}
                >
                    Usage
                </Title>
                <ul>
                    <li>
                        <code>npm run test</code> for test the application{" "}
                        <i>(thr reason app created)</i>
                    </li>
                    <li>
                        <code>npm run start</code> for development mode
                    </li>
                    <li>
                        <code>npm run build</code> for production mode
                    </li>
                </ul>
            </div>
        </div>
    );
};
