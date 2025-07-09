import React, { useEffect, useState } from 'react'

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZWM0NDlhY2NiZGYyNTlhNDQ5ZGRlOWNjYTJiOTViZiIsIm5iZiI6MTc1MjAxOTE2MS42MjYsInN1YiI6IjY4NmRiMGQ5NmQwMDdmMDY2ZDEwNDA3YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KcX6WMSbCrZpuxGmdnYzGWUGdZBQCSMmXyVQ6Lmalvk'
    }
};

const useFetch = (url) => {
    const [responses, setResponses] = useState([]);
    useEffect(() => {
        return setResponses(fetchdata(url));
    }, [])
    // return responses;
}

const fetchdata = async (url) => {
    const response = await fetch(url, options)
    const data = await response.json();
    // console.log(data);
    return data;
}
export default useFetch