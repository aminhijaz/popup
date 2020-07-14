import React from 'react'
import firebase from './firebase'
class Navbar extends React.Component {
    signout() {
        firebase.auth().signOut().then(function() {
            // Sign-out successful.
          }).catch(function(error) {
            // An error happened.
          });          
    }
    render(){
        return(
            <div>
                <ul>
                {window.location.pathname === "/" ? "" : <li><a href='/'>Home</a></li>}
                {window.location.pathname === "/info" ? "" : <li><a href='/info'>Info</a></li>}
                {this.props.loggedIn ? <li><button onClick={this.signout}>Sign out</button></li> : ""}
                </ul>
            </div>
        )
    }
}
export default Navbar
