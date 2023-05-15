import axios from 'axios'
import { UserDto } from '../types/dtos/user'

export const getUsers = () =>
  axios.get<{
    data: Array<UserDto>
  }>('https://reqres.in/api/users')
