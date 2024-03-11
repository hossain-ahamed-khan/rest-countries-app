import "./Country.css";

const Country = ({ country }) => {
    const { area, capital, flags, languages, maps, name, population, region, timezones } = country;

    return (
        <div className="country-container">
            <img src={flags.png} alt="" />
            <h3>Name: {name.common}</h3>
            <p>Area: {area}</p>
            <p>Capital: {capital}</p>
            <p>Language: { }</p>
        </div>
    )
}

export default Country