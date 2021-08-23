import React, { useState } from 'react'
import { connect, useSelector } from 'react-redux'
import ProductComponent from './ProductComponent'
import {Navbar,Button,Form,Nav,FormControl} from 'react-bootstrap'
const Productlisting = (props) => {

    const [state, setState] = useState('')
    const [state1, setState1] = useState('')


    const { details, temp, newdata } = props
    console.log(details, 'using state to props')
    return (

        <div style={{ margin: '50px' }}>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/product">Home</Nav.Link>
                    <Nav.Link href="/productlist">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                </Form>
            </Navbar>
            {details.map(i => <li><b>Name:</b>{i.Name} <span style={{ margin: '10px' }}></span><b>Category:</b>{i.Category}</li>)}
            <div style={{ margin: '10px' }}>
                <b>Name:</b>
                <input type='text' value={state} onChange={(e) => setState(e.target.value)}></input>
                <b>Category:</b>
                <input type='text' value={state1} onChange={(e) => setState1(e.target.value)}></input>
            </div>
            <div>
                <button onClick={() => temp(state, state1, setState(''), setState1(''))}>Submit</button>
            </div>
            <div>
                {newdata.map(i => <li>{i}</li>)}
            </div>
        </div>

    )
}

const mapStatetoProps = (val) => {
    return {
        details: val.product,
        newdata: val.data
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        temp: (val, val1) => { dispatch({ type: "ADD_NAME", payload: val, payloadtwo: val1 }) }
    }
}
export default connect(mapStatetoProps, mapDispatchToProps)(Productlisting)
// export default Productlisting