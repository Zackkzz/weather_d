import type { ForecastDay } from "../types/weather";

interface CardProps {
    forecastDay: ForecastDay;
}

const formatTime = (timeString: string) => {
        try {
            const date = new Date(timeString);
            return date.toLocaleString('en-US', {
                month: 'short',
                day: 'numeric',
            });
        } catch {
            return timeString;
        }
    };

export function Card({ forecastDay }: CardProps) {

    if (forecastDay === null) {
        console.log("no data");
        return <div>No data currently.</div>
    }

    const data = forecastDay;

    // Additional safety check
    if (!data || !data.day) {
        return <div>Invalid forecast data</div>;
    }

    return (
        <div className="flex flex-col items-center">
            <h2 className="text-black text-center font-normal">
                Weather
            </h2>
            <div className="text-center text-sm text-gray-600 mb-3">
                {formatTime(data.date)}
            </div>
            <div className="flex justify-center items-center mb-4">
                <img
                    src={data.day.condition.icon} 
                    alt={data.day.condition.text}
                    className="w-16 h-16"
                />
            </div>
            <div>
                Avg: {data.day.avgtemp_c}°C
            </div>
            
            <div>
                Humidity: {data.day.avghumidity}%
            </div>
            <div>
                Wind: {data.day.maxwind_kph}km/h
            </div>
            <div className="text-gray-600">
                Min: {data.day.mintemp_c}°C
            </div>
        </div>
    )
}