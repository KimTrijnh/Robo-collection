import React from 'react'
import {Card } from 'react-bootstrap'

export default class Candidate extends React.Component {
    render() {
        const can = this.props.can;
        return(
            <div className="col-sm-6 col-md-3 p-3">
            <Card>
                <Card.Title>
                {can.first_name + can.last_name}
                </Card.Title>
                <Card.Body>
                    <img className="cardImg" src={can.profilePic} alt={can.id}/>
                </Card.Body>
                <Card.Footer>
                <button className="btn btn-primary">
                    View
                </button>
                <button className="btn btn-success">
                    Edit
                </button>
                <button className="btn btn-warning"> 
                    Delete
                </button>
                </Card.Footer>

            </Card>
            </div> 
        )
    }
}