import './Register.css';
import profile from "./image/profile.png"
import mata from "./image/eye.png";

function App() {
  return (
    <div className="main">
      <div className="sub-main">
        <div>
          <div className="imgs">
              <img src={profile} alt="profile"/>
          </div>
          <div className="font1">
            <h1>Daftar akun</h1>
          </div>
          <div>
              <input type="text" placeholder="email" className="name" />
            </div>
          <div className="dua-input">
              <input type="text" placeholder="username" className="name" />
            </div>
            <div className="tiga-input">
              <img src={mata} alt="mata" className="mata" />
              <input type="text" placeholder="password" className="name" />
            </div>
            <div className="daf-button">
            <button>Daftar</button>
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

