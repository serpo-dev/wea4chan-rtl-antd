import { useState, useLayoutEffect, FC } from "react";
import { useSearchParams } from "react-router-dom";
import { CityData } from "../interfaces/Forecast";
import { getForecast } from "../async/getForecast";
import { ServerError } from "../components/ServerError";
import { NotFound } from "./NotFound";
import { Breadcrumb, Spin, Typography } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import { ForecastTable } from "../components/ForecastTable";

const { Title } = Typography;

export const City: FC = () => {
    const [search] = useSearchParams();

    const [data, setData] = useState<CityData | null>(null);
    const [notFoundError, setNotFoundError] = useState<boolean>(false);
    const [serverError, setServerError] = useState<boolean>(false);

    useLayoutEffect(() => {
        async function getData(latitude: string, longitude: string) {
            const data = await getForecast({
                latitude: Number(latitude),
                longitude: Number(longitude),
            });
            if (data == null) {
                setServerError(true);
                return;
            }
            setData(data);
        }

        try {
            const params = new URLSearchParams(search);
            const latitude = params.get("latitude");
            const longitude = params.get("longitude");
            if (latitude === null || longitude === null) {
                return setNotFoundError(true);
            }
            getData(latitude, longitude);
        } catch (err) {
            setNotFoundError(true);
        }
    }, [search]);

    if (data === null) {
        return (
            <div
                style={{
                    height: "calc(100vh - 160px)",
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Spin size="large" />;
            </div>
        );
    }

    if (notFoundError) {
        return <NotFound />;
    }
    if (serverError) {
        return <ServerError />;
    }

    const { latitude, longitude, hourly } = data;

    const params = new URLSearchParams(search);
    const city = params.get("city");

    const curHour = Number(new Date().toUTCString().slice(17, 19));

    return (
        <div
            style={{
                padding: "40px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
            }}
        >
            <Breadcrumb
                items={[
                    { href: "/", title: <HomeOutlined /> },
                    {
                        title: `Weather forecast (${latitude}; ${longitude}) ${
                            city ? " — " + city : ""
                        }`,
                    },
                ]}
            />
            {city ? (
                <Title
                    level={2}
                    style={{ textAlign: "center" }}
                >
                    {city}
                </Title>
            ) : null}
            <Title
                level={5}
                style={{ textAlign: "center", padding: 0, margin: 0 }}
            >
                Weather forecast for {new Date().toUTCString().slice(4, 16)}
            </Title>
            <ForecastTable 
                hourly={hourly}
                curHour={curHour}
            />
        </div>
    );
};
