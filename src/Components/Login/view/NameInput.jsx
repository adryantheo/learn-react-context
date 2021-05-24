import React, {useState} from 'react';


export default function NameInput(props){
    const [nama, setNama] = useState("cek");



    // ini buat ganti nama
    // const cobaGanti = async () => {
    //     setNama("Coba");
    // }

    return(
        <div style={{paddingTop: '20px', paddingBottom: '20px'}}>
            <input id="nama" type="text" placeholder="Masukkan Nama"  />
            <button onClick={async() => setNama('')}>Hapus Nama</button>
        </div>
    )
};