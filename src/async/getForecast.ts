import { Coordinates } from "../interfaces/Forecast";

export async function getForecast({ latitude, longitude }: Coordinates) {
    try {
        const SEARCH = new URLSearchParams({
            latitude: String(latitude),
            longitude: String(longitude),
            hourly: "temperature_2m",
            forecast_days: "1",
        }).toString();

        const BBASE_URL = "https://api.open-meteo.com/v1/forecast?";
        const url = BBASE_URL + SEARCH;

        const result = await fetch(url, { method: "GET" }).then((res) =>
            res.json()
        );
        return result;
    } catch (err) {
        return null;
    }
}
