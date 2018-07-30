import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/postAction";

class Home extends Component{
	componentWillMount(){
		this.props.fetchPosts();
	}
	renderPosts(){
		const { posts } = this.props;
		if(posts){
			return posts.map(post =>(
				<div key={post.id}>
					<h1>{post.title}</h1>
					<p>{post.body}</p>
				</div>
			));
		}
		return null;
	}
	render(){
		return(
			<div>
			 {this.renderPosts()}
			</div>	
		);
	}
}


const mapStateToProps = state =>{
	return ({
		posts: state.posts.data
	})
}

export default connect(mapStateToProps, { fetchPosts })(Home);