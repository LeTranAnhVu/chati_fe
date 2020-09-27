import Resource from './resource'
import { UserForCommunication } from '../types'

class UserService extends Resource<UserForCommunication> {
  constructor() {
    super('users')
  }
}

export default new UserService()
