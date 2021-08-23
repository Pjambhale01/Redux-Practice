import React from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { useState, useEffect } from 'react'
const UserCall = (props) => {

    const { userInfo,updateCall } = props
    console.log(userInfo, 'inside the UserCall')

   // const { userInfo, updateCall} = props

    useEffect(() => {
        if( userInfo.length == 0){
            axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
            updateCall(res.data)
        })
        }     
    }, [])

    var handlClick = ( id ) => {
        props.history.push(`/editUser/${id}`)
    }
   
    return (
        <div>
            <h3 style={{marginLeft:'30px'}}>Inside the User calls</h3>
            {userInfo.map((i,index) => < div key ={index} style={{float:'left',margin:'20px',width:'350px',border:'2px solid black',paddingLeft:'20px',backgroundColor:'teal'}}>
                 <li><strong>Name:</strong>{i.name}</li> 
                 <li><strong>Email:</strong>{i.email}</li> 
                 <li><strong>Website:</strong>{i.website}</li>
                 <button onClick={() => handlClick(i.id)}>Edit</button>
            </div>)}
            
        </div>
    )
}

// const mapDispatchToProps = dispatch => {
//     return {
//         updateUser: val => dispatch({ type:'UPDATE_USER', payload:val})
//     }
// }

const mapDispatchToProps = dispatch => {
    return {
        updateCall: val => dispatch({ type:'UPDATE_CALL',payload:val})
    }
}

const mapStateToProps = state => {
    return {
        userInfo: state.usersCall ? state.usersCall : []
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UserCall)