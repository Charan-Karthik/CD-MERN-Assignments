import React, { Component } from 'react';

// work in progress
class PersonCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            firstName: this.props['firstName'],
            lastName:this.props['lastName'],
            age:this.props['age'],
            hairColor:this.props['hairColor']
        }
    }
    render(){
        return <div>
            <h1>{this.state.lastName}, {this.state.firstName}</h1>
            <p>Age: {this.state.age}</p>
            <p>Hair Color: {this.state.hairColor}</p>
            <button onClick={() => this.setState({age: this.state.age + 1})}>Birthday Button for {this.state.firstName} {this.state.lastName}</button>
        </div>;
    }
}

// previous assignment
// class PersonCard extends Component {
//     render(){
//         const{firstName, lastName, age, hairColor} = this.props;
//         return <div>
//             <h1>{lastName}, {firstName}</h1>
//             <p>Age: {age}</p>
//             <p>Hair Color: {hairColor}</p>
//             {/* <button onClick={() =>}>Birthday Button for {firstName} {lastName}</button> */}
//             <button>Birthday Button for {firstName} {lastName}</button>
//         </div>;
//     }
// }

export default PersonCard;