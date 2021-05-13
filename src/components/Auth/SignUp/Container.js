import React, { Component } from "react"
import Presentation from "./Presentations"
import { connect } from "react-redux"
import { signUp } from "../../../redux/middleware/index"
export class Container extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: "",
      password: "",
      fName: "",
      lName: "",
    }
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.signUp(this.state)
    console.log(this.state)
  }
  render() {
    const { signUpStatus, signUpState } = this.props
    return (
      <div>
        <Presentation
          {...this.state}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          signUpStatus={signUpStatus}
          signUpState={signUpState}
        />
      </div>
    )
  }
}
const mapSateToProps = (state) => {
  console.log(state.signUp.authSignUp.authSignUp)
  return {
    signUpStatus: state.signUp.authSignUp.authSignUp,
    signUpState: state.signUpState.signUp.signUp,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (user) => dispatch(signUp(user)),
  }
}
export default connect(mapSateToProps, mapDispatchToProps)(Container)
