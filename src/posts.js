import firebase from "./firebase"
import React from 'react'
import './posts.css';
import Post from './Post'
class Posts extends React.Component {
    constructor() {
        super()
        this.state={
            caption: "",
            captions: [],
            
        }
        this.handleTextChange= this.handleTextChange.bind(this)
        this.handleSubmit= this.handleSubmit.bind(this)
        this.publish= this.publish.bind(this)
        this.readPosts= this.readPosts.bind(this)
    }
    componentWillMount() {
        this.readPosts()
       }
      
    render() {
        const data =this.state.captions
		return (
            
			<div className="App">
				<form onSubmit={this.handleSubmit}>
					<input
						type="text"
						value={this.state.caption}
						onChange={this.handleTextChange}
					/>
					<button> Submit </button>
				</form>
                <div>
                    <Post data={this.state.captions}/>
                </div>
			</div>
		)
    }
    handleTextChange(event) {
        this.setState({caption: event.target.value});
	}

	handleSubmit(event) {
        if(this.state.caption === "") {
            alert('please type something')
        }
        this.publish()
        event.preventDefault();
    }
    publish() {
        if(this.state.caption !== '') {
            const posts = firebase.database().ref('posts');
            posts.push({
              caption: this.state.caption,
              user: this.props.user
         });
         this.setState({caption: ""})
        }

    }

    readPosts() {
        firebase.database().ref('posts').on('value', (snapshot) => {
          const posts = snapshot.val();
          var captions = [];
          for (var key in posts) {
            let post = {
                caption:posts[key].caption,
                user: posts[key].user,
                id: key
            }
            captions.push(post);
          }
          this.setState({captions: captions});
        });
      }
     
}
export default Posts