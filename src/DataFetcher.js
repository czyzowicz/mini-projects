import {useEffect, useState} from "react";

export const DataFetcher = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://universities.hipolabs.com/search?country=Poland')
            .then(response => response.json())
            .then(data => {
                setData(data);
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Loading...</p>

    return (
        <ul>
            {data.map((object) => (<li>{object.name}</li>))}
        </ul>
    );
};