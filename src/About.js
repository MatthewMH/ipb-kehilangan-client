import './Mystyle.css';
import logo from './logosipbk.svg';

export default function About (){
    const infos = [  {id: 1,
                      user: 'penemu barang',  
                      details:  ['Harap membuat laporan penemuan barang dan mengembalikan barang ke pusat penampungan barang.', 
                                'Penemu barang wajib menghapus postingan barang setelah barang yang ditemukan sudah diambil oleh pemilik barang.']
                    },

                    {id : 2,
                     user: 'yang kehilangan barang',  
                     details:  ['Harap membuat laporan penemuan barang.', 
                                'Jika barang sudah ditemukan, harap mengambil barang di pusat penampungan barang.',
                                'Wajib menghapus postingan setelah barang telah kembali.']
                    }, 

                    {id : 3,
                     user: 'admin',  
                     details:  ['Jika barang sudah ada di pusat penampungan, admin wajib menghubungi penemu dan pemilik barang.', 
                                'Jika barang tidak diketahui pemiliknya, tampung terlebih dahulu di pusat penampungan.',
                                'Jika barang sudah kembali ke pemiliknya, admin wajib menghubungi penemu barang dan pemilik barang untuk menghapus postingannya.']
                    }   

    ];

    return (
            <div className="Body">
                <img src={logo} className="App-logo" alt="logo" />
                <header className = "Container">
                    <div>
                        {infos.map((info, index) => (
                                <div key={index}>
                                    <h2>Bagi {info.user}:</h2>
                    
                                    {info.details.map((detail, index) => (
                                            <ul key={index}>
                                                <li>{detail}</li>
                                            </ul>    
                                    ))}
                                    <br />
                                </div>                           
                        ))}
                    </div>
                </header>   
            </div>
                   
    );
}


  