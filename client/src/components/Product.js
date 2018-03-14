import React from 'react'
import axios from 'axios'

class Product extends React.Component {
  state = {product: {}}

  componentDidMount() {
    axios.get(`/api/product/${this.props.match.params.id}`)
      .then(response => this.setState({product: response.data()}))
  }

  render() {
    let {product: {name, description, price, department}} = this.state
    return (
      <div>
        <h1>{name}</h1>
        <h3>{description}</h3>
        <h3>{price}</h3>
        <h5>{department}</h5>
      </div>
    )
  }
}

export default Product
