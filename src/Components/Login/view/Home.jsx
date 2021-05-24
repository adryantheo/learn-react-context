import React, {Suspense, useState} from 'react';
import {useCookies} from 'react-cookie';
const NameInput = React.lazy(async () => import('./NameInput'));

export default function Home(){
    const [cookies, setCookies, removeCookie] = useCookies(['name']);
    const [name, setName] = useState('');

    function handleCookie(nama){
        setCookies('name', nama, {
            path: '/',
            maxAge: 3 //satuan second aka: ini cuma ada 3 second
        });
        window.location.reload();
        // document.cookie = "name=A Theo; path=/";
    }

    function removeCok(){
        removeCookie('name');
        window.location.reload();
    }
    function setNama(){
        setName('');
        const val = document.getElementById('nama').value;
        setName(val);
        handleCookie(val);
        console.log(name);
    }


    return(
        <div style={{alignItems: 'center', textAlign: 'center'}}>
            <h1>Hello World</h1>
            <Suspense fallback={<h2 style={{textAlign: 'center'}}>Loading</h2>}>
                <NameInput />
            </Suspense> 
            <button onClick={setNama}>Set Cookie</button>
            <button onClick={removeCok}>Remove Cookie</button>
        </div>
    );
}