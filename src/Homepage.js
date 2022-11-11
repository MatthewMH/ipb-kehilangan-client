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

  render() {
    return(
      <div>
        <img></img>  
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