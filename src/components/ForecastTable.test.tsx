import { render } from "@testing-library/react";
import { ForecastTable } from "./ForecastTable";

const mockCurHour = 12;
const mockHourly = {
    time: [
        "2023-06-20T00:00",
        "2023-06-20T01:00",
        "2023-06-20T02:00",
        "2023-06-20T03:00",
        "2023-06-20T04:00",
        "2023-06-20T05:00",
        "2023-06-20T06:00",
        "2023-06-20T07:00",
        "2023-06-20T08:00",
        "2023-06-20T09:00",
        "2023-06-20T10:00",
        "2023-06-20T11:00",
        "2023-06-20T12:00",
    ],
    temperature_2m: [
        19, 19.3, 19.6, 19.9, 20, 19.9, 19.7, 19.3, 19.2, 19.2, 18.7, 18.5,
        18.3, 18.1, 18.2, 18.1,
    ],
};

describe("should render ForecastTable properly", () => {
    it("should match the snapshot", () => {
        const { asFragment } = render(
            <ForecastTable
                hourly={mockHourly}
                curHour={mockCurHour}
            />
        );
        expect(asFragment()).toMatchSnapshot();
    });
});
