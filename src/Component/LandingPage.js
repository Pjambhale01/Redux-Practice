import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './Reducer/reducer'
import UserDetail from './UserDetails'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import CommentDetails from './CommentDetails'
import Headere from './Header'
import EditComment from './EditComment'
import UserCall from './UserCall'
import EditUser from './EditUser'

const initValue = {
    userDetails: ['Tommy', 'Jack'],
    commentDetails: [],
    usersCall:[]
}

const store = createStore(reducer, initValue)

export default class LandingPage extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <Provider store={store}>

                    <BrowserRouter>
                        <Headere />
                        <Switch>
                            <Route exact path='/user' component={UserDetail} />
                            <Route path='/comments' component={CommentDetails} />
                            <Route path='/editComment/:id' component={EditComment} />
                            <Route path='/usercall' component={UserCall}/>
                            <Route path='/editUser/:id' component={EditUser}/>
                        </Switch>
                    </BrowserRouter>
                </Provider>
            </div>
        )
    }
}