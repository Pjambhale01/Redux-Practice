import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from '../Redux/reducer/reducer'
import Productlisting from './ProductList'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ProductComponent from './ProductComponent'
export const Store = () => {

    const initial = {
        product:[
            {
            id:1,
            Name:'Parmeshwar',
            Category:'Programer'
            },    
    ],
    data:['ons','two']  
    }
    const store = createStore(reducer, initial)
    return (<div>
        <Provider store={store}>
            <BrowserRouter>
            <Switch>
                <Route exact path='/product' component={Productlisting}/>
                <Route path='/productlist' component={ProductComponent}/>
            </Switch>
            </BrowserRouter>
        </Provider>
    </div>)
}
