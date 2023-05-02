import { Component } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { Link} from "react-router-dom";

class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      redirect: false,
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const payloadData = {
      name: this.state.name,
      email: this.state.email,
    };

    if (payloadData.name && payloadData.email) {
      axios
        .post(
          "https://644925ceb88a78a8f0ff1375.mockapi.io/crud-app",
          payloadData
        )
        .then((res) => {
          console.log("api res", res);
          this.setState({ redirect: true, redirectLink: "/Read" });
        });
    } else {
      alert(" Email and name required");
    }
  }
  render() {
    const { redirect, redirectLink } = this.state;

    if (redirect) {
      return <Navigate to={redirectLink} replace={true} />;
    } else {
      return (
        <>
         <h1>Create</h1>
       <Link to="/read">
       <button className="btn btn-primary">Show Data</button></Link>
          <form
            onSubmit={(e) => this.handleSubmit(e)}
            className="mt-5 mx-auto"
            style={{ maxWidth: "400px" }}
          >
            <div className="mb-3">
              <label className="col-sm-2 col-form-label">name</label>
              <input
                value={this.state.name}
                type="text"
                className="form-control"
                onChange={(e) => this.setState({ name: e.target.value })}
              />
            </div>

            <div className="mb-3">
              <label className="col-sm-2 col-form-label">Email</label>
              <input
                value={this.state.email}
                type="email"
                className="form-control"
                onChange={(e) => this.setState({ email: e.target.value })}
              />
            </div>

            <p className="text-center">
              <button className="btn btn-primary w-100">Submit</button>
            </p>
          </form>
        </>
      );
    }
  }
}
export default Create;
