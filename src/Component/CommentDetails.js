import React from 'react'
import { connect } from 'react-redux'
import { useEffect } from 'react'
import axios from 'axios'


const CommentDetails = (props) => {
    const {commentDetails, addComments} = props
    console.log(commentDetails,'jambahhel')
    useEffect(() => {
      
        if (commentDetails.length == 0) {
            axios.get('https://jsonplaceholder.typicode.com/comments').then(res => {
                addComments(res.data)
            })
        }     
    },[])
    
    var handlClick=(id) => {
        props.history.push(`/editComment/${id}`)
    }
   
    return (
        <div>
            <h3 style={{ marginLeft:'50px'}}>Inside the Comments</h3>
            <ul>
            {commentDetails.map((i)=> 
            <div style={{border:'2px solid black',margin:'10px',backgroundColor:'teal'}}>
            <div><strong>Name:</strong>{i.name}</div>
            <div><strong>Email:</strong>{i.email}</div>
            <div><strong>Body:</strong>{i.body}</div>
            <button onClick={() => handlClick(i.id)}>Edit</button>
            </div>)}
            </ul>
        </div>
    )
}
const mapStateToProps = state => ({
    commentDetails: state.commentDetails ? state.commentDetails : []
})
const mapDispatchToProps = dispatch => ({
    addComments: val => dispatch({ type: 'ADD_Comment', payload: val })
})
export default connect(mapStateToProps, mapDispatchToProps)(CommentDetails)