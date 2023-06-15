import { SearchResult } from "../interfaces/Search";

export async function getCity(str: string) {
    try {
        const url = "https://geocoding-api.open-meteo.com/v1/search?name=";
        const { results }: SearchResult = await fetch(url + str, {
            method: "GET",
        }).then((res) => res.json());
        return results;
    } catch (err) {
        return null;
    }
}
