import React, { Component } from "react"

class Pizza extends Component {
//const Pizza = () => {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return(
      <tr>
        <td>{this.props.pizza.topping}</td>
        <td>{this.props.pizza.size}</td>
        <td>{this.props.pizza.vegetarian ? "Yes" : "No"}</td>
        <td><button onClick={() => this.props.editPizza(this.props.pizza.id)} type="button" className="btn btn-primary">Edit Pizza</button></td>
      </tr>
    )
  }

  // return(
  //   <tr>
  //     <td>{this.props.pizzaList.topping}</td>
  //     <td>{"Replace Me With Pizza Size"}</td>
  //     <td>{"Replace Me With Vegatarian"}</td>
  //     <td><button type="button" className="btn btn-primary">Edit Pizza</button></td>
  //   </tr>
  // )
//}

}
export default Pizza
