import React from 'react';
import logo from "../image/logo.png"
import landgambar from "../image/landgambar.png"
import "./Landing.css"


const Landing = ()  => {
    return (
        <>
           <header className="header">
            <div className="container_flex">
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
            </div>
            
            <div className="tulisan">
                    <a className="helo">Halo, Selamat Datang</a>
                    <h1 className="temukan">Temukan barangmu,</h1>
                    <h1 className="bantulah">Bantulah temanmu</h1>
                    <a className="gratis">Daftar Sekarang Gratis</a>
            </div>
            <div className="tombol">
                <button className="d">Daftar</button>
                <button className="l">Login</button>
            </div>
            <div>
            <div className="lan">
                    <img className="x"src={landgambar} alt="landgambar" />
                </div>
            </div>
           </header>
        </>
    )
}


export default Landing;
