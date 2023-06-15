export interface SearchResult {
    results: SearchItem[];
    generationtime_ms: number;
}

export interface SearchItem {
    id: number;
    name: string;
    latitude: number;
    longitude: number;
    elevation: number;
    feature_code: string;
    contry_code: string;
    admin1_id: number;
    timezone: string;
    populations: number;
    country_id: number;
    country: string;
    admin1: string;
}
