import {useEffect, useState} from "react";

export const useFetch = (url) => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let isMounted = true;
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                if (isMounted) {
                    setData(data);
                    setLoading(false);
                }
            })
            .catch((error) => {
                if (isMounted) {
                    setError(error);
                    setLoading(false);
                }
            });

        return () => {
            isMounted = false;
        };
    }, [url]);

    return {data, loading, error};
};