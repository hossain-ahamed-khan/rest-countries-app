import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = () => {

    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
            .then(response => response.json())
            .then(data => setCountries(data))
    }, [])

    return (
        <>
            <div className="countries-container">
                {
                    countries.map((country, index) => <Country key={index} country={country}></Country>
                    )
                }
            </div>
        </>
    )
}

export default Countries
