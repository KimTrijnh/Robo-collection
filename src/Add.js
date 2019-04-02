import React from "react";

export default class Add extends React.Component {
  constructor() {
    super();
    this.state = { first_name: "test", last_name: "test", profilePic : "http://icons.iconarchive.com/icons/noctuline/wall-e/256/Wall-E-icon.png" };
  }



 async postCandidate(first_name, last_name) {
    const data = new URLSearchParams();
    const newCandidate = {first_name, last_name}
     data.append("first_name", first_name);
     data.append("last_name", last_name);
     data.append("profilePic", this.state.profilePic)

    const url = `http://localhost:3001/Candidates`

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: data.toString(),
      json: true
    });

    }
  

  handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value }, () => console.log(this.state));
  }

  handleSubmit(e) {
    e.preventDefault();
    const {first_name, last_name} = this.state
    this.postCandidate(first_name, last_name);
  }
  render() {
    return (
      <div>
        <div className="container my-5 mx-auto">
          <h1 className="text-center">Add More</h1>
          <div className="row my-5">
            <div className="col-md-6 text-center">
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
                {/* <input
                  className="formControl my-2"
                  name="Gender"
                  placeholder="Gender"
                />
                <input
                  className="formControl my-2"
                  name="profilePic"
                  placeholder="image url"
                />
                <input
                  className="formControl my-2"
                  name="Job"
                  placeholder="Job"
                />
                <input
                  className="formControl my-2"
                  name="skill"
                  placeholder="skills"
                /> */}
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
