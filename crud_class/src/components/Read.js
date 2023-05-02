import { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Read extends Component {
constructor(props){
super(props)
this.state={
    data:[],
}
//this.setData=this.setData.bind(this);
}
getData(){

    console.log("anuja");
    axios
      .get("https://644925ceb88a78a8f0ff1375.mockapi.io/crud-app")
      .then((res)=> {
        //console.log("usgfdhjusf");
        this.setState(res);
      });
}
handleDelete(id){
    axios
    .delete(`https://644925ceb88a78a8f0ff1375.mockapi.io/crud-app/${id}`)
    .then(() => {
      this.getData();
    });
}
 setToLocalStorage=(id,name,email)=>{
    localStorage.setItem("id",JSON.stringify(id));
    localStorage.setItem("name",JSON.stringify(name));
    localStorage.setItem("email",JSON.stringify(email));}


componentDidMount() {
//    fetch('https://644925ceb88a78a8f0ff1375.mockapi.io/crud-app')
//    .then(response=>response.json())
//    .then(data=>{
//     this.setState({data});
//    })
//    .catch(error=>{
//     console.error(error)
//    });
this.getData();
 }



  render() {
    return (
      <>
      <h2>Read Operation</h2>
      <Link to="/">
      <button className="btn btn-primary" >Create</button>
      </Link>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
            </tr>
          </thead>
          {this.state.data.map((eachData) => {
            return(
                <>
          <tbody>
            <tr>
              <th scope="row">{eachData.id}</th>
              <td>{eachData.name}</td>
              <td>{eachData.email}</td>
              <td>
                    <button
                      className="btn-danger"
                    onClick={() => this.handleDelete(eachData.id)}
                    >
                      Delete
                    </button>
                  </td>
                  <td>
                    <Link to="/update">
                      <button
                        className="btn-success"
                        onClick={() =>
                          this.setToLocalStorage(
                            eachData.id,
                            eachData.name,
                            eachData.email
                          )
                        }
                      >
                        Edit
                      </button>
                    </Link>
                  </td>
            </tr>
          </tbody>
          </>
          )
  })}
        </table>
        
      </>
    );
  }
}
export default Read;
