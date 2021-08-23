import React from 'react'
import { Store } from './Store'

const Header = () => {
    return(
        <div className="ui fixed menu">
             <div className="ui container center">
                 <h2>Fake Shop</h2>
                 <Store/>
             </div>

        </div>
    )
}

export default Header