import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Login from './components/homepage/Login.jsx';
import Signup from './components/homepage/Signup.jsx';

const serverURL = HOSTNAME;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userSignup: '',
      userLogin: ''
    };
  }

  render() {
    return (
      <div className="loginbox">
        <Signup />
        <Login />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

export default App;