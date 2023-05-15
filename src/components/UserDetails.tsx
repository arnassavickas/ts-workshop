import { Component } from 'react'

type Props = {
  email: string
}

type State = {
  isEmailVisible: boolean
}

class UserDetails extends Component<Props, State> {
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
