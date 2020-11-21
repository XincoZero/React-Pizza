import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'

class App extends Component {
  constructor(){
    super()
    this.state = {
      pizzaArray: [],
      pizzaForEditing: null 
    }
  }

componentDidMount(){
  fetch('http://localhost:3000/pizzas')
  .then(resp => resp.json())
  .then(pizzaData => {
    this.setState({
      pizzaArray: pizzaData
    })
  })
}

editPizza = (id) => {
  const foundPizza = this.state.pizzaArray.find(pizza => pizza.id === id)
  this.setState({
    pizzaForEditing: foundPizza
  })
}


  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm pizzaForEditing={this.state.pizzaForEditing}/>
        <PizzaList pizzaList={this.state.pizzaArray} editPizza={this.editPizza}/>
      </Fragment>
    );
  }
}

export default App;
