import { Col, Row, Typography } from "antd";
import { FC } from "react";
import ChanPNG from "../assets/logo.png";
import { Link } from "react-router-dom";

const { Title } = Typography;

const emblemStyle = {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
};

const imgStyle = {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "20px",
    marginRight: "20px",
};

export function Emblem(): ReturnType<FC> {
    return (
        <Row style={emblemStyle}>
            <Link
                style={imgStyle}
                to="/"
            >
                <img
                    style={{ height: "80%" }}
                    className="unselectable undraggabe"
                    src={ChanPNG}
                    alt="logo_chan_png"
                />
            </Link>
            <Link to="/">
                <Title
                    level={2}
                    style={{
                        color: "rgb(4, 119, 135)",
                        margin: "0",
                    }}
                    className="unselectable undraggabe"
                >
                    wea4chan
                </Title>
            </Link>
        </Row>
    );
}
