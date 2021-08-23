import React from 'react'
import { Link } from 'react-router-dom'
const Headere = () => {
    return(
        <div>
            <Link style={{margin:'20px'}} to = '/user'>User</Link>
            <Link style={{margin:'20px'}} to ='/comments'>Comment</Link>
            <Link style={{margin:'20px'}} to = '/usercall'>UserCall</Link>
        </div>
    )
}

export default Headere