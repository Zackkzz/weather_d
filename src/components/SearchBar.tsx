import { useState } from "react"
import type { FormEvent } from "react"

interface SearchBarProps {
    onSearch: (city: string) => void;
}

export function SearchBar({ onSearch }: SearchBarProps) {
    const [input, setInput] = useState('');

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (input.trim()) {
            onSearch(input);
            setInput('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="text-center">
            <label htmlFor="cityNameInput" className="mr-3">City Name</label>
            <input
                type='text'
                id="cityNameInput"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder=" Please enter a city name e.g: Sydney"
                className="bg-white w-68 rounded-sm hover:border-dotted"
            />
            <button
                type="submit"
                className="bg-white ml-3 rounded-sm border-dashed hover:bg-gray-100 hover:shadow-md transition-all cursor-pointer"
            >
                Enter
            </button>
        </form>
    )
}