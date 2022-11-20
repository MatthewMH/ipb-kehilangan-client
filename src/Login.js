import React, {useState} from'react';
import './Login.css';
import profile from "./image/profile.png"
import mata from "./image/eye.png";
import google from "./image/google.png";

function App() {
  const [ingatsaya, setIngatsaya]=useState(true);

  const handleChange=() => {

  }
  return (
    <div className="main">
      <div className="sub-main">
        <div>
          <div className="imgs">
              <img src={profile} alt="profile"/>
          </div>
          <div className="font1">
            <h1>Masuk ke IPB Kehilangan</h1>
          </div>
          <div>
              <input type="text" placeholder="email/username" className="name" />
            </div>
            <div className="second-input">
              <img src={mata} alt="mata" className="mata" />
              <input type="text" placeholder="password" className="name" />
            </div>
            <div className="cekbox">
                <input className="cek" type="checkbox" value={ingatsaya} onChange={()=> handleChange(ingatsaya)} /> ingat saya
                <a className="kata_sandi" href="a">lupa kata sandi?</a>
            </div>
            <div className="login-button">
            <button>Masuk</button>
            </div>
            <p className="atau">
              atau
            </p>
            <div className="alternatif-login">
            <img src={google} alt="google" className="google" />
              <button className="alt-button">Masuk dengan google</button>
            </div>
              <p className="link-daftar">
                Belum punya akun? <a href="a">Daftar</a>
              </p>
        </div>

      </div>
    </div>
  );
}

export default App;
