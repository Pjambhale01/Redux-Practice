import React from 'react'
import { connect} from 'react-redux'
import {useState, useEffect} from 'react'
const EditUser = (props) => {
    const { id} = props.match.params;
    const { userInfo, updateUser} =props
    console.log(userInfo,'bckvdkjkasjvsksjsb')

    const  [ tempUser, setTempUser] = useState({})
    //console.log(tempUser,'inseide the tempuser')
    useEffect(() => {
        var findUser = userInfo.find(item => item.id == id)
        setTempUser(findUser)
        
    },[])
    
    

    return(
        <div>
            <h3 style={{ margin: '20px' }}>this is a inside the EditUser</h3>
            <div style={{ margin: '20px',backgroundColor:'teal' }}>
            <div style={{ margin: '15px',marginTop:'5px' }}><lable>Name:</lable><input type='text' value={tempUser.name} onChange={(e)=>setTempUser({...tempUser,name:e.target.value})}></input></div>
            <div style={{ margin: '15px' }}><lable>Email:</lable><input type='text' value={tempUser.email} onChange={(e)=>setTempUser({...tempUser,email:e.target.value})}></input></div>
            <div style={{ margin: '15px' }}><lable>Website:</lable><input type='text' value={tempUser.website} onChange={(e)=>setTempUser({...tempUser,website:e.target.value})}></input></div>
            <button style={{ margin: '15px' }} onClick={ () => { updateUser(tempUser);props.history.push('/usercall')}}>Edit</button>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        updateUser: val => dispatch({ type:'USER_call',payload:val})
    }
}

const mapStateToProps = state => {
    return{
        userInfo: state.usersCall ? state.usersCall : []
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(EditUser)