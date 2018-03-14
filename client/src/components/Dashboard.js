import React from 'react';
import { Redirect, Link} from 'react-router-dom';
import { isAuthenticated } from '../fakeAuth';
import axios from 'axios'


class Dashboard extends React.Component {
  state = {products: []}

  componentDidMount() {
    axios.get('/api/products') // Corresponds to rails index
      .then(response => this.setState({products: response.data}))
    // This handles the part where 
  }

  render() {
    let {products} = this.state
    if (isAuthenticated())
      return (<ul>
          { products.map(p => 
            <li key={p.id}>
              <Link to={`/products/${p.id}`}>{p.name}</Link>
            </li>
            )
          }
        </ul>
      )
    else
      return <Redirect to="/login" />
  }
}
// const Dashboard = () => (
//   isAuthenticated() ? (<div>{Math.random()} has logged in</div>) :
//   (<Redirect to="/" />)
//   )
// 
export default Dashboard
