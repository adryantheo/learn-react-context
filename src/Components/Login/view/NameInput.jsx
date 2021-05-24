import React, {useState, useEffect} from 'react';


export default function NameInput(props){
    const [nama, setNama] = useState("");

    useEffect(() => {
        setNama("Hello");
    },[]) 


    const onTodo = (val)=> {
        setNama(val)
    }

    // ini buat ganti nama
    // const cobaGanti = async () => {
    //     setNama("Coba");
    // }

    return(
        <div style={{paddingTop: '20px', paddingBottom: '20px'}}>
            <input id="nama" type="text" placeholder="Masukkan Nama" value={nama} onChange={(e) => onTodo(e.target.value)} />
            <button onClick={async() => setNama('')}>Hapus Nama</button>
        </div>
    )
};