import React from 'react';
import {useCookies} from 'react-cookie';

export default function Home(){
    const [cookies, setCookies, removeCookie] = useCookies(['name']);

    function handleCookie(){
        setCookies('name', 'Teo', {
            path: '/',
            maxAge: 3
        });
        // document.cookie = "name=A Theo; path=/";
    }

    function removeCok(){
        removeCookie('name');
    }


    return(
        <div>
            <h1>Hello World</h1>
            <button onClick={handleCookie}>Set Cookie</button>
            <button onClick={removeCok}>Remove Cookie</button>
        </div>
    );
}