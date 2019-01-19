import React, { Component } from 'react';
// import { connect } from 'react-redux';  
// import uuidv1 from "uuid";  
// import { addComment } from "../../actions/index"  
import '../css/comments.css'

import { FaUserCircle } from "react-icons/fa";
import StarRatingComponent from '../commentBox/starRating'



class Comment extends React.Component {
    constructor(props) {
    super(props);
 
    this.state = {
      rating: 1
    };
  }

    onStarClick(nextValue, prevValue, name) {
        this.setState({rating: nextValue});
      }
	render(){
		return (
			<div className='comment'>
                <div className='comment-author'>
					<FaUserCircle className = 'icon'/>{this.props.author}
				</div>
				<div className='comment-body'>
                    {this.props.children}
                    <div className='star'><StarRatingComponent key={this.props.id} value={this.state.rating}  onStarClick={this.onStarClick.bind(this)}/></div>
				</div>
			</div>
		)
	}
}

class CommentList extends React.Component {
    constructor(props){
        super(props)
        const {comments} = this.props
    }
    
	render(){
		console.log(this.props.comments)
		var commentNodes = this.props.comments
			.map(function(comment){
				return (
					<Comment author={comment.author} key={comment.id} id={comment.id}>
						{comment.text}
					</Comment>
				);
			});
		return (
			<div className='comment-list'>
				{commentNodes}
			</div>
		);
	}
}

class CommentForm extends React.Component {
    constructor(props){  
        super(props);  
        this.state = {  
            title:"",
            rating:1  
        };  
        this.handleChange = this.handleChange.bind(this);  
        this.handleSubmit = this.handleSubmit.bind(this);  
    }  
     
    handleSubmit(event) {  
        event.preventDefault();  
        const { title } = this.state;  
        const id = this.props.id;  
        // this.props.addComment({ title,id });  
        this.setState({ title: ""});  
    }  
  
    handleChange(event){  
        this.setState({  
            [event.target.id]: event.target.value  
        })  
    } 
	render(){
        const { title } = this.state;  

		return (
			<div className='comment-form'>
				<form onSubmit={this.handleSubmit}>  
                     <div  className="form-group mt-3">  
                        <label htmlFor="title"><strong>Enter your comments below</strong><br></br></label>  
                        <textarea type="text" className="form-control form"  id="title"  value={title} onChange={this.handleChange} />  
                        <br></br>
                        <button type="submit" className="button">
						{/* btn btn-success btn-lg mt-2   */}
                            Submit 
                        </button>  
                    </div>  
                </form> 
			</div>
		);
	}
}

class CommentBox extends React.Component {
	// constructor function recieves object of attributes + values
	constructor(props){
		super(props);
		this.state = {
			comments: this.props.comments
		}
	}
	render(){
		return (
			<div className='comment-box'>
				<h1 className='title'>Comments</h1>
				<CommentList comments={this.state.comments} />
				{/* <CommentForm id={1}/> */}
			</div>
		);
	}
}

// commentBox = React.render(
// 	<CommentBox comments={comments}/>,
// 	document.getElementById('content')
// );

// add to DOM
// React.render(
// 	<CommentBox/>,
// 	document.getElementById('content')
// );

export default CommentBox