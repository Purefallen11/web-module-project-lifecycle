import './App.css';
import React from 'react'
import axios from 'axios'
import UserCard from './components/UserCard';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      data: []
    }
  }

  componentDidMount() {
  axios
			.get('https://api.github.com/users/Purefallen11')
    .then(res => {
      this.setState({
        ...this.state,
        data: res.data
      })
      console.log(this.state.data)
      })
		.catch(err =>{ console.log(err)})
  }

  
  render() {
    return (
      <div>
        <UserCard name={this.state.data.name} img={this.state.data.avatar_url} location={this.state.data.location} bio={this.state.data.bio} />
      </div>
    )
  }
}

export default App;
