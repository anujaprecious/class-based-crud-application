import React from "react"
import axios from "axios";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
class Update extends React.Component{
    constructor(props){
      super(props)
      this.state={
        id:0,
        name:"",
       email:"",
       redirect: false,

      }
    }
     handleUpdate=(e)=>{
        e.preventDefault();
        //console.log("Id...",this.id)
        axios.put(`https://644925ceb88a78a8f0ff1375.mockapi.io/crud-app/${this.state.id}`,
        {
            name:this.state.name,
            email:this.state.email,
        }
        ).then(()=>{
            this.setState({ redirect: true, redirectLink: "/Read" });
        });

    };
    componentDidMount(){
        this.setState({id:JSON.parse(localStorage.getItem("id"))});
        this.setState({name: JSON.parse(localStorage.getItem("name"))});
        this.setState({email:JSON.parse(localStorage.getItem("email"))});
    }
    render(){
      console.log('this', this.state)

        const { redirect, redirectLink } = this.state;
        if (redirect) {
            return <Navigate to={redirectLink} replace={true} />;
        }else{
        return(
            <>
          <form
            onSubmit={(e) => this.handleUpdate(e)}
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
          <Link to="/read">
       <button className="btn btn-secondary mx-2">Back</button>
       </Link>
        </>
        )
    }}
}
export default Update
