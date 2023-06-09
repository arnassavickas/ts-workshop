import { useEffect, useState } from 'react'

import UserDetails from './components/UserDetails'
import { getUsers } from './data/apiCalls'
import { transformUsers } from './data/transformers'
import HighlightWrapper from './components/HighlightWrapper'

const App = () => {
  const [userList, setUserList] = useState()

  useEffect(() => {
    const getUserData = async () => {
      try {
        const { data } = await getUsers()

        const transformedResponse = transformUsers(data.data)

        setUserList(transformedResponse)
      } catch (error) {
        console.log(error)
      }
    }

    getUserData()
  }, [])

  const renderUser = ({ id, email, firstName, lastName }) => {
    return (
      <li key={id}>
        <HighlightWrapper>
          <h3>
            {firstName} {lastName}
          </h3>
        </HighlightWrapper>
        <UserDetails email={email} />
      </li>
    )
  }

  return (
    <div>
      <ul>{userList?.map(renderUser)}</ul>
    </div>
  )
}

export default App
