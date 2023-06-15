export interface Coordinates {
    latitude: number;
    longitude: number;
}

export interface CityData {
    latitude: number;
    longitude: number;
    hourly: CityHourly;
}

interface CityHourly {
    time: string[];
    temperature_2m: number[];
}
