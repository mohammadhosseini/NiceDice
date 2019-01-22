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

class CommentViewBox extends React.Component {
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

export default CommentViewBox