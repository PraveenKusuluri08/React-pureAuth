import React, { Component } from "react"
import { logIn } from "../../redux/middleware"
import Presentation from "./Presentation"
import {connect} from "react-redux"
export class Container extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: "",
      password: "",
    }
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state)
    this.props.login(this.state)
  }
  render() {
    return (
      <div>
        <Presentation
          {...this.state}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    )
  }
}
const mapDispatchToProps=(dispatch)=>{
  return{
    login:(creds)=> dispatch(logIn(creds))
  }
}
export default connect(null, mapDispatchToProps) (Container)
