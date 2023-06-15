import { Timeline } from "antd";
import { FC } from "react";

interface ForecastTableProps {
    hourly: {
        temperature_2m: Array<number>;
        time: Array<string>;
    };
    curHour: number;
}

function getItemStyle({ hour, curHour }: { hour: number; curHour: number }) {
    console.log(hour, curHour);
    if (hour > curHour) return { color: "blue" };
    if (hour < curHour) return { color: "gray" };
    return { color: "green" };
}

export const ForecastTable: FC<ForecastTableProps> = ({
    hourly,
    curHour,
}: ForecastTableProps) => {
    const items = hourly?.time?.map((t, i) => ({
        label: t.slice(11),
        children: (
            <div style={{ fontWeight: 500 }}>
                {hourly?.temperature_2m[i] + " °C"}
            </div>
        ),
        ...getItemStyle({ hour: new Date(t).getHours(), curHour }),
    }));

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "row",
                marginTop: "60px",
                width: "500px",
            }}
        >
            <Timeline
                style={{ flex: 1 }}
                mode="right"
                items={items.slice(0, 12)}
            />
            <Timeline
                style={{ flex: 1 }}
                mode="left"
                items={items.slice(12, 24)}
            />
        </div>
    );
};
