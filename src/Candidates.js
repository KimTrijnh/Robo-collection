import React from 'react'
import {Card } from 'react-bootstrap'
import {Link } from 'react-router-dom'

export default class Candidates extends React.Component {

    handleClick(id) {
        this.props.handleDel(id)
    }
    render() {
        const candidate = this.props.candidate;
        return(
            <div className="col-sm-6 col-md-3 p-3">
            <Card>
                <Card.Title className="mx-auto mt-3">
                {candidate.first_name + candidate.last_name}
                </Card.Title>
                <Card.Body className="mx-auto">
                    <Card.Img src={candidate.profilePic} alt={candidate.id} style={{width: 100}}/>
                </Card.Body>
                <Card.Footer className="mx-auto">
                <Link to={{pathname: `/view/candidate/${candidate.id}`, state: {candidate}}} >
                <button className="btn btn-primary mr-2">
                    View
                </button>
                </Link>
                <Link to={{pathname: `/edit/${candidate.id}`, state: {candidate}}} >
                <button className="btn btn-success">
                    Edit
                </button>
                </Link>
                
                <button className="btn btn-warning ml-2" onClick={e => this.handleClick(candidate.id)}> 
                    Delete
                </button>
                </Card.Footer>

            </Card>
            </div> 
        )
    }
}