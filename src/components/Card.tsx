import type { ForecastDay, WeatherData } from "../types/weather";

interface CardProps {
    weatherData: WeatherData | null;
}
export function Card({ weatherData }: CardProps) {

    if (weatherData === null) {
        console.log("no data");
        return <div>No data currently.</div>
    }

    // Check if forecast data exists before accessing it
    if (!weatherData.forecast || !weatherData.forecast.forecastday || weatherData.forecast.forecastday.length === 0) {
        console.log("no forecast data.");
        return <div>No forecast data available</div>;
    }

    const forecast: ForecastDay[] = weatherData.forecast.forecastday;
    const data = forecast[0];

    // Additional safety check
    if (!data || !data.day) {
        return <div>Invalid forecast data</div>;
    }

    return (
        <div className="flex flex-col">
            <h2 className="text-black text-center font-normal">
                Weather
            </h2>
            <div className="flex justify-center items-center mb-4">
                <img
                    src={data.day.condition.icon} 
                    alt={data.day.condition.text}
                    className="w-16 h-16"
                />
            </div>
            <div className="text-left">
                Temperature: {data.day.avgtemp_c}
                <div className="inline mx-2">
                    Feels like:
                </div>
            </div>
            
            <div>
                Humidity:
            </div>
            <div>
                Wind:
            </div>
            <div>
                condition:text
            </div>
        </div>
    )
}