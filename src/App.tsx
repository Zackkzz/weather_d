import { useState } from "react"
import { Nav } from "./components/Nav"
import { HeroCard } from "./components/HeroCard"
import { Card } from "./components/Card"
import { SearchBar } from "./components/SearchBar"
import { DEFAULT_CITY } from "./config/api"

export function App() {
    const [city, setCity] = useState<string>(DEFAULT_CITY);

    const handleSearch = (searchCity: string) => {
        if (searchCity.trim()) {
            setCity(searchCity.trim());
        }
    };

    return (
        <div>
            <Nav/>
            <h2 className="text-center text-2xl">An application that check the current and history weather information of a city</h2>

            <SearchBar onSearch={handleSearch}/>

            <div className="bg-white my-3 rounded-xl shadow-md w-auto basis-1/4 mx-auto px-10 py-5">
                <HeroCard city={city}/>
            </div>
            <div className="flex flex-nowrap flex-row space-x-2.5">
                <div className="bg-white p-6 rounded-xl shadow-md size-auto basis-1/4">
                <Card/>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md size-auto basis-1/4">
                    <Card/>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md size-auto basis-1/4">
                    <Card/>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md size-auto basis-1/4">
                    <Card/>
                </div>
            </div>
            
        </div>
    )
}