import React from 'react'
import data from './Candidates.json'
import Candidate from './Candidate'



class Main extends React.Component {
    constructor() {
        super()
        this.state = {candidates : data.Candidates}
    }
    render() {
        const {candidates} = this.state
        console.log(this.state)
        return(
            <div className='Main container'>
            <div className="row">
                { candidates.map( can => 
                    <Candidate can={can} key={can.id}/>
                    )
                }
                
            </div>
            
            </div>
        )
    }
}

export default Main