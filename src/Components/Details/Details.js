import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Details = () => {

    const { friendId } = useParams();

    const [friendDetail, setFriendDetai] = useState({});
    
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
        console.log(url);
        fetch(url)
            .then(res => res.json())
        .then(data=>setFriendDetai(data))
},[])

    return (
         <div>
            <h1>This is details :{friendId}</h1>
            
            <h3>Nmae:{friendDetail.name}</h3>
            <p>Eamil:{friendDetail.website}</p>
            <p>City:{ friendDetail.address?.city}</p>
        </div>
    );
};

export default Details;