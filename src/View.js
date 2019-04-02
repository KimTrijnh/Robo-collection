import React from 'react'
import Candidate from './candidate';

export default class View extends React.Component {
    
    render() {
    console.log(this.props)
    const candidate = this.props.location.state.candidate;
        return(
            <Candidate candidate={candidate}/>
        )
    }
}