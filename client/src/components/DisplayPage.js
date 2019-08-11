import React from "react";
import axios from "axios";
class DisplayPage extends React.Component {
  constructor(props) {
    console.log("userpage props", props);
    super(props);
    this.state = {
      restrictedData: []
    };
  }
  componentDidMount(){
      this.fetchRestricted()
  }
  fetchRestricted =() => {
      axios
        .get("http://localhost:5000/api/restricted/data")
        .then(res => this.setState({ restrictedData: res.data}))
        .catch(err => console.log(err.response));

  }
  render() {
      console.log(this.state.restrictedData)
    return (
      <>
        <h1>Restricted Data</h1>
        {this.state.restrictedData.map(res => 
            <>
            <p>Name: {res.name}</p>
            <p>Course: {res.course}</p>
            <p>Technique: {res.technique}</p>
            <h4>Ingredients:</h4>
            <ul> {res.ingredients.map(res=>
                <li>{res}</li>)}</ul>
            </>
            )}

      </>
    );
  }
}
export default DisplayPage;
