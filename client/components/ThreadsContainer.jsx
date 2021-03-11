//To hold the the threads (Thread.jsx) & ThreadForm.jsx
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getThreads} from '../actions/actions';
import Thread from './Thread.jsx';
import ThreadForm from './ThreadForm.jsx';

const mapStateToProps = (state) => {
  //
  return { threads: state.threads, userId: state.scratch.user.id };
};

//This Thread component will have two pieces of functionality

//Upon clicking comments div,
//1. Send a fetch request to the server to handle the request for data of all all current thread posts for this parent post. 

//2. Show an input field for the user to enter some text as well as a button to the right to POST. 

class ThreadsContainer extends Component {
    constructor(props) {
      super(props);
    }
//Upon initial render of the ThreadsContainer, fetch the past threads
    componentDidMount() {
        this.props.getThreads();
      }
    
    render() {
      return (
       //Upon conditional being met, between 
       <center className="ThreadsContainer">
           {/* Do iteration logic similiar to PostForm */}
       <Thread 
      //  key={`Thread ${i}`}
       //body={thread.body}
       //feedPostId = {thread.feedPostId}
       />
       <ThreadForm/>
     </center>
      );
     }
    }

    export default connect(mapStateToProps,{getThreads})(ThreadsContainer);