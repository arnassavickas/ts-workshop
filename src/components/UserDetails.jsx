import { Component } from 'react'

class UserDetails extends Component {
  state = {
    isEmailVisible: false
  }

  toggleEmail = () =>
    this.setState((state) => ({ isEmailVisible: !state.isEmailVisible }))

  render() {
    const { email } = this.props
    const { isEmailVisible } = this.state

    return (
      <>
        <button type='button' onClick={this.toggleEmail}>
          Toggle email
        </button>
        {isEmailVisible && (
          <ul>
            <li>Email: {email}</li>
          </ul>
        )}
      </>
    )
  }
}

export default UserDetails
