import React, { Component } from 'react';
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
	onButtonClick(value) {
		// this.setState({rating: nextValue});
	  }
	render(){
		return (
			<div className='comment'>
                <div className='comment-author'>
					<FaUserCircle className = 'icon'/>{this.props.author}
				</div>
				<div className='comment-body'>
                    {this.props.children}
				</div>
				<div>
				<div className='star'>
					<StarRatingComponent key={this.props.id} value={this.state.rating}  onStarClick={this.onStarClick.bind(this)}/>
				</div>
				<div>
					<button type='button' className='button accept' value='accept' onClick={this.onButtonClick(this.value)}>
					Accept
					</button>
					<button type='button' className='button decline' value='decline' onClick={this.onButtonClick(this.value)}>
					Decline
					</button>
				</div>
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

class AdminCommentBox extends React.Component {
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
			</div>
		);
	}
}

export default AdminCommentBox