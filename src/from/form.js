import React, { Component } from 'react';


class Myform extends React.Component{

    constructor(props) {
        super(props);
        this.state = {value: ''};
      
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        }
      
    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }
      
    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }
      
    render() {
        return (
            <div className='form-container'>
                <p>Let's design the Game:</p>
                <form onSubmit={this.handleSubmit}>
                    <div className='labels'>1. Maximum of Scores</div>
                    <input className='input' type="text" value={this.state.value} onChange={this.handleChange} />
                    <div className='labels'>2. "Current score" zero dice :</div>
                    <input className='input' type="text" value={this.state.value} onChange={this.handleChange} />
                    <div className='labels'>3. Play with this number of dices:</div>
                    <label><input type="radio" value="1" />1</label>
                    <label><input type="radio" value="2" />2</label>
                    <label><input type="radio" value="3" />3</label>
                    <label><input type="radio" value="4" />4</label>
                    <br></br>
                    <input className='input button' type="submit" value="Save" />
                </form>
            </div>
        );
    }
  }

export default Myform