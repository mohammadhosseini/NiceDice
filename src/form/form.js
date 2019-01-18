import React, { Component } from 'react';
import {RadioGroup, Radio} from 'react-radio-group';


class Myform extends React.Component{

    constructor(props) {
        super(props);
        this.state = {value: ''};
      
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        }
      
    handleChange(event) {
        const target = event.target;
        const value =  target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }
      
    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    getInitialState() {
        return {selectedValue: '1'};
      }
    
    // handleChange(value) {
    //     this.setState({selectedValue: value});
    //   }
      
    render() {
        return (
            <div className='form-container'>
                <p>Let's design the Game:</p>
                <form onSubmit={this.handleSubmit}>
                    <div className='labels'>1. Maximum of Scores</div>
                    <input className='input' type="number" name="quantity" min="1" max="500" value={this.name} onChange={this.handleChange} />
                    <div className='labels'>2. "Current score" zero dice :</div>
                    <input className='input' type="number" name="quantity" min="1" max="6" value={this.name} onChange={this.handleChange} />
                    <div className='labels'>3. Play with this number of dices:</div>
                    <div>
                    <RadioGroup
                        name="dices"
                        selectedValue={this.state.selectedValue}
                        onChange={this.handleChange}>
                        <label>
                            <Radio value="1" />1
                        </label>
                        <label>
                            <Radio value="2" />2
                        </label>
                        <label>
                            <Radio value="3" />3
                        </label>
                        <label>
                            <Radio value="4" />4
                        </label>
                    </RadioGroup>
                        {/* <label><input type="radio" value="1" />1</label>
                        <label><input type="radio" value="2" />2</label>
                        <label><input type="radio" value="3" />3</label>
                        <label><input type="radio" value="4" />4</label> */}
                    </div>
                    <br></br>
                    <input className='input button' type="submit" value="Save" />
                </form>
            </div>
        );
    }
  }

export default Myform