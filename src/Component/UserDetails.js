import React from 'react'
import  { connect } from 'react-redux'
import axios from 'axios'

class UserDetail extends React.Component { 
    constructor(props) {
        super(props)
       
    }

    
    render(){
      console.log(this.props,'my props')
      const {userInfo, updateUserName, editUser}=this.props
      console.log(userInfo,'parmeshwar')
        return(
            <div>
                 {userInfo.map((item,index) => <h3 key={index} >{item}
                 <button onClick={(ind) => editUser({ind,name:'Peter'})}>Edit</button></h3>)}
                 <button onClick={(val) =>  updateUserName('Adam')}>Add Adam</button>
            </div>
        )
    }
};

const mapStateToProps = (state) => {
      return {
          userInfo:state.userDetails
      }
}
const mapDispatchToProps = (dispatch) => {
    return {
        updateUserName:( val ) => { dispatch({ type:'ADD_USER', payload : val})},
        editUser: (val) => {dispatch({ type:'UPDATE_USER',payload:val})}
    }
}
// const mapDispatchToProps = (dispatch)=>{
//     return{
//         updateUserName: (val) => { dispatch({type:'ADD_USER', payload :val})},
//         editUser: (val) => { dispatch({type:'Update_User',payload:val})}
//     }
// }
export default connect(mapStateToProps,mapDispatchToProps)(UserDetail)
