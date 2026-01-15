import { useCallback, useEffect, useState } from "react";
import type { ForecastDay } from "../types/weather";

export function Card(forecastDay: ForecastDay | null) {
    const [data, setData] = useState<ForecastDay | null>(null);

    const fetchData = useCallback(() => {
        if (forecastDay === null) {
            return;
        }

        setData(forecastDay);
    }, [forecastDay]);

    useEffect(() => {
        if (forecastDay !== null) {
            fetchData();
        }
    }, [forecastDay, fetchData])

    if (forecastDay === null) {
        return null;
    }

    return (
        <div className="flex flex-col">
            <h2 className="text-black text-center font-normal">
                Weather
                {/* {data.day.avgtemp_c} */}
            </h2>
            {/* <img 
            src={data.day.condition.icon} 
            alt={data.day.condition.text}
            className="justify-self-center text-center"/> */}
                    
            <div className="text-left">
                Temperature:12
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