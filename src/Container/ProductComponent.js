import React from 'react'
import { connect, useSelector } from 'react-redux'
import { Card} from 'react-bootstrap'

const ProductComponent = () => {

    const details = useSelector((state) => state.podu);
    console.log(details, 'using usseselector')
    // const {id,Name} = details
    return (
        <div>
            <h1>This is ProductComponent</h1>
            <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
      </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
        </div>
    )
}

export default ProductComponent