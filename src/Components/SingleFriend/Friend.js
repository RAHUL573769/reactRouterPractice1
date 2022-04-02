import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const Friend = ({ friend }) => {
    

    const { name, username,id } = friend;
    
    const navi = useNavigate();
    const showFriendDetail = () => {
    

        navi('/details/' + id);
    

    }
    return (
        <div>
            <h1>Name:{name}</h1>

            <button onClick={showFriendDetail}> { username}</button>
        </div>
    );
};

export default Friend;