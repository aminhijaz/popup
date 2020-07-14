import React from 'react';
import './App.css';
import firebase from './firebase'
import Info from './Info'
import Navbar from "./Navbar"
import Home from './Home'
import Posts from './posts'
import Join from './Join'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";
import Contact from './Contact'
import Post from './Post';

class App extends React.Component {
  constructor() {
    super()
    this.state={
      user: {}
    }
  }
  componentDidMount() {
    this.authListener()
  }
  authListener() {
    firebase.auth().onAuthStateChanged((user) =>{
      if(user) {
        this.setState({user})
      }
      else {
        this.setState({user: null})
      }
    })
  }
  render() {
    if(this.state.user) {
      return(
        <div>
          <Navbar loggedIn={true}/>
        <Router>
          <Switch>
            <Route exact path="/" component={() => <Posts user={this.state.user.email}/>}/>
            <Route exact path="/info" component={Info}/>
          </Switch>
        </Router>
        </div>
      )
    }
    else {
      return(
        <div>
          <Navbar />
        <Join />
        </div>
      )
    }
  }
}
export default App;