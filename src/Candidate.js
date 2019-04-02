import React from 'react'

export default class Candidate extends React.Component {
    render() {
        const candidate = this.props.candidate
        return(
            <div className="container">
            <div className="mx-auto mt-5 text-center border-primary" >
            <h1 className="py-2 text-light" style={{background: 'gray'}}>{candidate.first_name + ' ' +candidate.last_name}</h1>
            <img className="img-fluid" src={candidate.profilePic} alt='avatar' style={{width: 120,height : 120}}/>
            <ul className="list-unstyled mt-3">
                <li>{candidate.gender}</li>
                <li>Job: {candidate.last_job}</li>
                <li>Skills: {candidate.skills}</li>
                <li>Weight: N/A</li>
                <li>height: N/A</li>
            </ul>
            </div>
            </div>
        )
    }
}