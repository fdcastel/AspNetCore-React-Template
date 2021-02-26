import React, { useState, useEffect } from 'react';

interface IForecast {
    date: string;
    temperatureC: number;
    temperatureF: number;
    summary: string;
}

interface ILocalState {
    forecasts: IForecast[];
    loading: boolean;
}

export const FetchData = () => {
    const [state, setState] = useState<ILocalState>({ forecasts: [], loading: true });

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('WeatherForecast');
            const data = await response.json();
            setState({ forecasts: data, loading: false });
        };
        fetchData();
    }, []);

    const renderForecastsTable = (forecasts: IForecast[]) => (
        <table className="table table-striped" aria-labelledby="tableLabel">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Temp. (C)</th>
                    <th>Temp. (F)</th>
                    <th>Summary</th>
                </tr>
            </thead>
            <tbody>
                {forecasts.map((forecast) => (
                    <tr key={forecast.date}>
                        <td>{forecast.date}</td>
                        <td>{forecast.temperatureC}</td>
                        <td>{forecast.temperatureF}</td>
                        <td>{forecast.summary}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );

    const contents = state.loading ? (
        <p>
            <em>Loading...</em>
        </p>
    ) : (
        renderForecastsTable(state.forecasts)
    );

    return (
        <div>
            <h1 id="tableLabel">Weather forecast</h1>
            <p>This component demonstrates fetching data from the server.</p>
            {contents}
        </div>
    );
};

FetchData.displayName = FetchData.name;
