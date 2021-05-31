import { useEffect, useState } from 'react';

const useRequest = (initialUrl) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [url, setUrl] = useState(initialUrl);

    useEffect(async () => {
        if (!url) {
            return;
        }
        
        setIsLoading(true);
        setIsError(false);

        try {
            const result = await fetch(url);

            const parsedResult = await result.json();

            setData(parsedResult);
        } catch (e) {
            setIsError(true);
        }

        setIsLoading(false);
    }, [url]);

    return [{ data, isLoading, isError }, setUrl];
};

export default useRequest;