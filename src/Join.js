import React from "react"
import firebase from './firebase'
import {signInWithGoogle} from './firebase'
class Join extends React.Component {
	constructor() {
		super()
		this.state = {
			email: "",
			password: "",

		}
        this.handleEmailChange=this.handleEmailChange.bind(this)
        this.handlePasswordChange=this.handlePasswordChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
        this.handleLogin=this.handleLogin.bind(this)
	}
	

	handleEmailChange(event) {
        this.setState({email: event.target.value});

    }
    handlePasswordChange(event) {
        this.setState({password: event.target.value});

	}

	doSignInWithGoogle(event) {
		var googleProvider =new firebase.auth.GoogleAuthProvider();

		event.preventDefault()
		firebase.auth().signInWithPopup(googleProvider);

	}
	

	handleSubmit(event) {
            event.preventDefault();
            firebase.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).then((res)=>{
                alert(res)
            }).catch((err)=>{
                alert(err);
            })
                  

	}

	

    handleLogin(event){
        event.preventDefault();
        firebase.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then((res)=>{
            alert(res)
        }).catch((err)=>{
            console.log(err);
        })
	}
	render() {
		var provider = new firebase.auth.GoogleAuthProvider();
		function click(event) {
			event.preventDefault()
				firebase.auth().signInWithPopup(provider).then(function(result) {
					// This gives you a Google Access Token. You can use it to access the Google API.
					var token = result.credential.accessToken;
					// The signed-in user info.
					var user = result.user;
					// ...
					console.log("google")
				  }).catch(function(error) {
					// Handle Errors here.
					var errorCode = error.code;
					var errorMessage = error.message;
					// The email of the user's account used.
					var email = error.email;
					// The firebase.auth.AuthCredential type that was used.
					var credential = error.credential;
					// ...
				  });
		}
		return (
			
			<div className="App">
				{/*Insert code to render a Hangman component here and pass it information to display the right image*/}
				<form>
					<input
						type="email"
						value={this.state.email}
						onChange={this.handleEmailChange}
					/>
                    					<input
						type="password"
						value={this.state.password}
						onChange={this.handlePasswordChange}
					/>

					<button onClick={this.handleSubmit}> Sign up</button>
                    <button onClick={this.handleLogin}> Sign in</button>
				</form>
				<button onClick={signInWithGoogle}>Sign up with google</button>


			</div>
		)
	}
}

export default Join