import './App.css';

class CreateReport extends React.Component {
  render() {
    return(
      
    );
  }
}

class About extends React.Component {
  render() {
    return(
      
    );
  }
}

class Dashboard extends React.Component {


  render() {
    return(
      
    );
  }
}

class FotoProfil extends React.Component {
  constructor() {
    super(props);
    this.state = {picture : "http://something.com", count: 0};
  }

  handleLogin = async () => {
    try {
      // axios.post()

    } catch {
      // handle error
    }

    // success login
    navigator('/home')
  }
  // const [count, setCount] = useState(0);

  render() {
    // something blabla
    return(
      <div>
        <img></img>  
        <button onClick={handleLogin}>Login</button>
      </div>
    );
  }
}

class Navigator extends React.Component {
  render() {
    return(
      <div>
        <FotoProfil />
        <Dashboard />
        <About />
        <CreateReport />
      </div>
    );
  }
}

class Homepage extends React.Component {
  render() {
      return(
        <div>
          <Navigator />
        </div>
    );
  }
}

export default Homepage;