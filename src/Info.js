import React from 'react'

class Info extends React.Component {
    render() {
        return(
            <div>
                <h1>Name: {this.props.name}</h1>
                <h1>phone: {this.props.phone}</h1>
        <h1>age: {this.props.age}</h1>
            </div>
        )
    }
}
export default Info