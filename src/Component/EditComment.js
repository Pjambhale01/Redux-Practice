import React, { useState } from 'react'
import { connect } from 'react-redux'
import { useEffect } from 'react'
const EditComment = (props) => {

    const { commentDetails, updateComment } = props
    //console.log(commentDetails, 'inside th EditComment')
    const { id } = props.match.params;

    const [tempComment, setTempComment] = useState({})

    useEffect(() => {

        var findComment = commentDetails.find(item => item.id == id)
        setTempComment(findComment)
        
    }, [])


    return (
        <div>
            <h3 style={{ margin: '20px'}}>Edit CommentsS</h3>
            {Object.keys(tempComment).length > 0 &&
                <div style={{ margin: '20px',backgroundColor:'teal' }}>
                    <div style={{ margin: '5px' }}> <lable>Name</lable><input type='text' name='name' value={tempComment.name} onChange={(e) => setTempComment({ ...tempComment, name: e.target.value })}></input></div><br></br>
                    <div style={{ margin: '5px' }}> <lable>Email</lable><input type='text' name='email' value={tempComment.email} onChange={(e) => setTempComment({ ...tempComment, email: e.target.value })}></input></div><br></br>
                    <div style={{ margin: '5px' }}> <lable>Body</lable><input type='text' name='body' value={tempComment.body} onChange={(e) => setTempComment({ ...tempComment, body: e.target.value })}></input></div><br></br>
                    <button style={{ margin: '5px' }} onClick={() => { updateComment(tempComment); props.history.push('/comments'); }}>update</button>
                </div>}
        </div>
    )
}

const mapStateToProps = state => ({
    commentDetails: state.commentDetails ? state.commentDetails : []
})

const mapDispatchToProps = dispatch => ({
    updateComment: val => dispatch({ type: 'UPDATE_COMMENT', payload: val })
})

export default connect(mapStateToProps, mapDispatchToProps)(EditComment)