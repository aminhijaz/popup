import React from 'react'
import Modal from './modal'
class Post extends React.Component {
    constructor() {
        super()
        this.getModal = this.getModal.bind(this)
        this.hideModal = this.hideModal.bind(this)
    }
    state = {
        showModal: 0
      };
    getModal = value => {
        this.setState({ showModal: value });
        console.log(this.props.id)
      };
    
      hideModal = value => {
        this.setState({ showModal: 0 });
        
      };
    render(){
        return(
          <div className="container">
          {this.props.data.map((data, key) => (
            <div key={key} className="small">
              <h1>{data.caption}</h1>
              <button onClick={() => this.getModal(data.id)}>Show more</button>
              <Modal
                show={this.state.showModal === data.id}
                onHide={() => this.hideModal(data.id)}
                name={data.caption}
              />
              <hr />
            </div>
          ))}
        </div>  
            // <div onClick={() => this.getModal(this.props.id)}>
            //     <h1>{this.props.name}</h1>
            //     <p>{this.props.user}</p>
            //     <hr />

            // <Modal
            //   show={this.state.showModal === this.props.id}
            //   onHide={() => this.hideModal(this.props.id)}
            //   name={this.props.name}
            // />
            // </div>
        )
    }
}
export default Post