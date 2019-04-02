import React from "react";
import Candidates from "./Candidates";
import Loader from './loader'
// import {getData, delCandidate, postCandidate} from './requests'

class Main extends React.Component {
  constructor() {
    super();
    this.state = { candidates: null, isLoading: true };
  }

  async getData() {
    const url = `http://localhost:3001/Candidates`;
    try {
      let response = await fetch(url);
      let json = await response.json();
      this.setState({ candidates: json, isLoading: false }, console.log(json));
    } catch (err) {
      alert(err);
    }
  }

  async delCandidate (id) {
  const url = `http://localhost:3001/Candidates/${id}`;
    try {
        let response = await fetch(url, {
            method: 'DELETE',
            header : {
              "Content-Type": "application/json"
            }
        })
    } catch(err) {
        alert(err);
    }
   }

handleDel(id) {
console.log(id)
this.delCandidate(id)
this.getData()
}


  async componentDidMount() {
      this.getData ()
  }

  render() {
    const { candidates, isLoading } = this.state;
    return (
      <div className="Main container">
        <div className="row">
          { isLoading ? <Loader /> : candidates.map(candidate => (
            <Candidates candidate={candidate} key={candidate.id} handleDel={(id) =>this.handleDel(id)}/>
          ))}
        </div>
      </div>
    );
  }
}

export default Main;
