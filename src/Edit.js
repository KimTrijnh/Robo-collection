import React from "react";

export default class Edit extends React.Component {
  constructor(props) {
    super(props);
    console.log('pa', this.props)
    const {...candidate} = this.props.location.state
    this.state = {...candidate};
    console.log(this.state)

  }

  handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;    
    this.setState({  [name]: value }, () => console.log(this.state));
  }

  handleSubmit(e) {
    e.preventDefault();
    this.putCandidate();
    
  }

  async putCandidate() {
    let data = new URLSearchParams();
    const url = `http://localhost:3001/Candidates/${this.state.candidate.id}`;

    data.append("first_name", this.state.first_name);
    data.append("last_name", this.state.last_name);
    data.append("gender", this.state.candidate.gender )
    data.append("profilePic", this.state.candidate.profilePic)
    data.append("skills", this.state.candidate.skills)
    data.append("last_job", this.state.candidate.last_job)
   
    console.log('data', data)
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: data.toString(),
      json: true
    });
  }

  render() {
    return (
      <div>
        <div className="container my-5 mx-auto">
          <h1 className="text-center">Edit</h1>
          <div className="row my-5">
            <div className="col-md-6 text-center">
              {/* <Candidate /> HAVE TO MAKE A FETCH HERE ?*/}
              <img
                className="img-fluid"
                src="http://icons.iconarchive.com/icons/noctuline/wall-e/256/Wall-E-icon.png"
                width="300px"
                alt="avatar"
              />
            </div>
            <div className="col-md-6">
              <form
                className="d-flex flex-column"
                onSubmit={e => this.handleSubmit(e)}
              >
                <input
                  className="formControl my-2"
                  name="first_name"
                  placeholder="firstName"
                  value={this.state.first_name}
                  onChange={e => this.handleChange(e)}
                />
                <input
                  className="formControl my-2"
                  name="last_name"
                  placeholder="Last Name"
                  value={this.state.last_name}

                  onChange={e => this.handleChange(e)}

                />
                <button className="btn btn-primary" onClick={this.handleClick}>
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
